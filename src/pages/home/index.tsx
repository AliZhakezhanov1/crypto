import { Container, Divider, ListItem, Stack, Typography } from '@mui/material'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { DefaultLayout } from '@/app/layout/default-layout'
import { AppDispatch, RootState } from '@/app/lib/store'
import { Section } from '@/shared/ui'
import styles from './styles.module.scss'
import { Cryptos } from '@/entities/cryptos'
import { fetchCryptos } from '@/entities/cryptos/model/cryptos'

const HomePage: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const cryptos = useSelector((state: RootState) => state.cryptos.details)
	const cryptosStatus = useSelector((state: RootState) => state.cryptos.status)

	useEffect(() => {
		if (cryptosStatus === 'idle') {
			dispatch(fetchCryptos())
		}
	}, [cryptosStatus, dispatch])

	return (
		<DefaultLayout>
			<Section className={styles.home_section}>
				<Container maxWidth='md'>
					<Typography variant='h2' fontWeight={700} component='h2' textAlign='center' className={styles.title}>
						Welcome to Cryptos
					</Typography>
					<Stack flexDirection={'row'} divider={<Divider orientation='vertical' flexItem />} spacing={2} className={styles.cryptos_wrapper}>
						{cryptos.map(crypto => (
							<ListItem key={crypto.id}>
								<Cryptos data={crypto} />
							</ListItem>
						))}
					</Stack>
				</Container>
			</Section>
		</DefaultLayout>
	)
}

export default HomePage
