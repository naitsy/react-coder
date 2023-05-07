import { useState, useEffect } from 'react';
import { createContext } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem("cart")) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    const addToCart = (item, quantity) => {
        const newItem = {
            quantity,
            ...item
        }

        const obj = cart.find(product => product.id === item.id)
        if(obj) { obj.quantity += quantity }
        else { setCart([...cart, newItem]) }
        
        Swal.fire({
            icon: 'success',
            title: `${item.name} fue agregado al carrito`,
            showConfirmButton: false,
            timer: 1400
        })          

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

    const deleteItem = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const value = {
        cart,
        addToCart,
        getProductsQuantity,
        getCart,
        getProductsTotalPrice,
        deleteItem,
        clearCart
    }


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}
