import React from 'react';
import '../css/activity.css';


import Followers from '../images/icons/Followers@2x.png';
import Events from '../images/icons/Events@2x.png';
import Assignments from '../images/icons/Assignments@2x.png';

function Activity() {
	return (
		<section className="activity">
			<h1 className="section-title line"><span>Activity</span></h1>

			<details className="activity-item">
				<summary>
					<img className="thumbnail" src={ Followers } alt="" />
					You have 5 new followers including <strong>Kathryn Crawford</strong> and <strong>Piper Shaw</strong>
				</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dolor sed leo luctus aliquet. Integer ut volutpat lorem. Quisque sed neque dui. Integer tempus sagittis rhoncus. Fusce ac tempus enim. Morbi elementum urna hendrerit, tempor est vitae, consectetur mauris. Praesent pellentesque turpis fringilla nulla sollicitudin, sed feugiat tortor ultrices.</p>
			</details>


			<details className="activity-item">
				<summary>
					<img className="thumbnail" src={ Events } alt="" />
					3 new events were added to your calendar
				</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dolor sed leo luctus aliquet. Integer ut volutpat lorem. Quisque sed neque dui. Integer tempus sagittis rhoncus. Fusce ac tempus enim. Morbi elementum urna hendrerit, tempor est vitae, consectetur mauris. Praesent pellentesque turpis fringilla nulla sollicitudin, sed feugiat tortor ultrices.</p>
			</details>

			<details className="activity-item">
				<summary>
					<img className="thumbnail" src={ Assignments } alt="" />
					You have 3 pending readings to complete <span role="img" aria-label="nerd face">&#x1f913;</span>
				</summary>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dolor sed leo luctus aliquet. Integer ut volutpat lorem. Quisque sed neque dui. Integer tempus sagittis rhoncus. Fusce ac tempus enim. Morbi elementum urna hendrerit, tempor est vitae, consectetur mauris. Praesent pellentesque turpis fringilla nulla sollicitudin, sed feugiat tortor ultrices.</p>
			</details>

		</section>
	);
}

export default Activity;
