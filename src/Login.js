import React, { Component } from 'react';

class Login extends Component{
	render(){
		return (
			<div>
				<input type="text" placeholder="Username"/> <br/>
				<input type="password" placeholder="Password"/>
			</div>
			)
	}
}

export default Login;