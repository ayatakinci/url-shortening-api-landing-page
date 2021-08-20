import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { children, submit } = this.props;
    
		return (
			<button className="btn" type={submit ? 'submit' : 'button' }>
				{children}
			</button>
		);
	}
}

export default Button;
