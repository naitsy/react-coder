import React, { useState, useContext } from "react";
import { BsFillCartCheckFill,BsFillCartFill, BsPlus, BsDash } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const ItemCounter = (props) =>  {
    const [counter, setCounter] = useState( props.item.stock > 0 ? 1 : 0)
    const { addToCart } = useContext(CartContext)
    const sumar  = () => {
        if( counter < props.item.stock ) 
            setCounter(counter + 1)
    }
    const restar = () => {
        if( counter > 1 ) 
            setCounter(counter - 1)         
    }

    return (
        <>
            <div className="d-flex justify-content-start">
                <button type="button" className="btn btn-outline-primary me-1" onClick={ restar } disabled={ counter === 1 }>
                    <BsDash />
                </button>
                <h3 className="mx-3">
                { counter }
                </h3>
                <button type="button" className="btn btn-outline-primary me-1" onClick={ sumar }>
                    <BsPlus />
                </button>
                <button type="button" className="btn btn-primary me-1" onClick={ () => {
                    addToCart(props.item, counter)
                }} disabled={ counter === 0 }>
                    <BsFillCartCheckFill className="me-1"/>
                    Agregar al carrito                       
                </button>
                <Link to="/checkout" className="btn btn-secondary me-1">                   
                    <BsFillCartFill className="me-1"/>
                    Ver carrito                               
                </Link>
            </div>
        </>
    )
}
