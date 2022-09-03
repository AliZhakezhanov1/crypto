import { Box, Card, Grid, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './styles.module.scss'
import { ICryptos } from './types'

const Cryptos: FC<PropsWithChildren<ICryptos>> = ({ data }) => {
	return (
		<Card className={styles.card}>
			<Box className={styles.box}>
				<Grid container spacing={2} component='div' justifyContent='space-between'>
					<Grid item>
						<Typography variant='h4' fontWeight={700} component='h4' className={styles.title}>
							{data.id}
						</Typography>
						<Typography variant='h6' fontWeight={500} component='h6' className={styles.second}>
							${data.price}
						</Typography>
					</Grid>
					<Grid item>
						<LazyLoadImage
							effect='opacity'
							placeholder={<div>load...</div>}
							alt={data.id}
							src={data.logo_url}
							width={60}
							height={60}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2} component='div' sx={{ mt: 0.5 }}>
					<Grid item sx={{ mr: 2 }}>
						<Typography variant='subtitle1' fontWeight={500} component='div' className={styles.title}>
							volume
						</Typography>
						<Typography variant='subtitle1' fontWeight={500} component='div' className={styles.title}>
							{data['1d'].volume}
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1' fontWeight={500} component='div' className={styles.title}>
							change
						</Typography>
						<Typography variant='subtitle1' fontWeight={500} component='div' className={styles.title}>
							{data['1d'].price_change}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Card>
	)
}

export default Cryptos
