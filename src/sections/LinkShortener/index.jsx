import React, { Component } from 'react';

import LinkInput from './LinkInput/';
import ShortenedLink from './ShortenedLink';

class LinksShortener extends Component {
	constructor() {
		super();

		this.state = {
			links: [
				{
					originalLink: 'https://www.google.com/',
					shortenedLink: 'https://www.twitch.tv/hayzer',
				},
				{
					originalLink: 'https://www.twitch.tv/hayzer',
					shortenedLink: 'https://www.google.com/',
				}
			],
		};
	}
	
	render() {
		const { links } = this.state;
		
		return (
			<section className="link-shortener">
				<LinkInput />
				{links.map(({originalLink, shortenedLink}, index) => (
					<ShortenedLink key={index} originalLink={originalLink} shortenedLink={shortenedLink} />
				))}
			</section>
		);
	}
}

export default LinksShortener;
