import React from 'react';
import BooksGrid from './booksGrid.js';

class BooksList extends React.Component {
	
	render() {
		return (
			<div className="books-list" >
				<BooksGrid />
			</div>
		);
	}
}
 export default BooksList;
