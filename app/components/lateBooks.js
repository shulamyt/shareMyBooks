import React from 'react';
import BooksGrid from './booksGrid.js';

class LateBooks extends React.Component {
	
	render() {
		return (
			<div className="late-books" >
				<BooksGrid />
			</div>
		);
	}
}
 export default LateBooks;
