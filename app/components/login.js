import React from 'react';
import * as restService from './../service/restService';
import * as app from './../app';
var user={};

class Login extends React.Component{
	login(){
			restService.get('/users/1').then(function(fetchUser){
			console.log("Im here");
			user = fetchUser;
			console.log(fetchUser);
			app.render(user);
			console.log("firstRender");	
			
			});
	}
	render(){
		return(
		 <button className="login"  onClick={()=>this.login() } >login</button>
		);
	}
}
 export default Login;
