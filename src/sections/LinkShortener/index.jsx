import React, { Component } from 'react';

import LinkInput from './LinkInput/';

class LinksShortener extends Component {
	render() {
		return (
			<section className="links-shortener">
				<LinkInput />
			</section>
		);
	}
}

export default LinksShortener;
