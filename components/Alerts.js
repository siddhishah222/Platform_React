import React, { Component } from 'react';
import '../css/alerts.css';

import Tag from '../images/thumbnails/Tag.png';
import Video from '../images/thumbnails/Video.png';
import User from '../images/thumbnails/Users@3x.png';

const alerts = [
	{
		subject: 'You have a new session to re...', 
		date: 'Today, 10:30 AM', 
		image: Tag
	}, 
	{
		subject: 'You have a virtual session...', 
		date: 'Yesterday, 9:45 PM', 
		image: Video
	}, 
	{
		subject: 'You have a face to face sta...', 
		date: 'Yesterday, 10:00 PM', 
		image: User
	}
];

class Alerts extends Component {
	render() {
		return (
			<div className={ this.props.opened ? 'opened alerts-pop' : 'alerts-pop' }>
				<div className="arrow"></div>

				{alerts.map((alertObj, index) => (
					<div key={ index } className="alert-element">
						<img src={ alertObj.image } alt="" />
						<h2 className="subject">{ alertObj.subject }</h2>
						<h3>{ alertObj.date }</h3>
					</div>
				))}
			</div>
		);
	}
}

export default Alerts;
