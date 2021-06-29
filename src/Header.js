import React from 'react'
import './Header.css'

function Header() {
	return (

		<div className="Container_header">
			<a>
				<img src="/images/logo-blue.svg" ></img>

			</a>

			<span className="header_items">
				
				<a href="#"> Why Marvel</a>
				<a href="#"> Enterprise</a>
				<a href="#"> Pricing</a>
				<a href="#"> Sign in</a>
				<a href="#"> Sign up free</a>
			</span>


		</div>

	)
}

export default Header

