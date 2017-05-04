import React from 'react';

class MyBorrowedBooksGrid extends React.Component {
	getDateToReturn(loanDate,numDays){
		var dat = new Date(loanDate.valueOf());
	  	dat.setDate(dat.getDate() + numDays);
	  	return dat.toDateString();
	}
	getDateFormat(d){
		var f=d;
		return d;
	}
	render() {
		var books=<div></div>;
		var data = [];
	    for(var book in this.props.data) {
	      data.push(
	      <tr> 
	      	<td>{this.props.data[book].name}</td> 
	      	<td>{this.props.data[book].ownerName}</td> 
	      	<td>{this.props.data[book].email}</td> 
	      	<td>{this.props.data[book].phone}</td> 
	      	<td>{this.getDateFormat(this.props.data[book].loan_date)}</td> 
	      	<td>{this.getDateToReturn(this.props.data[book].loan_date,this.props.data[book].for_how_long)}</td> 
		  </tr>);
	    }
		if(data)
			if(data.length!=0)
				books=<div className="books-grid" >
					<table >
					  	<tbody>
							  <tr>
							    <th>Book Name</th>
							    <th>Owner Name</th>
							    <th>Email</th>
							    <th>Phone</th>
							    <th>Loan Date</th>
							    <th>Date To Return</th>
							  </tr>
							  {data}
					  	</tbody>
					</table>
				</div>;
		console.log(books)
		return (
			books
		);
	}
}
 export default MyBorrowedBooksGrid;