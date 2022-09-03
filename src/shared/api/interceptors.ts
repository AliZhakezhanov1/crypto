import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

axios.interceptors.request.use(
	(req: AxiosRequestConfig) => {
		if (req?.headers) {
			req.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
		}
		return req
	},
	(err: AxiosError) => {
		throw new Error(err.message)
	}
)

axios.interceptors.response.use(
	(res: AxiosResponse) => res,
	(err: AxiosError) => {
		throw new Error(err.message)
	}
)
