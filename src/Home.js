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
					<img class="picOne" src={jaybird1} alt="headphone" />
          <img class="picTwo" src={jaybird2} alt="headphone" />
          <img class="picThree" src={jaybird3} alt="headphone" />
					)
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
