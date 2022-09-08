import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tickerMiddleware from '../redux/ticker/tickerMiddleware';
import TickerItem from './tickerItem';
import Description from './description';
import Loader from './loader';

const Container = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(tickerMiddleware());
	}, []);

	const tickersData = useSelector((state) => state.tickers.data);
	const prevTickersData = useSelector((state) => state.tickers.prevData);

	return tickersData.length > 0 ? (
		<div className='ticker-container'>
			<Description />
			{tickersData.map((ticker, index) => (
				<TickerItem
					key={index}
					data={ticker}
					change={
						prevTickersData.length > 0
							? ticker.price > prevTickersData[index].price
								? 'more'
								: 'less'
							: null
					}
				/>
			))}
		</div>
	) : (
		<Loader />
	);
};

export default Container;
