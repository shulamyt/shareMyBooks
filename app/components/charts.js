import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends React.Component {
	render() {
		return (
			<Sparklines data={[5, 10, 5, 20]}>
  <SparklinesLine color="blue" /> 
</Sparklines>
		);
	}
}
export default Chart;
