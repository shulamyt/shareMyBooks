import React from 'react';
import ReactDOM from 'react-dom';

class Immg extends React.Component {
	handleClick(e){
		 e.preventDefault();
		 this.props.rowData.id
	}
	render(){
		return <img src="./Like2.jpg" className="like-img" onClick={()=>this.handleClick()} mode='fit'  /> 
	}
}	
export default Immg;