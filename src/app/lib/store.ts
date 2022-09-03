import { configureStore } from '@reduxjs/toolkit'
import { cryptosModel } from '@/entities/cryptos'

export const store = configureStore({
	reducer: {
		cryptos: cryptosModel.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
