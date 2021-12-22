import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Events from './components/Events';
import Activity from './components/Activity';
import Progress from './components/Progress';
import SearchBar from './components/SearchBar';

ReactDOM.render(
	<React.StrictMode>
		<Menu />
		<Header />
		<div className="search-box">
			<SearchBar/>
		</div>
		<Dashboard />
		<Events />
		<Activity />
		<Progress />
	</React.StrictMode>,
	document.getElementById('root')
);

