import React from 'react';
import LateBooks from './lateBooks.js';
import WaitingForApproval from './waitingForApproval.js';
import * as restService from './../service/restService';

class AlertsArea extends React.Component {
	constructor(props){
		super(props);
		var _this=this;
		this.state = {
			'LateBooksData': _this.getAlertedBooks("/loans/late/"+_this.props.userId),
			'WaitingBooksData':_this.getAlertedBooks("/loans/waiting/"+_this.props.userId)
		}
	}

	getAlertedBooks(path){
		let thisVal=this;
		var thisProps=this.props;
		restService.get(path).then(function(fetchBooks){
			console.log(fetchBooks);
			if(fetchBooks){
				return fetchBooks;
			}
			else
				return [];
		});
	}
	render() {
		return (
			<div className="alerts-area" >
				<LateBooks WaitingBooksData={this.state.LateBooksData}/>
				<WaitingForApproval WaitingBooksData={this.state.WaitingBooksData} />
			</div>
		);
	}
}
export default AlertsArea;
