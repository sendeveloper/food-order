import React, {Component} from 'react';

import './List.css'
// import Details from '../Details/Details';

class List extends Component{
	render() {
		let data = this.props.data;
		return (
			<div className="each_rest" style={{backgroundImage: "url(" + data.backgroundImageURL + ")"}} onClick={() => this.gotoDetail(this.props.id)}>
				<div className="rest_info">
					<h2 className="rest_name">{data.name}</h2>
					<h3 className="rest_category">{data.category}</h3>
				</div>
			</div>
		)
	}
	gotoDetail(id) {
		let pageURL = '/detail/' + id;
		document.location.href = pageURL;
	}
}

export default List