// import { instance } from './base'
import { getCryptosMock } from './mock'
import { ICryptoParam, ICryptos } from './types'

export const getCryptos = async ({ page = 1 }: ICryptoParam): Promise<ICryptos[]> => {
	/* use with backend */

	// const res = await instance({
	// 	method: 'GET',
	// 	url: `/cryptos/?page=${page}`
	// })

	/* can comment or delete */
	type Res = ReturnType<typeof getCryptosMock>
	const res: Awaited<Res> = await getCryptosMock()

	return res.data
}
