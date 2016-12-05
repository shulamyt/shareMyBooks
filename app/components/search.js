import React from 'react';

class Search extends React.Component {
	
	render() {
		return (
			<div className="search" >
				<button>Search</button>
				<input type="text" />
				<input type="checkbox" name="search-filter" value="my"/> My library<br/>
  				<input type="checkbox" name="search-filter" value="shared" checked/> Shared library<br/>
			</div>
		);
	}
}
 export default Search;
