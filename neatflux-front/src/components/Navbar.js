import React, { Component } from "react";
import NeatFluxLogoSvg from "../resources/NeatFlux.svg"

class Navbar extends Component {
    constructor(props) {
			super(props);
			this.burgerSwipe = this.burgerSwipe.bind(this);
	  }
		state = {
			burger:false
  	};

  burgerSwipe() {
    this.setState(state => ({
      burger: !this.state.burger
    }));
  }
  
	render() {
	
		return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<div className="navbar-item" href="https://bulma.io">
					<img src={NeatFluxLogoSvg} alt="NeatFlux Logo" width="112" height="28"/>
				</div> 
				<div role="button" className="navbar-burger burger navbar_buttons" aria-label="menu" onClick={this.burgerSwipe}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</div> 
			</div>
			<div id="navbar" class={"navbar-menu is-hidden-desktop" + (this.state.burger ? " is-active" : "")}>
				<div class="navbar-start">
					<div class="navbar-item has-dropdown is-hoverable">
							<div class="navbar-item button is-text navbar_buttons">
								Inscription
							</div> 
							<div class="navbar-item button is-text navbar_buttons">
								Connexion
							</div> 
							<div class="navbar-item button is-text navbar_buttons">
								FR
							</div> 
					</div>
				</div>
			</div>
			<div className="navbar-end is-hidden-touch">
				<div className="navbar-item">
					<div className="buttons">
						<div className="button is-text navbar_buttons">
							Inscription
						</div> 
						<div className="button is-text navbar_buttons">
							Connexion
						</div> 
						<div className="button is-text navbar_buttons">
							FR
						</div> 
					</div>
				</div>
			</div>
		</nav>
    );
  }
}

export default Navbar;