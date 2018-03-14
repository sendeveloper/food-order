import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import RestaurantRoute from './components/RestaurantRoute'

ReactDOM.render(<RestaurantRoute />, document.getElementById('root'));
registerServiceWorker();
