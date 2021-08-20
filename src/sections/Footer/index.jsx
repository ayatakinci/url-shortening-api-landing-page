import React, { Component } from 'react';

import FacebookIcon from '../../images/icon-facebook.svg';
import TwitterIcon from '../../images/icon-twitter.svg';
import PinterestIcon from '../../images/icon-pinterest.svg';
import InstagramIcon from '../../images/icon-instagram.svg';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="footer__container">
					<h2>Shortly</h2>
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
								<li><img src={FacebookIcon} alt="Facebook" /></li>
								<li><img src={TwitterIcon} alt="Twitter" /></li>
								<li><img src={PinterestIcon} alt="Pinterest" /></li>
								<li><img src={InstagramIcon} alt="Instagram" /></li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
