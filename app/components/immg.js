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
		return <div><button style={{backgroundImage: './../static/Like2.jpg'}} onClick={()=>this.handleClick()}  width={100} height={100} mode='fit'  />
		</div>
	}
}
export default Immg;