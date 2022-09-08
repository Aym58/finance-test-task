import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { act as domAct } from 'react-dom/test-utils';
import TickerItem from './components/tickerItem';

let container = null;
const data = {
	ticker: 'AAPL',
	exchange: 'NASDAQ',
	price: 279.29,
	change: 64.52,
	change_percent: 0.84,
	dividend: 0.56,
	yield: 1.34,
	last_trade_time: '2021-04-30T11:53:21.000Z',
};

it('renders without crashing', () => {
	shallow(<App />);
});

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('check TickerItem rendering and date formatting', () => {
	domAct(() => {
		render(<TickerItem data={data} />, container);
	});
	expect(container.querySelector('.ticker-item-time').textContent).toBe(
		'11:53:21'
	);
});
