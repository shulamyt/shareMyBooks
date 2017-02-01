import React from 'react';
import * as restService from './../service/restService';

class Menu extends React.Component {
	getBooks(path){
		var thisProps=this.props;
		restService.get(path).then(function(fetchBooks){
			console.log("Im here");
			console.log(fetchBooks);
			if(!fetchBooks){
				$("#noUser").text("one detail or more is incorrect");
			}else{
				thisProps.getMyBooks(fetchBooks);
			}
			console.log("firstRender");	
		});
	}
	render() {
		return (
			<div className="menu" >
				<button onClick={()=>this.getBooks('/books/getAll/'+this.props.userId)}>My Books</button>
				<button>Books I Loaned</button>
				<button>My Loaned Books</button>
			</div>
		);
	}
}
 export default Menu;
