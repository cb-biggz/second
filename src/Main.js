import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Review from './Review';

import jaybird5 from './img/jaybird5.png';

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<img class="logo" src={jaybird5} alt="headphone" width="200" />
					<div class="nav-container">
						<ul className="header">
							<li class="headOne">
								<NavLink exact to="/">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/shop">Shop</NavLink>
							</li>
							<li>
								<NavLink to="/contact">Contact</NavLink>
							</li>
							<li>
								<NavLink to="/review">Review</NavLink>
							</li>
						</ul>
					</div>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/shop" component={Shop} />
						<Route path="/contact" component={Contact} />
						<Route path="/review" component={Review} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
