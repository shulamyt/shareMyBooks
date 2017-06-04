import React from 'react';
import ReactDOM from 'react-dom';
//const image = require('./../static/Facebook_like_thumb.png')
const image = require('./../static/Like2.jpg')
var modalButton = {
    	backgroundImage:image
}

class Immg extends React.Component {
	handleClick(e){
		 e.preventDefault();
		 this.props.rowData.id
	}
	render(){
		return <button style={modalButton} onClick={()=>this.handleClick()}  width={100} height={100} mode='fit'  /> 
	}
}	
export default Immg;