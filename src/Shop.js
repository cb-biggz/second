import React, { Component } from 'react';
import jaybird6 from './img/jaybird6.png';
import jaybird7 from './img/jaybird7.png';

class Shop extends Component {
	render() {
		return (
			<div class="imageContainer">
				<img class="shopOne" src={jaybird6} alt="headphone" />
				<p>$149.99</p>
				<img class="shopTwo" src={jaybird7} alt="headphone" />
				<p>$199.99</p>
			</div>
		);
	}
}

export default Shop;
