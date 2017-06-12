import React from 'react';
import BooksGrid from './booksGrid.js';
import NewBookPopup from './newBookPopup';
import MyBooks from './myBooks';
import MyBorrowedBooksGrid from './myBorrowedBooksGrid';
import MyLentBooksGrid from './myLentBooksGrid';
import SearchBooksResult from './searchBooksResult';



class BooksList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'showPopup': false
		}
	}
	showPopupf(){
		this.setState({
			'showPopup':true
		});

	}
	//for Rachelli
	render() {
		// var dd=[ { id: 24,
  //   name: 'g',
  //   author: 'g',
  //   shelf: '8',
  //   clmn: '6',
  //   isloan: true },
  // { id: 12343,
  //   name: 'dthd',
  //   author: 'et',
  //   shelf: null,
  //   clmn: null,
  //   isloan: null },
  // { id: 12344,
  //   name: 'k',
  //   author: 'k',
  //   shelf: '2',
  //   clmn: '6',
  //   isloan: false } ]
		var popup=-1;
		var grid;
		console.log(this.props.data);
		if (this.state.showPopup)
			popup=<NewBookPopup />;
		else
			popup=<div></div>;
		switch(this.props.whichGrid){
			//for Rachelli:
			//case "MyBooks":grid=<MyBooks data={dd}/>;break;
			case "MyBooks":grid=<MyBooks data={this.props.data}/>;break;
			case "MyBorrowedBooksGrid":grid=<MyBorrowedBooksGrid data={this.props.data}/>;break;
			case "MyLentBooksGrid":grid=<MyLentBooksGrid data={this.props.data}/>;break;
			case "SearchResults":grid=<SearchBooksResult data={this.props.data}/>;break;
		}
		return (
			<div className="books-list" >
				<button name="addBook" onClick={()=>this.showPopupf()}>add book</button>
				{popup}
				{grid}
			</div>
		);
	}
}
 export default BooksList;
