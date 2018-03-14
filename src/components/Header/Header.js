import React, { Component } from 'react';

import './Header.css';
import back_img from '../../assets/imgs/back.png'
import header_img from '../../assets/imgs/header_img.png'

class Header extends Component {
	render() {
		let url = window.location.href;
		let back_visible = (url.indexOf('detail') !== -1);
		return (
			<div className="header">
				<h1>
					<img src={back_img} alt="back logo" className="back" onClick={() => this.gotoHome()} style={back_visible ? {} : { display: 'none' }}/>
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