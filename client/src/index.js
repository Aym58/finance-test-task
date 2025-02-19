import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
