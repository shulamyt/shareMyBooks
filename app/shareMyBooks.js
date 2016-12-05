import React from 'react';
import Login from './components/login.js';
import Grid from './components/grid.js';
import Example from './components/popup.js';
import FixedArea from './components/fixedArea.js';
import AlertsArea from './components/alertsArea.js';
import Menu from './components/menu.js';
import BooksList from './components/booksList.js';

class ShareMyBooks extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			'user': { },
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
			loginComponent=<div> <Login onUserChange={this.onUserChange.bind(this)}/> <Example /></div>;
		}
		return(
			<div>
				<FixedArea /> 
				<Menu />
				<BooksList />
				<AlertsArea />
			</div>
		);
	}
}
export default ShareMyBooks;
