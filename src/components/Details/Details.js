import React, { Component } from 'react';

class Details extends Component{
	
	render() {
		let id = this.props.match.params.id;
		return (
			<div>
		    <h2>Topics</h2>
		    <h3>ID: {id}</h3>
		  </div>
		)
	}
}

export default Details