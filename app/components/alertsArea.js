import React from 'react';
import LateBooks from './lateBooks.js';
import WaitingForApproval from './waitingForApproval.js';

class AlertsArea extends React.Component {
	
	render() {
		return (
			<div className="alerts-area" >
				<LateBooks/>
				<WaitingForApproval/>
			</div>
		);
	}
}
 export default AlertsArea;
