import React, { Component } from 'react';

import Button from '../../../UI/Button';

class LinkInput extends Component {
	constructor() {
		super();

		this.state = {
			link: '',
			invalid: false,
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
		const URL_REGEX = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

		if (URL_REGEX.test(link)) {
			this.setState({
				link: '',
				invalid: false,
			});
	
			fetchAPI(link);
		} else {
			this.setState({
				invalid: true,
			});
		}
	}
	
	render() {
		const { link, invalid } = this.state;

		return (
			<div className="link-input">
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<div className="invalid-container">
						<input
							onChange={(event) => this.handleChange(event) }
							value={link}
							type="text"
							placeholder="Shorten a link here..."
							className={invalid ? 'invalid-input' : ''}
						/>
						{invalid && <span className="invalid-message">Please add a valid link</span>}
					</div>
					<Button submit={true}>Shorten it!</Button>
				</form>        
			</div>
		);
	}
}

export default LinkInput;
