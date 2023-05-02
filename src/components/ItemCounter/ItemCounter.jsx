import React, { useState, useContext } from "react";
import { BsFillCartCheckFill, BsPlus, BsDash } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

export const ItemCounter = (props) =>  {
    const [counter, setCounter] = useState(0)
    const sumar  = () => {
        if( counter < props.item.stock ) 
            setCounter(counter + 1)
    }
    const restar = () => {
        if( counter > 0 ) 
            setCounter(counter - 1)         
    }
    // const reset  = () => { setCounter(0) }
    const { addToCart } = useContext(CartContext)

    return (
        <>
            <div className="d-flex justify-content-start">
                <button type="button" className="btn btn-outline-primary me-1" onClick={ restar }>
                    <BsDash />
                </button>
                <h3 className="me-1">
                { counter }
                </h3>
                <button type="button" className="btn btn-outline-primary me-1" onClick={ sumar }>
                    <BsPlus />
                </button>
                <button type="button" className="btn btn-primary" onClick={ () => {
                    addToCart(props.item, counter)
                }} disabled={ counter === 0 }>
                    <BsFillCartCheckFill className="me-1"/>
                    Agregar al carrito                        
                </button>            
            </div>
        </>
    )
}
