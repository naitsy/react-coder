import { useState } from 'react';
import { createContext } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

// const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        const newItem = {
            quantity,
            ...item
        }
        setCart([...cart, newItem])
        Swal.fire(
            'Felicitaciones',
            `${item.name} fue agregado al carrito`,
            'success'
          )

        // console.table(cart)
    }

    const getProductsQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const getProductsTotalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)
    }

    const getCart = () => {
        return cart
    }

    const value = {
        cart,
        addToCart,
        getProductsQuantity,
        getCart,
        getProductsTotalPrice
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}
