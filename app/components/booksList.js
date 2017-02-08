import React from 'react';
import BooksGrid from './booksGrid.js';
import NewBookPopup from './newBookPopup';


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
		console.log(this.props.data);
		if (this.state.showPopup)
			popup=<NewBookPopup />;
		else
			popup=<div></div>;
		return (
			<div className="books-list" >
				<button name="addBook" onClick={()=>this.showPopupf()}>add book</button>
				{popup}
				<BooksGrid data={this.props.data}/>
			</div>
		);
	}
}
 export default BooksList;
