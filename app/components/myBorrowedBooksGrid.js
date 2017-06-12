import React from 'react';
import ReactDOM from 'react-dom';
import Griddle from 'griddle-react'; 

class MyBorrowedBooksGrid extends React.Component {
	getDateToReturn(loanDate,numDays){
		var dat = new Date(loanDate.valueOf());
	  	dat.setDate(dat.getDate() + numDays);
	  	return dat.toDateString();
	}
	getDateFormat(loanDate){
		var dat = new Date(loanDate.valueOf());
	  	return dat.toDateString();
	}
	constructor(props){
		super(props);
		var _this=this;
		this.state = {
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
	render() {
		var exampleMetadata = [
		{
		"columnName": "for_how_long",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "ימי השאלה",
	    "sortable": true
	  	},
	  	{"columnName": "loan_date",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "תאריך",
	    "sortable": true
	  	},
	  	{"columnName": "phone",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "טלפון",
	    "sortable": true
	  	},
	  	{"columnName": "email",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "דואל",
	    "sortable": true
	  	},
	  	{"columnName": "ownerName",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "בעלים",
	    "sortable": true
	  	},
		{
	    "columnName": "name",
	    "order":  4,
	    "locked": false,
	    "visible": true,
	    "displayName": "שם ספר",
	    "sortable": true
	  	}]
		if (this.props.data) {
			return (
				<div>
					<Griddle results={this.state.MyBooksData} tableClassName="table" showFilter={true}
		 			showSettings={true} columnMetadata={exampleMetadata} columns={["for_how_long","loan_date", "phone", "email", "ownerName","name"]}/>
		        </div>
		);
		}
		else{
			return <div/>
		}
		
	}
}
 export default MyBorrowedBooksGrid;