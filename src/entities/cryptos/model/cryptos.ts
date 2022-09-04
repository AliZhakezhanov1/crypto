import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICryptosParam, getCryptos } from '@/shared/api'
import { ICryptosState } from './types'

const name = `entities:cryptos`

const initialState: ICryptosState = {
	details: [],
	status: 'idle',
	error: null,
	fiat: 'USD'
}

export const cryptosSlice = createSlice({
	name,
	initialState,
	reducers: {
		setFiat(state, action) {
			state.fiat = action.payload
		},
		deleteDetails(state, action) {
			state.details = []
		}
	},
	extraReducers(builder) {
		builder
			.addCase(fetchCryptos.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchCryptos.fulfilled, (state, action) => {
				state.status = 'succeeded'

				state.details = action.payload
			})
			.addCase(fetchCryptos.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	}
})

export const { setFiat, deleteDetails } = cryptosSlice.actions

export const fetchCryptos = createAsyncThunk(`${name}/fetchCryptos`, async ({ page, convert }: ICryptosParam) => {
	const res = await getCryptos({ page, convert })
	return res
})
