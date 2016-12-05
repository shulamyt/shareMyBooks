import React from 'react';

class Menu extends React.Component {
	
	render() {
		return (
			<div className="menu" >
				<button>My Books</button>
				<button>Books I Loaned</button>
				<button>My Loaned Books</button>
			</div>
		);
	}
}
 export default Menu;
