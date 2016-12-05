import React from 'react';
import BooksGrid from './booksGrid.js';

class WaitingForApproval extends React.Component {
	
	render() {
		return (
			<div className="waiting-for-approval" >
				<BooksGrid />
			</div>
		);
	}
}
 export default WaitingForApproval;
