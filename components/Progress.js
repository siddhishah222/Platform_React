import React, { Component } from 'react';
import '../css/progress.css';

const progressElements = [
	{
		title: 'Total Webinars', 
		total: 9
	}, 
	{
		title: 'Pending Assignments', 
		total: 0
	}, 
	{
		title: 'Total Units', 
		total: 5
	}, 
	{
		title: 'Total Readings', 
		total: 15
	}, 
	{
		title: 'Total Videos', 
		total: 5
	}
];

class Progress extends Component {
	constructor() {
		super();

		this.state = {
			tasks: [], 
			loaded: false
		};
	}

	loadData() {

		// Simulate latency of the database
		setTimeout(() => {
			this.setState({ 
				tasks: progressElements , 
				loaded: true
			});
		}, 3000);
	}

	componentDidMount() {
		this.loadData();
	}

	render() {
		return (
			<section className="progress">

				<div className="progress-overview">
					<h1 className="title">Progress Overview</h1>

					<div className="percentage">
						<h1 className="value">40<small>%</small></h1>
						<svg width="180px" height="180px" viewBox="0 0 180 180" x="0px" y="0px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
							<path id="back_path" pathLength="1" d="
									M90,10 
									A80,80 1,0,1 170,90 
									A80,80 1,0,1 90,170
									A80,80 1,0,1 10,90
									A80,80 1,0,1 90,10">
							</path>
							<path id="path" pathLength="1" d="
									M90,10 
									A80,80 1,0,1 170,90 
									A80,80 1,0,1 90,170
									A80,80 1,0,1 10,90
									A80,80 1,0,1 90,10">
							</path>
						</svg>
					</div>

					<div className="legend">
						<div className="element completed">
							<h5 className="marker">Completed</h5>
							<h3><strong>20</strong>hours</h3>
						</div>
						<div className="element left">
							<h5 className="marker">Left to go</h5>
							<h3><strong>30</strong>hours</h3>
						</div>
					</div>
				</div>

				<h1 className="section-title line"><span>Progress</span></h1>

				<div className={ !this.state.loaded ? 'counter-elements loading' : 'counter-elements' }>
					{this.state.tasks.map((task, index) => (
						<div key={ index }>
							<h4>{ task.title }</h4>
							<h1 className="float-value">{ task.total }</h1>
						</div>
					))}
				</div>

				<div className="confirmation-notification">
					<p><strong>Confirm your account details</strong> Please confirm your email and phone number. <span role="img" aria-label="Worried">&#x1F625;</span></p>
				</div>
			</section>
		);
	}
}

export default Progress;
