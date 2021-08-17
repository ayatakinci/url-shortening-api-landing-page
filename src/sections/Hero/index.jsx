import React, { Component } from 'react';

import Button from '../../UI/Button';
import image from '../../images/illustration-working.svg';

class Hero extends Component {
	render() {
		return (
			<section className="hero">
				<div className="hero__grid">
					<div className="hero__text-container">
						<h2>More than just shorter links</h2>
						<p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
						<Button>Get Started</Button>
					</div>
					<div className="hero__image-container"><img src={image} alt="Working" /></div>
				</div>
			</section>
		);
	}
}

export default Hero;
