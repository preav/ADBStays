import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
	render(){
		return (
			<div className="loginMain">
				<h3> Login to Continue </h3>
				<input type="text" placeholder="Username or email" className="inputButton"/><br/>
				<input type="password" placeholder="Password" className="inputButton"/><br/>
				<input type="submit" className="inputButton submitButton"/>
				<p> New user? <a href="#">Sign Up</a> here </p>
			</div>
			)
	}
}

export default Login;