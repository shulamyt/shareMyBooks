import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react'; 
import Immg from './immg.js';
import SkyLight from 'react-skylight';
import * as restService from './../service/restService';	
class MyBooks extends React.Component {
	constructor(props){
		super(props);
		var _this=this;
		this.state = {
			'CurMyBook': { } ,
			'curBookId':{},
			'MyBooksData':_this.props.data
		}
	}
	componentWillMount(){
		var _this=this;
		this.setState({
			'MyBooksData':_this.props.data
		});
	}
	componentWillReceiveProps(nextProps) {
  	  		this.setState({ MyBooksData: nextProps.data });
	}
	updateBook(){
		var book={
			"name":this.refs.Pname.value,
			"author":this.refs.Pauther.value,
			"isloan":this.refs.Pisloan.checked,
			"shelf":this.refs.Pshelf.value,
			"clmn":this.refs.Pcolmn.value,
			"id":parseInt(this.refs.Pid.value)
		}
		this.setState({
			'CurMyBook': book
		});
		var thisProps=this.props;
		restService.post('/books/update',book).then(function(fetchBooks){
			console.log(fetchBooks);
		});
		var tmp=this.state.MyBooksData;
		for (var i = 0;i<tmp.length ; i++) {
			if (tmp[i].id===book.id) {
				tmp[i]=book;
				this.setState({ MyBooksData: tmp });
				break;
			}
		}
		this.refs.simpleDialog.hide();
	}
	pop(row,evt){
		this.setState({
			'CurMyBook': row.props.data,
		});
		this.refs.simpleDialog.show();
	}
	render() {
		var exampleMetadata = [
		{
		"columnName": "like",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "אהבתי",
	    "sortable": false,
	    "customComponent": Immg
	  	},
	  	{"columnName": "isloan",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "האם מושאל",
	    "sortable": false
	  	},
	  	{"columnName": "shelf",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "מדף",
	    "sortable": false
	  	},
	  	{"columnName": "clmn",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "עמודה",
	    "sortable": false
	  	},
	  	{"columnName": "author",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "סופר",
	    "sortable": false
	  	},
		{
	    "columnName": "name",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "שם ספר",
	    "sortable": false
	  	}]
		if (this.props.data) {
			return (
				<div>
			<Griddle results={this.state.MyBooksData} tableClassName="table" showFilter={true}
 			showSettings={true} onRowClick={this.pop.bind(this)} columnMetadata={exampleMetadata}  columns={["like","isloan", "shelf", "clmn", "author","name"]}/>
 			<SkyLight hideOnOverlayClicked ref="simpleDialog" title="ערוך מאפייני ספר">
	          <h4>please enter details:</h4>
	          שם ספר: <input type="text" ref="Pname" defaultValue={this.state.CurMyBook.name}/><br/><br/>
	          סופר: <input type="text" ref="Pauther" defaultValue={this.state.CurMyBook.author}/><br/><br/> 
	          עמודה:  <input type="text" ref="Pcolmn" defaultValue={this.state.CurMyBook.clmn}/><br/><br/>
	          מדף: <input type="text" ref="Pshelf" defaultValue={this.state.CurMyBook.shelf}/><br/><br/>
	          האם מושאל: <input type="checkbox" ref="Pisloan" defaultChecked={this.state.CurMyBook.isloan}/><br/><br/>
	          <input type="hidden" ref="Pid" defaultValue={this.state.CurMyBook.id}/>
	          <input type="hidden" ref="PuserId" defaultValue={this.state.CurMyBook.user_id}/>
	          <button onClick={()=>this.updateBook()}>עדכן</button>
	        </SkyLight>
	        </div>
		);
		}
		else{
			return <div/>
		}
		
	}
}
export default MyBooks;