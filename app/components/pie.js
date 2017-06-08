import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './../service/restService';
import {PieChart} from 'react-easy-chart';
import {BarChart} from 'react-easy-chart';
// import {PieChart} from 'react-easy-chart';

class Pie extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			'popularData0':[ { key: 'הרוח שגברה', value: 100, color: '#7ab211' },
							 { key: 'אני והוא', value: 200, color: '#aaac84' },
						  	 { key: 'זה נסיון לספר', value: 50, color: '#e3a51a' },
						     { key: 'שמע בני', value: 50, color: '#f4e956' },
						     { key: 'חמשה חומשים', value: 12, color: '#667178' },
						     { key: 'ספר הספרים', value: 50, color: '#3f4c55' },
						     { key: 'ספר הספרים 2', value: 90, color: '#1e313c' } ],
			'popularData1':[ { key: 'הרוח שגברה', value: 100, color: '#7ab211' },
							 { key: 'אני והוא', value: 200, color: '#aaac84' },
						     { key: 'זה נסיון לספר', value: 43, color: '#e3a51a' },
						     { key: 'שמע בני', value: 50, color: '#f4e956' },
							 { key: 'חמשה חומשים', value: 50, color: '#667178' },
							 { key: 'ספר הספרים', value: 23, color: '#3f4c55' },
							 { key: 'ספר הספרים 2', value: 50, color: '#1e313c' } ],
			'popularData2':[ { key: 'הרוח שגברה', value: 300, color: '#7ab211' },
							 { key: 'אני והוא', value: 200, color: '#aaac84' },
						  	 { key: 'זה נסיון לספר', value: 50, color: '#e3a51a' },
			   				 { key: 'שמע בני', value: 64, color: '#f4e956' },
					    	 { key: 'חמשה חומשים', value: 80, color: '#667178' },
						     { key: 'ספר הספרים', value: 50, color: '#3f4c55' },
						     { key: 'ספר הספרים 2', value: 20, color: '#1e313c' } ],
			'popularCounter':0,
			'popularCurrentData':[ { key: 'הרוח שגברה', value: 100, color: '#7ab211' },
						 		   { key: 'אני והוא', value: 200, color: '#aaac84' },
								   { key: 'זה נסיון לספר', value: 50, color: '#e3a51a' },
								   { key: 'שמע בני', value: 50, color: '#f4e956' },
								   { key: 'חמשה חומשים', value: 12, color: '#667178' },
								   { key: 'ספר הספרים', value: 50, color: '#3f4c55' },
								   { key: 'ספר הספרים 2', value: 90, color: '#1e313c' } ],
			'popularTitle0':"הספרים הנפוצים ביותר 7",
			'popularTitle1':"הספרים הנפוצים ביותר שהשאלתי 7",
			'popularTitle2':"הספרים הנפוצים ביותר ששאלתי 7",
			'popularCurrentTitle':"הספרים הנפוצים ביותר 7",
			'likes':[
      {
        x: 'A',
        y: 46
      },
      {
        x: 'B',
        y: 26
      }
    ]
		}
		this.getLikes();
	}
	componentWillMount() {
		var _this=this;
		var pp="g";
		setInterval(function(){ 
		 	let cnt=_this.state.popularCounter;
		 	cnt=(cnt+1)%3;
	 		_this.setState({
				'popularCounter':cnt
			});
	    	switch(cnt){
	    		case 0:_this.setPopularityData(_this.state.popularData0,_this.state.popularTitle0);break;
	    		case 1:_this.setPopularityData(_this.state.popularData1,_this.state.popularTitle1);break;
	    		case 2:_this.setPopularityData(_this.state.popularData2,_this.state.popularTitle2);break;
	    	}
		}, 5000);
	}
	setPopularityData(d,t){
		this.setState({
			'popularCurrentData':d,
			'popularCurrentTitle':t
		});
	}
	getLikes(){
		var _this=this;
		debugger;
		console.log("hwohf");
		restService.get('/books/Likes').then(function(fetchLikes){
			debugger;
			if(fetchLikes){
				_this.setState({
					'likes':fetchLikes
				});
			}
		});
	}
	render(){
		return(
			<div>
			<PieChart labels padding={50} data={this.state.popularCurrentData}/>
			<BarChart colorBars axes data={this.state.likes}/>
			</div>
		);
	}
}
export default Pie;