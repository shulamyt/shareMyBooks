// import React, {Component} from 'react';
// import ReactDom from 'react-dom';
// import {Chart, DataSeries, Pie} from 'diffract';

// const DonutDemo = () => (
//   <Chart width={width} height={height}>
//       <DataSeries data={this.state.values}>
//           <Pie innerRadius={75} outerRadius={110}
//               onClick={(e, v, i) => console.log(this.state.labels[i] + ' clicked')}
//               style={(d, i) => ({fill: this.getColors(i)})}>
//               <text className="donut-title" textAnchor="middle"
//                   x={0} y={0} fontSize={18}>
//                   {'Hello'}
//               </text>
//               <text className="donut-subtitle" textAnchor="middle"
//                   x={0} y={18} fontSize={10}>
//                   {'diffract'}
//               </text>
//           </Pie>
//       </DataSeries>
//   </Chart>
// );
// class AlertWait extends React.Component {
//   render(){
//     <DonutDemo/>;,
//     document.getElementById( 'donutDemo' )
//   }
//   }
// }
var React = require('react')
var ChartistGraph = require('react-chartist')

var simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}
<ChartistGraph data={simpleLineChartData} type={'Line'} />