import React, { Component } from 'react';

import Button from '../../../UI/Button';

class LinkInput extends Component {
	constructor() {
		super();

		this.state = {
			link: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const { value } = event.target;
		
		this.setState({
			link: value,
		});
	}
	
	render() {
		const { fetchAPI } = this.props;
		const { link } = this.state;
		
		return (
			<div className="link-input">
				<form onSubmit={(event) => {
					event.preventDefault();
					fetchAPI(link);
				}}>
					<input onChange={(event) => this.handleChange(event) } type="text" placeholder="Shorten a link here..." />
					<Button>Shorten it!</Button>
				</form>        
			</div>
		);
	}
}

export default LinkInput;
