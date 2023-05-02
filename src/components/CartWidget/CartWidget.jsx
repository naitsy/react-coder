import React, { useContext, useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    // debe devolver un icono de carrito de compras
    // con un icono y una notificacion mostrando un numero hardcodeado 
    const { getProductsQuantity } = useContext(CartContext);
    const quantity = getProductsQuantity();

    return (
        <Link to="/checkout">
            <div className="cart-widget-container">
                <MdOutlineShoppingCart className="cart-widget-icon" />
                <span className="badge bg-danger cart-badge">{ quantity }</span>
            </div>
        </Link>
    );
}