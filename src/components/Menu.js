import React from 'react';
import '../css/menu.css';

function Menu() {
	return (
		<div className="menu">
			<a href={ process.env.PUBLIC_URL }>
				<i className="venturit Menu"></i>
			</a>

			<a href={ process.env.PUBLIC_URL }>
				<i className="venturit Home"></i>
			</a>

			<a href={ process.env.PUBLIC_URL }>
				<i className="venturit Apps"></i>
			</a>

			<a href={ process.env.PUBLIC_URL }>
				<i className="venturit Sheets"></i>
			</a>

			<a href={ process.env.PUBLIC_URL }>
				<i className="venturit Analytics"></i>
			</a>

			<a href={ process.env.PUBLIC_URL }>
				<i className="venturit Chat"></i>
			</a>
		</div>
	);
}

export default Menu;
