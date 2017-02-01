
import React from 'react';

class BooksGrid extends React.Component {
	
	render() {
		var books;
		var data=this.props.data;
		console.log(data);
		if(data)
			if(data.length!=0)
				books=<div className="books-grid" >
					<table >
					  	<tbody>
							  <tr>
							    <th>Book Name</th>
							    <th>Author</th> 
							    <th>Is Loaned?</th> 
							  </tr>
							  for(var i=0;i<data.length;i++) {
								<tr>
									<td>{data[i].name}</td>
									<td>{data[i].author}</td> 
									<td>{data[i].isloan}</td>
								</tr>
							}
					  	</tbody>
					</table>
				</div>;
			else
				books=<div></div>;
		else
			books=<div></div>;
		console.log(books)
		return (
			books
		);
	}
}
 export default BooksGrid;


    // append each one of them to the row in question, in order
   