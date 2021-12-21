import React, { Component } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import '../css/events.css';
import '../css/carrousel.css';
import '../css/carrouselb.css';

import Webinars from '../images/thumbnails/Webinars@2x.png';
import Thumbnail from '../images/thumbnails/Thumbnail@2x.png';
import Header from '../images/headers/Clock.png';

const events = [
	{
		topic: 'Science', 
		title: 'Youth Talent & Education', 
		date: 'May, 20'
	}, 
	{
		topic: 'Science', 
		title: 'Public Health & Research', 
		date: 'Oct, 6'
	}, 
	{
		topic: 'Science', 
		title: 'Life & Neural Sciences', 
		date: 'Oct, 28'
	}
];

const eventsToday = [
	{
		time: '10:30 AM', 
		title: 'Webinar: the basics of...', 
		icon: Webinars
	}, 
	{
		time: '5:25 PM', 
		title: 'Team Building Activity', 
		icon: Thumbnail
	}, 
	{
		time: '6:29 PM', 
		title: 'How to overcome fear', 
		icon: Webinars
	}, 
	{
		time: '1:40 PM', 
		title: 'Living on the edge', 
		icon: Thumbnail
	}
];

class Events extends Component {

	componentDidMount() {
		this.carousel = new Flickity(this.carouselNode, {
			cellAlign: 'center', 
			pageDots: false, 
			percentPosition: true, 
			setGallerySize: false, 
			wrapAround: true
		});

		this.carouselB = new Flickity(this.carouselBNode, { 
			cellAlign: 'left', 
			pageDots: false, 
			prevNextButtons: false, 
			setGallerySize: false, 
			watchCSS: true, 
			wrapAround: true, 
		});
	}

	componentWillUnmount() {
		this.carousel.destroy();
		this.carouselB.destroy();
	}

	render() {
		return (
			<section className="events">
				<h1 className="section-title line"><span>Events</span></h1>

				<div className="carrousel" ref={ node => ( this.carouselNode = node ) }>
					{events.map((eventObj, index) => (
						<div key={ index } className="carrousel-cell" style={{ backgroundImage: 'url(' + Header + ')' }}>
							<h5 className="topic">{ eventObj.topic }</h5>
							<h1 className="title">{ eventObj.title }</h1>
							<h2 className="date">{ eventObj.date }</h2>
						</div>
					))}
				</div>

				<h4 className="section-subtitle line"><span>Events today</span></h4>
				
				<div className="carrousel-b" ref={ node => ( this.carouselBNode = node ) }>
					{eventsToday.map((eventObj, index) => (
						<div key={ index } className="carrousel-cell">
							<img className="thumbnail" src={ eventObj.icon } alt="" />

							<h4 className="time">{ eventObj.time }</h4>
							<h3 className="title">{ eventObj.title }</h3>
						</div>
					))}
				</div>
				<div className="dots">{/** Dots **/}</div>

			</section>
		);
	}
}

export default Events;
