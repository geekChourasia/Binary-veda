import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link
//     } from "react-router-dom";

function Header() {
	return (

		<div className="header">

			<div className="left_header">
				<img className="header_image" src="/images/logo-white.svg" ></img>
				<p>|Developer</p>
			</div>

			<div className="right_header">
				<div className="menu_bar">
					<MenuIcon />

				</div>

				<ul className="right_ul">
					<li>Why Marvel</li>
					<li>Enterprise</li>
					<li>Pricing</li>
					<li>Sign in</li>
					<button className="sign_up_free">Sign up free</button>

				</ul>

			</div>

		</div>

	)
}

export default Header

