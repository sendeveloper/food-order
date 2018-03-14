import React, { Component } from 'react';
import axios from 'axios';

import HomeHeader from './HomeHeader';
import List from './List';

class Home extends Component
{
	constructor(props) {
		super(props);
		this.state = {
        data: []
    }
		this.getRestaurantFromApiAsync();
	}
	getRestaurantFromApiAsync() {
		let api_url = "https://s3.amazonaws.com/br-codingexams/restaurants.json";
		axios.get(`https://cors-anywhere.herokuapp.com/` + api_url,{headers: {'Access-Control-Allow-Origin': '*'}})
			.then((response) => {
				this.setState({data: response.data.restaurants});
			})  
	}
	render() {
		let lists = this.state.data;
		return (
			<div>
		    <HomeHeader />
		    {
		    	lists.map((list, i) => {
		    		return (<List data={list} id={i} key={i} />)
		    	})
		    }
		  </div>
	  )
	}
}

export default Home