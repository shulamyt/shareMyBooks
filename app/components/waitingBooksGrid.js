
import React from 'react';

class WaitingBooksGrid extends React.Component {
	
	render() {
		return (
			<div className="waiting-books-grid" >
				<table >
				  	<tbody>
						  <tr>
						    <th>Name Asking</th>
						    <th>Email</th> 
						    <th>Book Name</th> 
						  </tr>
						  <tr>
						    <td>Name Asking</td>
						    <td>Email</td> 
						    <td>Book Name</td>
						  </tr>
				  	</tbody>
				</table>
			</div>
		);
	}
}
 export default WaitingBooksGrid;
