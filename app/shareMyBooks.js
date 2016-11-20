import React from 'react';
import Login from './components/login.js';
import Grid from './components/grid.js';
import Example from './components/popup.js';
class ShareMyBooks extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			'user': {},
			'showLoging': true
		}
	}

	onUserChange(user){
		this.setState({
			'user': user,
			'showLoging': false
		});
	}

	render(){
		let loginComponent = null;
		if(this.state.showLoging === true){
			loginComponent= <Login onUserChange={this.onUserChange.bind(this)}/>;
		}
		return(
			<div>
				<Grid data={this.state.user} />
				{loginComponent}
				<Example />
			</div>
		);
	}
}
export default ShareMyBooks;
