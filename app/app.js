import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService';
import Login from './components/login.js';
import Grid from './components/grid.js';
import SkyLight from 'react-skylight';
import Example from './components/popup.js';

var user = {
	"f_name":"ss",
	"l_name":"kk",
	"id":4
};

export function render(user){
	return ReactDOM.render(
		<div>
		<Grid data={user} />
		<Login />
		<Example />
		</div>,
		document.getElementById('main')
	);
};


render(user);


// ReactDOM.render(
// 	<Popup />,
// 	document.getElementById('main')
// 	);
// Popup.alert('Tjis is an alert popup');