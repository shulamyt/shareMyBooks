import React from 'react';
// var Enumerable = require("linqjs");

class SearchBooksResult extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'displayModeSubGrids': [],
			'data':[]
		}
	}
	setExpandClassTo(ind,evt) {
		const displayModeSubGrids=this.state.displayModeSubGrids;
		if (displayModeSubGrids[ind]) {
			evt.target.setAttribute('class','toggleSubGrid')
		}
		else{
			evt.target.setAttribute('class','expandSubGrid')
		}		
		displayModeSubGrids[ind]=!displayModeSubGrids[ind];
	    this.setState({
	      	displayModeSubGrids,
	    });
  	}
  	componentWillMount(){
  		var books=<div></div>;
		var data1 = [[{name:"dd",ownerName:"gg"},{name:"dd",ownerName:"gg2"},{name:"dd",ownerName:"gg3"}],[{name:"d2d",ownerName:"gg"},{name:"d2d",ownerName:"gg2"}],[{name:"d3d",ownerName:"gg3"},{name:"d3d",ownerName:"gg3"}]];
		for (var i = data1.length - 1; i >= 0; i--) {
			data1[i].ttl=data1[i][0].name;
		}
		for (var ii = 0 ; ii <data1.length; ii++) {
			var arr=[];
			for (var j = 0; j < data1[ii].length; j++){
				arr.push(<tr > 
		      		<td>{data1[ii][j].name}</td>
		      		<td>{data1[ii][j].ownerName}</td>
			  	</tr>)
			}
			let ind=ii;
			this.state.data.push(
		        <div>
		        	<div class="toggleSubGrid" onClick={this.setExpandClassTo.bind(this,ind)}>{data1[ii].ttl}</div>
		        	<tr>
					    <th>Book Name</th>
					    <th>Owner Name</th>
					  </tr> 
		        	{arr}
				</div> 
		  	);
		  	this.state.displayModeSubGrids.push(false);
		}
		
  	}
	render() {
		
		//  var data = [];
		// for(var book in data1) {
	 //      data.push(
	 //      // <div onClick={()=>this.setExpandClass('/books/getAll/'+this.props.userId,"MyBooks")}>{book.ttl}</div> 
	 //      <tr > 
	 //      	<td>{book}</td> 
	 //      	<td>{book}</td> 
		//   </tr>);
	 //    }
		// var data = [];
		// var f=this.props.data;
		// var ff=Enumerable.from(f).select('name');
	 //    for(var book in this.props.data) {
	 //      data.push(
	 //      <tr> 
	 //      	<td>{this.props.data[book].name}</td> 
	 //      	<td>{this.props.data[book].ownerName}</td> 
	 //      	<td>{this.props.data[book].author}</td> 
	 //      	<td>{this.props.data[book].isloan}</td> 
		//   </tr>);
	 //    }
	 var books=<div></div>
		if(this.state.data)
			if(this.state.data.length!=0)
				books=<div className="books-grid" >
					{this.state.data}
				</div>;
		console.log(books)
		return (
			books
		);
	}
}
 export default SearchBooksResult;