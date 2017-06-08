import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './../service/restService';
//const image = require('./../static/Facebook_like_thumb.png')
const image = require('./../static/Like2.jpg')
var modalButton = {
    backgroundImage:image
}

class Immg extends React.Component {
	handleClick(e){
		//e.preventDefault();
		alert("id book"+this.props.rowData.name);
		alert("id book"+this.props.rowData.id);
		var book=this.props.rowData;
		restService.post('/books/Like',book);
	}
	render(){
		return <button style={modalButton} onClick={()=>this.handleClick()}  width={100} height={100} mode='fit'  />
	}
}
export default Immg;