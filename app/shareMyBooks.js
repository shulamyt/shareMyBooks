import React from 'react';
import Login from './components/login.js';
import Grid from './components/grid.js';
import NewUserPopup from './components/newUserPopup.js';
import FixedArea from './components/fixedArea.js';
import AlertsArea from './components/alertsArea.js';
import Menu from './components/menu.js';
import BooksList from './components/booksList.js';
import AlertWait from './components/alertWait.js'
// import Charts from './components/charts.js';
// import Pie from './components/pie.js';

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
			'showLoging': false,
			'whichGrid':"MyBooks"
		});
	}
	getBooks(books,which){
		console.log(books);
		this.setState({
			'Books':books,
			'whichGrid':which
		});
	}
	render(){
		let loginComponent = null;
		if(this.state.showLoging === true){
			loginComponent=<div> <Login onUserChange={this.onUserChange.bind(this) }/> <NewUserPopup /></div>;
		}else{
			loginComponent=<div>
				<FixedArea getBooks={this.getBooks.bind(this)}/> 
				<Menu userId={this.state.user.id} getBooks={this.getBooks.bind(this)} />
				<BooksList data={this.state.Books} whichGrid={this.state.whichGrid}/>
				<AlertsArea userId={this.state.user.id}/>
				<AlertWait />
				</div>;
		}
		return(
			loginComponent
		);
	}
	
}
export default ShareMyBooks;
