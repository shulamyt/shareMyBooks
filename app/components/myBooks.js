import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react'; 
import Immg from './immg.js';
class MyBooks extends React.Component {
	pop(row){
		alert(row.props.data);
	}
	render() {
		var exampleMetadata = [
		{
	    "columnName": "name",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "שם ספר",
	    "sortable": false
	  },{"columnName": "author",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "סופר",
	    "sortable": false
	  },{"columnName": "clmn",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "עמודה",
	    "sortable": false
	  },{"columnName": "shelf",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "מדף",
	    "sortable": false
	  },{"columnName": "isloan",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "האם מושאל",
	    "sortable": false
	  },{"columnName": "like",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "אהבתי",
	    "sortable": false,
	    "customComponent": Immg
	  }]
		if (this.props.data) {
			return (
			
			<Griddle results={this.props.data} tableClassName="table" showFilter={true}
 			showSettings={true} onRowClick={this.pop} columnMetadata={exampleMetadata}  columns={["name", "author", "clmn", "shelf","isloan","like"]}/>
		);
		}
		else{
			return <div/>
		}
		
	}
}
export default MyBooks;