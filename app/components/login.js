import React from 'react';
import * as restService from './../service/restService';
import { Button } from 'react-bootstrap'
var $ = require("jquery");
import styles from './login.css';
import CssModules from 'react-css-modules';
 
class Login extends React.Component{
	login(){
		var thisProps=this.props;
		$("#noUser").text("");
		var err=false; 
		var email=$("#email").val();
		var password=$("#password").val();
		//if(password.trim()=="" || email.trim()==""){
	      //  $("#spnErr").text("You must fill in required fields!!! :(");
	       // err=true;
	    //}else{
	    //	 $("#spnErr").text("");
	    //}
	    if(!err){
	    	var user={
	    		"email":email,
	    		"password":password
	    	};
	    	//for Rachelli
	    	var u= { password: '5',
  					f_name: 'tt',
  					l_name: 'yy',
  					email: 'y@y.y',
					phone: null,
  					address: null,
  					id: 13 }
			thisProps.onUserChange(u);
			//TODO:
			/*restService.post('/users/login',user).then(function(fetchUser){
				console.log("Im here");
				//result = fetchUser;
				console.log(fetchUser);
				if(!fetchUser){
					$("#noUser").text("one detail or more is incorrect");
				}else{
					thisProps.onUserChange(fetchUser);
				}
				console.log("firstRender");	
				
			});*/
		}
	}
	render(){
		return(
			<div className="wrapper">
			<img className="img-logo" src="./Logo.png" />
			<div className="welcome">Share My Books- ברוכים הבאים ל </div>
			<div className="enter">הכנס פרטים</div><br/>
			<input className="input" placeholder="מייל" type="text" id="email"/><br/><br/>
			<input className="input" placeholder="סיסמה" type="password" id="password"/><br/><br/>
		 	<Button bsStyle="primary" onClick={()=>this.login() } >כניסה</Button>
		 	<span id="spnErr"></span><br/><br/>
		 	<span id="noUser"></span><br/><br/>

		 	</div>
		);
	}
}
export default CssModules(Login, styles);

