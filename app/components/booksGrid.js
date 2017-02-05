
import React from 'react';

class BooksGrid extends React.Component {
	
	render() {
		var books=<div></div>;
		var data = [];
	    for(var book in this.props.data) {
	      data.push(<tr> <td>{this.props.data[book].name}</td> <td>{this.props.data[book].author}</td> <td>{this.props.data[book].isloan}</td> </tr>);
	    }
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
 export default BooksGrid;


  //   // append each one of them to the row in question, in order
   

  //   function tableCreate() {
  //       //body reference 
  //       var book = <div></div>
  //       var tbl     = document.createElement("table");
  //       var tblBody = document.createElement("tbody");
  //       var row = document.createElement("tr");
	 //    var title = document.createElement("th");    
	 //    var titleText = document.createTextNode("Book Name"); 
	 //    title.appendChild(titleText);
	 //    row.appendChild(title);
	 //    title = document.createElement("th");    
	 //    titleText = document.createTextNode("Auther"); 
	 //    title.appendChild(titleText);
	 //    row.appendChild(title);   
	 //    title = document.createElement("th");    
	 //    titleText = document.createTextNode("Is Loan?"); 
	 //    title.appendChild(titleText);
	 //    row.appendChild(title);
	 //    tblBody.appendChild(row);
	 //    var row=var row = document.createElement("tr");
	 //    for (var i =0; i <data.length; i++) {
	 //    	cell = document.createElement("td");    
	 //    	cellText = document.createTextNode(data[i].name);
	 //    	cell.appendChild(cellText);
	 //    	row.appendChild(cell); 
	 //    	cell = document.createElement("td");    
	 //    	cellText = document.createTextNode(data[i].auther);
	 //    	cell.appendChild(cellText);
	 //    	row.appendChild(cell);
	 //    	cell = document.createElement("td");    
	 //    	cellText = document.createTextNode(data[i].isloan);
	 //    	cell.appendChild(cellText);
	 //    	row.appendChild(cell);
	 //    }
  //       tblBody.appendChild(row);
  //       tbl.appendChild(tblBody);
  //       book.appendChild(tbl);
  //   }

		// if(data)
		// 	if(data.length!=0){
		// 		var tbl     = document.createElement("table");
		//         var tblBody = document.createElement("tbody");
		//         var row = document.createElement("tr");
		// 	    var title = document.createElement("th");    
		// 	    var titleText = document.createTextNode("Book Name"); 
		// 	    title.appendChild(titleText);
		// 	    row.appendChild(title);
		// 	    title = document.createElement("th");    
		// 	    titleText = document.createTextNode("Auther"); 
		// 	    title.appendChild(titleText);
		// 	    row.appendChild(title);   
		// 	    title = document.createElement("th");    
		// 	    titleText = document.createTextNode("Is Loan?"); 
		// 	    title.appendChild(titleText);
		// 	    row.appendChild(title);
		// 	    tblBody.appendChild(row);
		// 	    var row = document.createElement("tr");
		// 	    for (var book in data) {
		// 	    	var cell = document.createElement("td");    
		// 	    	var cellText = document.createTextNode(book.name);
		// 	    	cell.appendChild(cellText);
		// 	    	row.appendChild(cell); 
		// 	    	cell = document.createElement("td");    
		// 	    	cellText = document.createTextNode(book.auther);
		// 	    	cell.appendChild(cellText);
		// 	    	row.appendChild(cell);
		// 	    	cell = document.createElement("td");    
		// 	    	cellText = document.createTextNode(book.isloan);
		// 	    	cell.appendChild(cellText);
		// 	    	row.appendChild(cell);
		// 	    }
		//         tblBody.appendChild(row);
		//         tbl.appendChild(tblBody);
		//         books=<div> {tbl} </div>;
		// 	}