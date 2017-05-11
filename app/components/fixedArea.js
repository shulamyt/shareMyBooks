import React from 'react';
import Search from './search.js';

class FixedArea extends React.Component {
	
	render() {
		return (
			<div className="fixed-area" >
				<Search getBooks={this.props.getBooks}/>
			</div>
		);
	}
}
 export default FixedArea;
