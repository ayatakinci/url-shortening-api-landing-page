import React, { Component } from 'react';

import Button from '../../components/Button';
import image from '../../images/illustration-working.svg';

class Hero extends Component {
	render() {
		return (
			<div className="hero-container">
				<section className="hero">
					<div className="text-container">
						<h2>More than just shorter links</h2>
						<p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
						<Button text="Get Started" />
					</div>
					<div className="image-container"><img src={image} alt="Working" /></div>
				</section>
			</div>
		);
	}
}

export default Hero;
