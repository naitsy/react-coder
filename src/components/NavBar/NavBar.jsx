import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from '../../party.png'; 
import "./NavBar.css";
import { Link } from "react-router-dom";


export const NavigationBar = () => {

	return (
			<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
				<Link to="/" className="navbar-brand">
					<img className="logo" src={logo} alt="logo" />
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link">Home</Link>					
						</li>
						<li className="nav-item">
							<Link to="/category/consolas" className="nav-link">Consolas</Link>
						</li>
						<li className="nav-item">
							<Link to="/category/juegos" className="nav-link">Juegos</Link>
						</li>
						<li className="nav-item">
							<Link to="/category/accesorios" className="nav-link">Accesorios</Link>
						</li>
					</ul>
				</div>
				<CartWidget />
			</nav>
  	);
}