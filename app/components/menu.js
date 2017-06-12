import React from 'react';
import * as restService from './../service/restService';

class Menu extends React.Component {
	getBooks(path,which){
		var thisProps=this.props;
		restService.get(path).then(function(fetchBooks){
			console.log(fetchBooks);
				thisProps.getBooks(fetchBooks,which);
		});
	}
	render() {
		return (
			<div className="menu" >
				<button onClick={()=>this.getBooks('/books/getAll/'+this.props.userId,"MyBooks")}>My Books</button>
				<button onClick={()=>this.getBooks('/loans/borrowed/'+this.props.userId,"MyBorrowedBooksGrid")}>ספרים ששאלתי</button>
				<button onClick={()=>this.getBooks('/loans/lent/'+this.props.userId,"MyLentBooksGrid")}>ספרים שהשאלתי</button>
			</div>
		);
	}
}
 export default Menu;
