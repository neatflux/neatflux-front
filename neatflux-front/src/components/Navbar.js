
import React, { Component } from "react";
import NeatFluxLogoPng from "../ressources/NeatFlux.png"
import NeatFluxLogoSvg from "../ressources/NeatFlux.svg"

class Navbar extends Component {
  state = {

  };

  mobileNavbar = () => {

    return (
      <div>
		  mobile
      </div>
    );
  }

  desktopNavbar = () => {




    return (
	<nav className="navbar" role="navigation" aria-label="main navigation">
		<div className="navbar-brand">
			<a className="navbar-item" href="https://bulma.io">
				<img src={NeatFluxLogoSvg} width="112" height="28"/>
			</a>

			<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      			<span aria-hidden="true"></span>
      			<span aria-hidden="true"></span>
      			<span aria-hidden="true"></span>
    		</a>
		</div>
		<div id="navbar" class="navbar-menu ">
			{/* <div class="navbar-start">
				<div class="navbar-item has-dropdown is-hoverable">

						<a class="navbar-item button is-text ">
							Inscription
						</a>
						<a class="navbar-item button is-text ">
							Connexion
						</a>
						<a class="navbar-item button is-text">
							FR
						</a>

					<div class="navbar-dropdown">
						<a class="navbar-item button is-text ">
							Inscription
						</a>
						<a class="navbar-item button is-text ">
							Connexion
						</a>
						<a class="navbar-item button is-text">
							FR
						</a>
					</div>
				</div>
			</div> */}
		</div>
		<div className="navbar-end is-hidden-touch">
			<div className="navbar-item">
				<div className="buttons">
					<a className="button is-text">
						Inscription
					</a>
					<a className="button is-text">
						Connexion
					</a>
					<a className="button is-text">
						FR
					</a>
				</div>
			</div>
		</div>
		
	</nav>
    );
  }


  // closeBuyButton = () => {
  //   this.setState({buyButton: false});
  // }  

  render() {

    return (
      <div>
        {/* <div className="is-hidden-mobile"> */}
          <this.desktopNavbar />
        {/* </div> */}
        {/* <div className="is-hidden-tablet"> */}
          {/* <this.mobileNavbar /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Navbar;