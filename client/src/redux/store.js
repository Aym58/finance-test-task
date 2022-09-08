import { configureStore } from '@reduxjs/toolkit';
import { tickerReducer } from './ticker/tickerSlice';
import thunk from 'redux-thunk';

const store = configureStore({
	reducer: {
		tickers: tickerReducer,
	},
	middleware: [thunk],
});

export default store;
