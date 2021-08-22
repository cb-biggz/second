import React, { Component } from 'react';
import jaybird1 from './img/jaybird1.jpg';
import jaybird2 from './img/jaybird2.jpg';
import jaybird3 from './img/jaybird3.jpg';
const imgArr = [jaybird1, jaybird2, jaybird3];



class Home extends Component {
	render() {
		console.log(require('./img/jaybird1.jpg'));
		return (
			<div class="container">
				<div class="image-container">
					{imgArr.map((img, idx) => {
						return (
							<img key={idx} class="picOne" src={img} alt="headphone" />
						);
					})}
				</div>

				<div class="info">
					<p>
						Jaybird headphones are the leading heaphones for any, and all.
						Lifters, runners, walkers, or lovers of music.{' '}
					</p>
					<p>
						Jaybird has the perfect set of headphones to keep you going.{' '}
					</p>
					<p>
						With a long lasting battery, and sweatproof to handle the
						harshes of workouts. Jaybird is here to fit your needs of
						whatever your next adventure brings.
					</p>
				</div>
			</div>
		);
	}
}

export default Home;
