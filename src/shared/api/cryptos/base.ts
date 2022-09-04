import axios from 'axios'
import { env } from '@/shared/config'

export const instance = axios.create({
	baseURL: 'http://localhost:4200'
})
