import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
class AlertWait extends React.Component {
render(){
	var data = [];
	    for(var book in this.props.data) {
	    	var str= this.props.data[book].name
	      data.push(
	      		<li className="list-group-item">{this.props.data[book].name}{this.props.data[book].borrowerName}
					<button className="btn btn-default">Confirm</button>
				</li>);
	    }
		var f= <div class="alerts">
			<ul className="list-group">
				<li className="list-group-item active">Books to confirm loan<i class="fa fa-bell"></i></li>
				{data}
			</ul>
		</div>
		return (f);
		}
}
export default AlertWait;
