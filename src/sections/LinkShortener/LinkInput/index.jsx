import React, { Component } from 'react';

import Button from '../../../UI/Button';

class LinkInput extends Component {
	render() {
		return (
			<div className="link-input">
				<form>
					<input type="text" placeholder="Shorten a link here..." />
					<Button>Shorten it!</Button>
				</form>        
			</div>
		);
	}
}

export default LinkInput;
