import { io } from 'socket.io-client';
import { tickerActions } from './tickerSlice.js';
import { API_URL } from '../../utils/config.js';

const tickerMiddleware = () => (dispatch) => {
	const socket = io.connect(API_URL);

	socket.on('connect', () => {
		socket.emit('start');
		dispatch(tickerActions.isConnected());
	});

	socket.on('ticker', (data) => {
		dispatch(tickerActions.rememberOldTickerData());
		dispatch(tickerActions.getTickerData(data));
	});
};

export default tickerMiddleware;
