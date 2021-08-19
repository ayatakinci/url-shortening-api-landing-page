import React, { Component } from 'react';

import Button from '../../../UI/Button';

class ShortenedLink extends Component {
	render() {
		const { originalLink, shortenedLink, loading } = this.props;
    
		if(loading) return (
			<div className="loading link-card">Loading</div>
		);
		
		return (
			<div className="link-card">
				<div className="links-container">
					<p className="link-card__original">{originalLink}</p>
					<p className="link-card__shortened">{shortenedLink}</p>
				</div>
				<Button>Copy</Button>
			</div>

		);
	}
}

export default ShortenedLink;
