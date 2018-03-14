import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import PageTransition from "react-router-page-transition";
import './RestaurantRoute.css';

import Header from './Header/Header';
import Home from './Home/Home';
import Details from './Details/Details';

class RestaurantRoute extends Component{
	render(){
    return (
		  <Router>
		    <div>
		    	<Header />
		    	<Route
		        render={({ location }) => (
		          <PageTransition timeout={500}>
		            <Switch location={location}>
		              <Route exact path="/" component={Home}/>
		      				<Route path="/detail/:id" component={Details}/>
		            </Switch>
		          </PageTransition>
		        )}
		      />
		    </div>
		  </Router>
		);
	}
}

export default RestaurantRoute;

