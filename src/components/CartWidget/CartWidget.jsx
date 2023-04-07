import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartWidget.css";

export const CartWidget = () => {
    // debe devolver un icono de carrito de compras
    // con un icono y una notificacion mostrando un numero hardcodeado 
    return (
        <div className="cart-widget-container">
            <MdOutlineShoppingCart className="cart-widget-icon" />
            <span className="badge bg-danger cart-badge">4</span>
        </div>
    );
}