import { Card, Grid, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'
import { ICryptos } from './types'

const Cryptos: FC<PropsWithChildren<ICryptos>> = ({ data }) => {
	return (
		<Card className={styles.card}>
			<Grid item container spacing={2} sm>
				<Grid item xs> 
					<Typography variant='h4' fontWeight={700} component='h4' className={styles.title}>
						{data.id}
					</Typography>
          <Typography variant='h6' fontWeight={500} component='h6' className={styles.second}>{data.price}</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}

export default Cryptos
