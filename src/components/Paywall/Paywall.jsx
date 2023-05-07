import React, { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";
import { getFirestore } from '../../data/firebaseConfig';
import firebase  from 'firebase';
import "firebase/firestore"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg, BsArrowLeft } from 'react-icons/bs';

export const Paywall = () => {

    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const { getCart, getProductsTotalPrice, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(email != emailConfirm){
            alert('Los emails no coinciden')
            return
        }

        const buyer = {
            email, firstName, lastName, phone

        }
        const cart = getCart()
        
        const order = {
            buyer: buyer,
            products: cart,
            total: getProductsTotalPrice(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }
       
        const db = getFirestore()
        db.collection("orders")
        .add(order)
        .then((res) => {
            cart.forEach(product => {
                const dbDoc = db.collection("products").doc(product.id)
                dbDoc.get()
                .then(doc => {
                    dbDoc.update({ stock: doc.data().stock - product.quantity })
                })
                .catch((error) => {
                    console.log(error)                        
                })
            })
            
            Swal.fire({
                icon: 'success',
                title: 'Gracias por tu compra',
                text: `El número de orden es: ${res.id} te esperamos en la tienda 😉`,
                confirmButtonText: 'Ok'
            })
            .finally(() => {
                clearCart()
                navigate('/')
            })      
        })
        .catch((error) => {
            console.log(error)            
        })
    }

    return (
        <>
            <div className="container my-5 ">
                <div className="row ">
                    <div className="col-md-4">
                        <h3>Formulario de pago</h3>
                    </div>
                    <div className="d-flex col-md-2 justify-content-end">
                        <button className="btn btn-secondary my-1" onClick={ () => navigate(-1) }>
                            <BsArrowLeft /> Volver
                        </button>
                    </div>
                </div>
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-confirm" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email-confirm" name="email-confirm" required onChange={(e) => setEmailConfirm(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" required onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" required onChange={(e) => setLastName(e.target.value)}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="tel" className="form-control" id="phone" name="phone" required onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <BsCheckLg className="me-2" />
                                Confirmar Compra
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
