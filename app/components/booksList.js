import React from 'react';
import BooksGrid from './booksGrid.js';

class BooksList extends React.Component {
	
	render() {
		console.log(this.props.data);
		return (
			<div className="books-list" >
				<BooksGrid data={this.props.data}/>
			</div>
		);
	}
}
 export default BooksList;
