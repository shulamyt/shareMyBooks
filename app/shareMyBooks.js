import React from 'react';
import Login from './components/login.js';
import Grid from './components/grid.js';
import NewUserPopup from './components/newUserPopup.js';
import FixedArea from './components/fixedArea.js';
import AlertsArea from './components/alertsArea.js';
import Menu from './components/menu.js';
import BooksList from './components/booksList.js';
import AlertWait from './components/alertWait.js';
import ChartistGraph from 'react-chartist';
//
import * as restService from './service/restService';
//import Ch2 from './components/ch2.js';
//import Chart from './components/charts.js';
import Pie from './components/pie.js';
// import Charts from './components/charts.js';
// import Pie from './components/pie.js';
import styles from './shareMyBook.css';
import CssModules from 'react-css-modules';

class ShareMyBooks extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'user': { },
			'books':[ ],
			'showLoging': true,
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
			loginComponent=<div className="wrapper-login"> <Login onUserChange={this.onUserChange.bind(this) }/> <NewUserPopup /></div>;
		}else{
			loginComponent=<div>
				<FixedArea getBooks={this.getBooks.bind(this)}/> 
				<Menu userId={this.state.user.id} getBooks={this.getBooks.bind(this)} />
				<BooksList data={this.state.Books} whichGrid={this.state.whichGrid}/>
				<AlertsArea userId={this.state.user.id}/>
				<div id="chart-container"></div>
				<b>{this.state.popularCurrentTitle}</b>
				<Pie/>
			</div>;
			loginComponent=<div className="wrapper">
					<FixedArea getBooks={this.getBooks.bind(this)}/> 
					<div className="page">
						<Menu userId={this.state.user.id} getBooks={this.getBooks.bind(this)} />
						<BooksList className="booklist" data={this.state.Books} whichGrid={this.state.whichGrid}/>
						<div className="alerts">
							<AlertsArea className="alert-area" userId={this.state.user.id}/>
							<AlertWait className="alert-wait" />
							<Pie/>
						</div>
					</div>
				</div>;
		}
		return(
			loginComponent

		);
	}
	
}
export default CssModules(ShareMyBooks, styles);