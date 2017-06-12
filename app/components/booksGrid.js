import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';

class BooksGrid extends React.Component {

	constructor(props){
		const rows = [
	  {gg:"ספר יפה",hh:"1966",nn:"יואל כהן",ss:"פלדהיים",dd:5},{gg:"רוח וסער",hh:"2012",nn:"גגג",ss:"יפה נוף",dd:44},{gg:"מלחמת עמלק",hh:"2016",nn:"גגג",ss:"פלדהיים",dd:61}
	];
		super(props);
		this.state = {
			'booksData': <Table
	    rowHeight={50}
	    rowsCount={3}
	    width={500}
	    height={200}
	    headerHeight={50}>
	    <Column
	      header={<Cell>לחץ כדי לאשר</Cell>}
	      cell={<Cell><button className="confirn-btn">משאיל</button></Cell>}
	      width={100}/>
	      <Column
	      header={<Cell>לחץ כדי לאשר</Cell>}
	      cell={<Cell><button className="confirn-btn">לא משאיל</button></Cell>}
	      width={100}/>
	    <Column
	      header={<Cell>שם ספר</Cell>}
	      cell={({rowIndex}) => (
	        <Cell >
	          {rows[rowIndex].gg}
	        </Cell>)}
	      width={100}/>
	    <Column
	      header={<Cell>שם הבעלים</Cell>}
	      cell={({rowIndex}) => (
	        <Cell >
	          {rows[rowIndex].nn}
	        </Cell>)}
	      width={100}/>
		  <Column
		  header={<Cell>הוצאה לאור</Cell>}
		  cell={({rowIndex}) => (
	        <Cell >
	          {rows[rowIndex].ss}
	        </Cell>)}
		  width={100}/>
      </Table>
		}
	}
	componentWillMount(){
  		var books=<div></div>;
	    for(var book in this.props.data) {
	      booksData.push(
			<tr> 
				<td>{this.props.data[book].name}</td>
			    <td>{this.props.data[book].author}</td>
			    <td>{this.props.data[book].isloan}</td> 
		    </tr>);
	    }
  	}
	render() {
		let data=this.state.booksData
		return (data);
		};
}
export default BooksGrid;

// const rows = [
//   ['a1', 'b1', 'c1'],
//   ['a2', 'b2', 'c2'],
//   ['a3', 'b3', 'c3'],
//   // .... and more 
// ];

// ReactDOM.render(
  
//   document.getElementById('example')
// );