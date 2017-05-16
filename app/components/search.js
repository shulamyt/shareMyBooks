import React from 'react';
import * as restService from './../service/restService';

class Search extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = { 
	    	BookNameValue:"",
	    	AuthorValue:"",
	    	OwnerValue:"",
	    	PublishValue:"",
	    	PublishYearValue:""
    	};
  	}
  	updateInputBookNameValue(evt) {
	    this.setState({
	      	BookNameValue: evt.target.value
	    });
  	}
  	updateInputAuthorValue(evt) {
	    this.setState({
	      	AuthorValue: evt.target.value
	    });
  	}
	updateInputOwnerValue(evt) {
	    this.setState({
	      	OwnerValue: evt.target.value
	    });
  	}	
	updateInputPublishValue(evt){
		this.setState({
			PublishValue:evt.target.value
		});
	}
	updateInputPublishYearValue(evt){
		this.setState({
			PublishYearValue:evt.target.value
		});
	}
	getSearchedBooksResult(){
		let thisProps=this.props;
		let findMy =this.refs.shared.checked;
		let findPub=this.refs.my.checked;
		let path="";
		if (findMy) {
			if (findPub) {
				path="/books/search/?term="
			}
			else{
				path="/books/searchInMyLibrary/?term="
			}
		}
		else{
			if (findPub) {
				path="/books/searchInPublicLibrary/?term="
			}
			else{
				path="/books/search/?term="
			}
		}
		path = path+this.state.BookNameValue+"~"+this.state.AuthorValue+"~"+this.state.OwnerValue+"~"+this.state.PublishValue+"~"+this.state.PublishYearValue;
		restService.get(path).then(function(fetchBooks){
			thisProps.getBooks(fetchBooks,"SearchResults");
		});
	}
  	render() {
		return (
			<div className="search" >
				<button onClick={()=>this.getSearchedBooksResult() }>Search</button>
				<input placeholder="שם ספר" id="searchBookName" type="text" onChange={this.updateInputBookNameValue.bind(this)}/>
				<input placeholder="שם סופר" id="searchAutherName" type="text" onChange={this.updateInputAuthorValue.bind(this)}/>
				<input placeholder="בעלים" id="searchOwnerName" type="text" onChange={this.updateInputOwnerValue.bind(this)}/>
				<input placeholder="שם הוצאה" id="searchPublishValue" type="text" onChange={this.updateInputPublishValue.bind(this)}/>
				<input placeholder="שנת הוצאה" id="searchPublishYear" type="number" min="1800" max="2017" onChange={this.updateInputPublishYearValue.bind(this)}/>
				<input ref="my" type="checkbox" name="search-filter" value="my"/> My library<br/>
  				<input ref="shared" type="checkbox" name="search-filter" value="shared" /> Shared library<br/>
			</div>
		);
	}
}
 export default Search;
