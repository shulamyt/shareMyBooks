import React from 'react';
import BooksGrid from './booksGrid.js';
import NewBookPopup from './newBookPopup';
import MyBooks from './myBooks';
import MyBorrowedBooksGrid from './myBorrowedBooksGrid';
import MyLentBooksGrid from './myLentBooksGrid';


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
	render() {
		var popup;
		var grid;
		console.log(this.props.data);
		if (this.state.showPopup)
			popup=<NewBookPopup />;
		else
			popup=<div></div>;
		switch(this.props.whichGrid){
			case "MyBooks":grid=<MyBooks data={this.props.data}/>;break;
			case "MyBorrowedBooksGrid":grid=<MyBorrowedBooksGrid data={this.props.data}/>;break;
			case "MyLentBooksGrid":grid=<MyLentBooksGrid data={this.props.data}/>;break;
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
