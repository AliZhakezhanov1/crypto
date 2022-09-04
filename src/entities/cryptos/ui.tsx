import { Box, Card, Typography } from '@mui/material'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'
import { ICryptos } from './types'

const Cryptos: FC<ICryptos> = ({ data, convert }) => {
	const { ref, inView } = useInView({
		threshold: 0
	})

	return (
		<Card ref={ref} className={`card${inView ? ' card_view' : ''}`}>
			<Box className='card_item card_item_first'>
				<Box className='card_titles'>
					<Typography variant='h4' fontWeight={700} component='h4' className='card_title'>
						{data.currency}
					</Typography>
					<Typography variant='h6' fontWeight={500} component='h6' className='card_title'>
						{convert }{data.price}
					</Typography>
				</Box>
				<Box className='card_image'>
					<LazyLoadImage
						effect='blur'
						placeholder={<div>load...</div>}
						alt={data.id}
						src={data.logo_url}
						width={60}
						height={60}
					/>
				</Box>
			</Box>
			<Box className='card_item card_item_second'>
				<Box className='card_volume'>
					<Typography
						variant='subtitle1'
						fontWeight={500}
						component='div'
						className='card_volume_title card_item_title'
					>
						volume
					</Typography>
					<Typography
						variant='subtitle1'
						fontWeight={500}
						component='div'
						className='card_volume_subtitle card_item_subtitle'
					>
						{data['1h'].volume}
					</Typography>
				</Box>
				<Box className='card_change'>
					<Typography
						variant='subtitle1'
						fontWeight={500}
						component='div'
						className='card_change_title card_item_title'
					>
						change
					</Typography>
					<Typography
						variant='subtitle1'
						fontWeight={500}
						component='div'
						className='card_change_subtitle card_item_subtitle'
					>
						{data['1h'].price_change}
					</Typography>
				</Box>
			</Box>
		</Card>
	)
}

export default Cryptos
