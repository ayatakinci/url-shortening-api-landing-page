import React, { Component } from 'react';

import { ReactComponent as MenuIcon } from '../../images/menu.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';

import Button from '../../UI/Button';

class Header extends Component {
	constructor() {
		super();

		this.state = {
			open: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((prevState) => {
			return {
				open : !prevState.open,
			};
		});
	}
  
	render() {
		const { open } = this.state;
    
		return (
			<header className="header">
				<nav>
					<h1 className="header__logo">
						<Logo />
					</h1>

					<div className={`header__wrapper${open ? ' open' : ''}`}>
						<div className="header__links">
							<span>Features</span>
							<span>Pricing</span>
							<span>Resources</span>
						</div>
						<div className="header__account">
							<span>Login</span>
							<Button>Sign Up</Button>
						</div>
					</div>

					<div className="header__menu" onClick={this.handleClick}>
						<MenuIcon />
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
