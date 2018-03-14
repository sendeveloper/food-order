import React, { Component } from 'react';

import './Header.css';
import back_img from '../../assets/imgs/back.png'
import header_img from '../../assets/imgs/header_img.png'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>
					<img src={back_img} alt="back logo" className="back" onClick={() => this.gotoHome()}/>
					Lunch Tyme
					<img src={header_img} alt="header logo" className="logo"/>
				</h1>
			</div>
		)
	}
	gotoHome() {
		document.location.href = "/";
	}
}
export default Header