const TickerItem = (props) => {
	const data = props.data;

	const time = data.last_trade_time.slice(11).slice(0, 8);

	const date = data.last_trade_time.slice(0, 10);

	return (
		<div className={`ticker-item ${props.change}`}>
			<div className='ticker-item-data'>
				<span>{data.ticker}</span>
			</div>
			<div className='ticker-item-data'>
				<span>{data.exchange}</span>
			</div>
			<div className='ticker-item-data'>
				<span>{data.price}</span>
			</div>
			<div className='ticker-item-data'>
				<span>{data.change}</span>
			</div>
			<div className='ticker-item-data'>
				<span>{data.change_percent}</span>
			</div>
			<div className='ticker-item-data'>
				<span>{data.dividend}</span>
			</div>
			<div className='ticker-item-data'>
				<span>{data.yield}</span>
			</div>
			<div className='ticker-time'>
				<div className='ticker-item-date'>
					<span>{date}</span>
				</div>
				<div className='ticker-item-time'>
					<span>{time}</span>
				</div>
			</div>
		</div>
	);
};

export default TickerItem;
