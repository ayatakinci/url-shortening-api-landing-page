import React, { Component } from 'react';

import { ReactComponent as FacebookIcon } from '../../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../../images/icon-twitter.svg';
import { ReactComponent as PinterestIcon } from '../../images/icon-pinterest.svg';
import { ReactComponent as InstagramIcon } from '../../images/icon-instagram.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__container">
					<h2><Logo /></h2>
					<div className="footer__links">
						<div>
							<h3>Features</h3>
							<ul>
								<li>Link Shortening</li>
								<li>Branded Links</li>
								<li>Analytics</li>
							</ul>
						</div>
						<div>
							<h3>Resources</h3>
							<ul>
								<li>Blog</li>
								<li>Developers</li>
								<li>Support</li>
							</ul>
						</div>
						<div>
							<h3>Company</h3>
							<ul>
								<li>About</li>
								<li>Our Team</li>
								<li>Careers</li>
								<li>Contact</li>
							</ul>
						</div>
						<div className="footer__social">
							<ul>
								<li><FacebookIcon /></li>
								<li><TwitterIcon /></li>
								<li><PinterestIcon /></li>
								<li><InstagramIcon /></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
