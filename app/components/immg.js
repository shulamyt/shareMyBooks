import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './../service/restService';


class Immg extends React.Component {
	handleClick(e){
		//e.preventDefault();
		//alert("id book"+this.props.rowData.name);
		console.log(book);
		var book={
			"name":this.props.rowData.name
		};
		var bookd={
			"name":this.props.rowData.name
		};
		restService.post('/books/Like',book,bookd);
	}
	render(){
		return <img src="./Like2.jpg" className="like-img" onClick={()=>this.handleClick()} mode='fit'  /> 
	}
}
export default Immg;