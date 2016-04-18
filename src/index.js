import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import configureStore from './store/configureStore';

const app = document.getElementById('app');
const store = configureStore();

ReactDOM.render(<App store={store}/>, app);
