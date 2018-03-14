import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header/Header';
import Home from './Home/Home';
import Details from './Details/Details';

const RestaurantRoute = () => (
  <Router>
    <div>
    	<Header />
      <Route exact path="/" component={Home}/>
      <Route path="/detail/:id" component={Details}/>
    </div>
  </Router>
)

export default RestaurantRoute

