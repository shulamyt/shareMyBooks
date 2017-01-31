
import React from 'react';

class BooksGrid extends React.Component {
	
	render() {
		var books;
		if(this.props.data){
			books=<div className="books-grid" >
				<table >
				  	<tbody>
						  <tr>
						    <th>Book Name</th>
						    <th>Author</th> 
						    <th>Is Loaned?</th> 
						  </tr>
						  <tr>
						    <td>{this.props.data.name}</td>
						    <td>{this.props.data.author}</td> 
						    <td>{this.props.data.isloan}</td>
						  </tr>
				  	</tbody>
				</table>
			</div>;
		}else{
			books=<div></div>;
		}
		return (
			books
		);
	}
}
 export default BooksGrid;
