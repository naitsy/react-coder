import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export const CartWidget = () => {
    // debe devolver un icono de carrito de compras
    // con un icono y una notificacion mostrando un numero hardcodeado 
    return (
        <div>
            <MdOutlineShoppingCart />
            <span class="badge bg-danger">4</span>
        </div>
    );
}