import React, { Component } from 'react';

import Button from '../../../UI/Button';

class ShortenedLink extends Component {
	constructor() {
		super();

		this.state = {
			copied: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			copied: true,
		}, () => {
			setTimeout(() => {
				this.setState({
					copied: false,
				});
			}, 5000);
		});
	}
	
	render() {
		const { originalLink, shortenedLink, loading } = this.props;
		const { copied } = this.state;
    
		if(loading) return (
			<div className="loading link-card">Loading</div>
		);
		
		return (
			<div className="link-card">
				<div className="links-container">
					<p className="link-card__original">{originalLink}</p>
					<p className="link-card__shortened">{shortenedLink}</p>
				</div>
				<div onClick={this.handleClick}>
					<Button copied={copied}>{copied ? 'Copied!' : 'Copy'}</Button>
				</div>
			</div>

		);
	}
}

export default ShortenedLink;
