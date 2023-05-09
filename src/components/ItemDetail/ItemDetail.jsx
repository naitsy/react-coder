import React from "react";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({ item }) => {

    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={item.img}
                        alt="Imagen del producto"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-secondary my-1" onClick={ back }>
                        <BsArrowLeft /> Volver
                    </button>
                    <h1>{item.name}</h1>
                    <p className="lead">{item.description}</p>
                    <h2 className="text-danger">${item.price.toLocaleString("es-AR")}</h2>
                    <p className="text-muted"><span className="badge text-bg-warning">{ item.category.charAt(0).toUpperCase() + item.category.slice(1) }</span></p>
                    <p>Stock: {item.stock}</p>

                    <ItemCounter item={item}/>

                </div>
            </div>
        </div>
    );
};
