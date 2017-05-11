import React from 'react';

class MyBooks extends React.Component {
	
	render() {
		var books=<div></div>;
		var data = [];
	    for(var book in this.props.data) {
	      data.push(
	      <tr> 
	      	<td>{this.props.data[book].name}</td> 
	      	<td>{this.props.data[book].author}</td> 
	      	<td>{this.props.data[book].clmn}</td> 
	      	<td>{this.props.data[book].shelf}</td> 
	      	<td>{this.props.data[book].isloan}</td> 
		  </tr>);
	    }
		if(data){
			if(data.length!=0){
				books=<div className="my-books" >
					<table >
					  	<tbody>
							  <tr>
							    <th>Book Name</th>
							    <th>Author</th> 
							    <th>Column</th>
							    <th>Shelf</th>
							    <th>Is Loaned?</th> 
							  </tr>
							  {data}
					  	</tbody>
					</table>
				</div>;
			}
		}
		return (
			books
		);
	}
}
 export default MyBooks;