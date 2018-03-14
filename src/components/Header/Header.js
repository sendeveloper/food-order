import React, { Component } from 'react';

import './Header.css';
import header_img from '../../assets/imgs/header_img.png'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>
					Lunch Tyme
					<img src={header_img} alt="header logo" className="logo"/>
				</h1>
			</div>
		)
	}
}
export default Header