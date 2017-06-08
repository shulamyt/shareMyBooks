import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class Chart extends React.Component {
	render() {
		return (
			<Sparklines data={[{
    date: "2014-06-23T00:21:59.271Z",
    value: 2
  },
  {
    date: "2014-06-24T00:21:59.271Z",
    value: 4
  }
]}>
  <SparklinesLine color="blue" /> 
</Sparklines>
		);
	}
}
export default Chart;
