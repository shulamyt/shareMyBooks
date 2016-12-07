
import React from 'react';

class BooksGrid extends React.Component {
	
	render() {
		return (
			<div className="books-grid" >
				<table >
				  	<tbody>
						  <tr>
						    <th>Book Name</th>
						    <th>Author</th> 
						    <th>Is Loaned?</th> 
						  </tr>
						  <tr>
						    <td>book name</td>
						    <td>book author</td> 
						    <td>is loaned</td>
						  </tr>
				  	</tbody>
				</table>
			</div>
		);
	}
}
 export default BooksGrid;
