import React from 'react';
import LateBooks from './lateBooks.js';
import WaitingForApproval from './waitingForApproval.js';
import * as restService from './../service/restService';

class AlertsArea extends React.Component {
	constructor(props){
		super(props);
//  		var _this=this;
		this.getAlertedBooks("/loans/late/"+this.props.userId, 'late')
		this.getAlertedBooks("/loans/waiting/"+this.props.userId, 'wait')
	}
	
// 	this.state = {
// 			'LateBooksData': _this.getAlertedBooks("/loans/late/"+_this.props.userId),
// 			'WaitingBooksData':_this.getAlertedBooks("/loans/waiting/"+_this.props.userId)
// 		}
	
	this.state = {
			LateBooksData:[] ,
			WaitingBooksData:[]
		}

	getAlertedBooks(path, state){
		let thisVal=this;
		var thisProps=this.props;
		restService.get(path).then(function(fetchBooks){
			console.log(fetchBooks);
			if(fetchBooks){
				if(state==='wait'){
					this.setState({WaitingBooksData:fetchBooks})
				}
				else{
					this.setState({LateBooksData:fetchBooks})
				}
			}
			else
				if(state==='wait'){
					this.setState({WaitingBooksData:[]})
				}
				else{
					this.setState({LateBooksData:[]})
				}
		});
	}
	render() {
		return (
			<div className="alerts-area" >
			<img className='img-warning' src="./WArnings.png" />
				<LateBooks WaitingBooksData={this.state.LateBooksData}/>
				<WaitingForApproval WaitingBooksData={this.state.WaitingBooksData} />
			</div>
		);
	}
}
export default AlertsArea;
