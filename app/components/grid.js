import React from 'react';

class Grid extends React.Component {
	render() {
		return (
			<div className="grid" >
				<table >
				  	<tbody>
						<tr>
						  <th>First name</th>
						  <th>Last name</th> 
						  <th>id</th>
						</tr>
						<tr>
						  <td>{this.props.data.f_name}</td>
						  <td>{this.props.data.l_name}</td> 
						  <td>{this.props.data.id}</td>
						</tr>
				  	</tbody>
				</table>
			</div>
		);
	}
}
export default Grid;
