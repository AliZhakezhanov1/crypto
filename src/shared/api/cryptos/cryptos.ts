import { instance } from './base'
import { ICryptoParam, ICryptos } from './types'

export const getCryptos = async ({ page }: ICryptoParam): Promise<ICryptos> => {
	const res = await instance({
		method: 'GET',
		url: `/cryptos/?page=${page}`
	})

	return res.data
}
