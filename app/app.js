import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService';

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

const render = function(projects){
	return ReactDOM.render(
		<Grid data={projects} />,
		document.getElementById('main')
	);
};
var projects = {};

restService.get('/users/1').then(function(fetchProjects){
	console.log("Im here")
	projects = fetchProjects
	console.log(fetchProjects);
	render(projects);
	console.log("firstRender");	
});

