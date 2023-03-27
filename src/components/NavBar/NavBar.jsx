import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from '../../party.png'; 
import "./NavBar.css";


export const NavBar = () => {
	// debe tener brand 
	// debe tener una lista de categorías clickeables

	return (
		<nav className="navbar navbar-expand-sm bg-light navbar-light">

			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={ logo } alt="Logo" className="logo" /> 
				</a>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav">
						
						<li className="nav-item">        
							<a className="nav-link active" href="#">Consolas</a>
						</li>
						<li className="nav-item">        
							<a className="nav-link" href="#">Juegos</a>
						</li>
						<li className="nav-item">        
							<a className="nav-link" href="#">Accesorios</a>
						</li>

					</ul>
				</div>
				<div className="d-flex">
					<CartWidget />
				</div>
			</div>
		</nav>
  	);
}