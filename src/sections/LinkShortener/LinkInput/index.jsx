import React, { Component } from 'react';

import Button from '../../../UI/Button';

class LinkInput extends Component {
	constructor() {
		super();

		this.state = {
			link: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const { value } = event.target;
		
		this.setState({
			link: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const { fetchAPI } = this.props;
		const { link } = this.state;
		
		this.setState({
			link: '',
		});

		fetchAPI(link);
	}
	
	render() {
		const { link } = this.state;

		return (
			<div className="link-input">
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input
						onChange={(event) => this.handleChange(event) }
						value={link}
						type="text"
						placeholder="Shorten a link here..."
					/>
					<Button submit={true}>Shorten it!</Button>
				</form>        
			</div>
		);
	}
}

export default LinkInput;
