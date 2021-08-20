import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { children, submit, copied } = this.props;
    
		return (
			<button
				className={`btn${copied ? ' copied' : ''}`}
				type={submit ? 'submit' : 'button' }
				disabled={copied}
			>
				{children}
			</button>
		);
	}
}

export default Button;
