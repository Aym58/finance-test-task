import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	prevData: [],
	isConnected: false,
};

export const tickerSlice = createSlice({
	name: 'tickers',
	initialState,
	reducers: {
		isConnected: (state) => {
			state.isConnected = true;
		},
		rememberOldTickerData: (state) => {
			state.prevData = state.data;
		},
		getTickerData: (state, action) => {
			state.data = action.payload;
		},
	},
});

export const tickerActions = tickerSlice.actions;
export const tickerReducer = tickerSlice.reducer;
