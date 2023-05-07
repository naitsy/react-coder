import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const CartCheckout = () => {

    const { getCart, getProductsTotalPrice, deleteItem, clearCart } = useContext(CartContext)
    const cart = getCart()
    const handleDelete = (id) => {
        deleteItem( id )
    }


    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header">
                                Tu carrito de compras
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Imagen</th>
                                            <th scope="col">Producto</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Total</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {                                        
                                            cart.length > 0 ?
                                            cart.map(item => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <Link to={`/item/${item.id}`}>
                                                                <img src={item.img} alt="" width="50"/>
                                                            </Link>
                                                        </td>
                                                        <td>{item.name}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>$ {item.price}</td>
                                                        <td>$ {item.price * item.quantity}</td>
                                                        <td>    
                                                            <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                                                                <BsTrash />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )                                            
                                            })                                            
                                            :                                                    
                                            <tr>
                                                <td colSpan="6" className="text-center">
                                                    No hay productos en el carrito
                                                </td>
                                            </tr>
                                        }
                                        <tr>
                                            <td colSpan="4"
                                                className="text-right" >
                                                <strong>Total:</strong>
                                            </td>
                                            <td>$ { getProductsTotalPrice() } </td>
                                            <td>
                                            {
                                                cart.length > 0 &&                                  
                                                <button className="btn btn-primary" onClick={ clearCart } >
                                                    Vaciar carrito
                                                </button>
                                            }                                                                                                
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Resumen del carrito */}
                        <div className="card">
                            <div className="card-header">
                                Resumen de la compra
                            </div>
                            <div className="card-body">
                                <p>
                                    <strong>Total:</strong> $ { getProductsTotalPrice() }
                                </p>
                                {
                                    cart.length > 0 &&                                  
                                    <Link to="/paywall" className="btn btn-primary my-2 w-100">
                                        Pagar
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
