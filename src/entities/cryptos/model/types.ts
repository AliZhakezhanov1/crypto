import { ICryptosRes } from '@/shared/api'

export interface ICryptosState {
	details: ICryptosRes[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null | undefined,
	fiat: string
}
