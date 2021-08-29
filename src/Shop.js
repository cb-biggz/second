import React, { Component } from 'react';
import jaybird6 from './img/jaybird6.png';
import jaybird7 from './img/jaybird7.png';

class Shop extends Component {
	render() {
		return (
			<div class="imageContainer">
				<img class="shopOne" src={jaybird6} alt="headphone" />
				<p class="listReasonsTitle">Jaybird Vista - $149.99</p>
				<ul class="listReasons">
					<li>16 hour battery life with charging case</li>
					<li>Music and calls</li>
					<li>IPX7 Waterproof and Sweatproof</li>
					<li>Sport Fit</li>
					<li>JBS1 Wireless Technology</li>
					<li>Premium Sound with Custom EQ</li>
				</ul>
				
				<img class="shopTwo" src={jaybird7} alt="headphone" />
				<p class="listReasonsTitle2">Jaybird Vista 2 - $199.99</p>
				<ul class="listReasons2">
					<li>Surround Sense</li>
					<li>Earthproof Durability</li>
					<li>IP68 Waterproof and Sweatproof</li>
					<li>24 Hour Battery</li>
					<li>Active Noise Cancellation</li>
					<li>Sport Fit</li>
				</ul>
			</div>
		);
	}
}

export default Shop;
