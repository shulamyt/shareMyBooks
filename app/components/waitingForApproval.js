import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';
import BooksGrid from './booksGrid.js';

class WaitingForApproval extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'booksData': []
		}
		this.setTable();
	}
	setTable(){
		if (this.props.WaitingBooksData) {
		var f=<Table
			    rowHeight={50}
			    rowsCount={this.props.WaitingBooksData.getSize()}
			    width={400}
			    height={300}
			    headerHeight={50}>
			    <Column
			      header={<Cell>שם ספר</Cell>}
			      cell={({rowIndex}) => (
		        		<Cell >
		          				{this.props.WaitingBooksData[rowIndex].name}
		        		</Cell>)}
			      width={150}/>
			    <Column
			      header={<Cell>הוצאה</Cell>}
			      cell={({rowIndex}) => (
		        		<Cell >
		          				{this.props.WaitingBooksData[rowIndex].publishingHouse}
		        		</Cell>)}
			      width={100}/>
			    <Column
			      header={<Cell>שנת הוצאה</Cell>}
			      cell={({rowIndex}) => (
		        		<Cell >
		          				{this.props.WaitingBooksData[rowIndex].publishingYear}
		        		</Cell>)}
			      width={100}/>
			    <Column
			      header={<Cell>שם המבקש</Cell>}
			      cell={({rowIndex}) => (
		        		<Cell >
		          				{this.props.WaitingBooksData[rowIndex].borrowerName}
		        		</Cell>)}
			      width={150}/>
		     </Table>
		this.setState({
			'booksData':f
		});
	}
	}
	// componentWillReceiveProps(nextProps) {
	componentWillMount(nextProps) {
	  // You don't have to do this check first, but it can help prevent an unneeded render
	    this.setTable();
	}
	render() {
		let data=<div></div>
		if (this.state.booksData.length!=0) {
			data=this.state.booksData
		}
		return (data);
		};
	// render(){
	// 	return (
	// 		<div className="waiting-for-approval" >
	// 			<BooksGrid />
	// 		</div>)
	// };
}
export default WaitingForApproval;
