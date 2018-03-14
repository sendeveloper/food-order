import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home/Home';
import Details from './Details/Details';

const RestaurantRoute = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/detail/:id" component={Details}/>
    </div>
  </Router>
)

export default RestaurantRoute

