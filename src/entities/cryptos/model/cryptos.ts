import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCryptos } from '@/shared/api'
import { ICryptosState } from './types'

const name = `entities:cryptos`

const initialState: ICryptosState = {
	details: [],
	status: 'idle',
	error: null
}

export const cryptosSlice = createSlice({
	name,
	initialState,
	reducers: {},
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

export const fetchCryptos = createAsyncThunk(`${name}/fetchCryptos`, async () => {
	const res = await getCryptos({})
	console.log(res)
	return res
})
