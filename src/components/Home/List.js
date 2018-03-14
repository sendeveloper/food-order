import React, { Component } from "react";
import PropTypes from "prop-types";

import './List.css'
// import Details from '../Details/Details';

class List extends React.Component{
	static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
     super(props, context);
  }
	render() {
		let data = this.props.data;
		return (
			<div className="each_rest" style={{backgroundImage: "url(" + data.backgroundImageURL + ")"}} onClick={this.gotoDetail.bind(this)}>
				<div className="rest_info">
					<h2 className="rest_name">{data.name}</h2>
					<h3 className="rest_category">{data.category}</h3>
				</div>
			</div>
		)
	}
	gotoDetail() {
		this.context.router.history.push("/detail/" + this.props.id);
	}
}

export default List;