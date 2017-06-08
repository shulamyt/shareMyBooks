import React from 'react';
import ReactDOM from 'react-dom';
import 'fusioncharts/fusioncharts.charts.js';
import FusionCharts from 'fusioncharts';

// Load the charts module
//import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

// ReactDOM.render(
//     let g=this.props.dd;
//     <ReactFC {...g} />,
//     document.getElementById('sales-chart-container')
// );

class Ch2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'showPopup': false
        }
    }
    render(){
        var g={
    width: "600",
    height: "400",
    type: "column2d",
    dataSource: {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "fint"
        },
        data: [{
            label: "Bakersfield Central",
            value: "880000"
        }, {
            label: "Garden Groove harbour",
            value: "730000"
        }, {
            label: "Los Angeles Topanga",
            value: "590000"
        }, {
            label: "Compton-Rancho Dom",
            value: "520000"
        }, {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    }
}
return(
        <ReactFC {...g} />)
    }
}
export default Ch2;
