import React, { Component } from 'react';

import LinkInput from './LinkInput/';
import ShortenedLink from './ShortenedLink';

class LinksShortener extends Component {
	constructor() {
		super();

		this.state = {
			links: [],
		};

		this.fetchAPI = this.fetchAPI.bind(this);
	}

	async fetchAPI(url) {
		const id = Math.random();
		this.setState(prevState =>{
			return{
				links : [{ id, loading: true, }, ...prevState.links],
			};
		});

		const endPoint = `https://api.shrtco.de/v2/shorten?url=${url}`;
		const response = await fetch(endPoint);
		const {result} = await response.json();
		
		const obj = {
			id,
			originalLink: url,
			shortenedLink: result.full_short_link,
			loading: false,
		};

		this.setState(prevState =>{
			return{
				links : [...prevState.links.map((link) => {
					if (link.id === id) return obj;
					else return link; 
				})],
			};
		});
	}
	
	render() {
		const { links } = this.state;
		
		return (
			<section className="link-shortener">
				<LinkInput fetchAPI={this.fetchAPI} />
				{links.map(({originalLink, shortenedLink, loading}, index) => (
					<ShortenedLink
						key={index}
						originalLink={originalLink}
						shortenedLink={shortenedLink}
						loading={loading}
						handleClick={this.fetchAPI}
					/>
				))}
			</section>
		);
	}
}

export default LinksShortener;
