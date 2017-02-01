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
			'myBooks':[ ],
			'showLoging': true
		}
	}

	onUserChange(user){
		this.setState({
			'user': user,
			'showLoging': false
		});
	}
	getMyBooks(books){
		console.log(books);
		this.setState({
			'myBooks':books
		});
	}
	render(){
		let loginComponent = null;
		if(this.state.showLoging === true){
			loginComponent=<div> <Login onUserChange={this.onUserChange.bind(this) }/> <Example /></div>;
		}else{
			loginComponent=<div>
				<FixedArea /> 
				<Menu userId={this.state.user.id} getMyBooks={this.getMyBooks.bind(this)} />
				<BooksList data={this.state.myBooks} />
				<AlertsArea />
			</div>;
		}
		return(
			loginComponent
		);
	}
}
export default ShareMyBooks;
