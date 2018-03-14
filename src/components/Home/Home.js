import React, { Component } from 'react';
import axios from 'axios';

import List from './List';

class Home extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			data: []
    }
		this.getRestaurantList();
	}
	getRestaurantList() {
		let api_url = "https://s3.amazonaws.com/br-codingexams/restaurants.json";
		axios.get(`https://cors-anywhere.herokuapp.com/` + api_url,{headers: {'Access-Control-Allow-Origin': '*'}})
			.then((response) => {
				this.setState({data: response.data.restaurants});
			})  
	}
	render() {
		let lists = this.state.data;
		if (lists.length !== 0)
			return (
				<div className="transition-item list-page">
			    {
			    	lists.map((list, i) => {
			    		return (<List data={list} id={i} key={i} />)
			    	})
			    }
			  </div>
		  )
		else
			return (<div className="loading transition-item list-page">Loading...</div>)
	}
}

export default Home