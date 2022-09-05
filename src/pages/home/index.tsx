import {
	Box,
	CircularProgress,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography
} from '@mui/material'
import { FC, useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import { DefaultLayout } from '@/app/layout/default-layout'
import { AppDispatch, RootState } from '@/app/lib/store'
import { TConvert } from '@/shared/api'
import { Section } from '@/shared/ui'
import { convertFiats } from './lib'
import './styles.scss'
import { Cryptos } from '@/entities/cryptos'
import { deleteDetails, fetchCryptos, setFiat } from '@/entities/cryptos/model/cryptos'

const HomePage: FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const cryptos = useSelector((state: RootState) => state.cryptos.details)
	const cryptosStatus = useSelector((state: RootState) => state.cryptos.status)
	const fiat = useSelector((state: RootState) => state.cryptos.fiat)
	const location = useLocation()
	const navigate = useNavigate()

	const handleChange = (e: SelectChangeEvent) => {
		const value = e.target.value as string
		dispatch(deleteDetails('delete'))
		dispatch(fetchCryptos({ page: 100, convert: value }))
		navigate({
			pathname: '/',
			search: `?convert=${value}`
		})
	}

	useEffect(() => {
		const convert: TConvert | undefined = convertFiats.find(item => location.search.includes(item))
		if (convert) {
			dispatch(setFiat(convert))
		}
	}, [location])

	useEffect(() => {
		if (cryptosStatus === 'idle') {
			dispatch(fetchCryptos({ page: 100, convert: fiat }))
		}
	}, [cryptosStatus, dispatch])

	return (
		<DefaultLayout>
			<Section className='home_section'>
				<Container maxWidth='xl' sx={{ position: 'relative' }}>
					<Typography variant='h2' fontWeight={700} component='h2' textAlign='center' className='home_title'>
						Welcome to Cryptos
					</Typography>
					<Box sx={{ minWidth: 120, mt: 10 }}>
						<FormControl fullWidth variant='outlined'>
							<InputLabel id='demo-simple-select-label' sx={{ color: 'white' }}>
								Fiats
							</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={fiat}
								label='Age'
								onChange={handleChange}
								sx={{ color: 'white' }}
							>
								{convertFiats.map(convertFiat => (
									<MenuItem key={convertFiat} value={convertFiat}>
										{convertFiat}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					{cryptosStatus === 'loading' && (
						<Box className='home_progress_wrapper'>
							<CircularProgress />
						</Box>
					)}
					{cryptos.length > 0 && (
						<Box className='cryptos_wrapper'>
							{cryptos.map(crypto => (
								<LazyLoadComponent key={crypto.id}>
									<Cryptos data={crypto} convert={fiat} />
								</LazyLoadComponent>
							))}
						</Box>
					)}
				</Container>
			</Section>
		</DefaultLayout>
	)
}

export default HomePage
