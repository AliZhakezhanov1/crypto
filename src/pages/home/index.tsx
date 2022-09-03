import { Container } from '@mui/material'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
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
		<Section className={styles.home_section}>
			<Container maxWidth='md'>
				{cryptos.map(crypto => (
					<Cryptos key={crypto.id} data={crypto} />
				))}
			</Container>
		</Section>
	)
}

export default HomePage
