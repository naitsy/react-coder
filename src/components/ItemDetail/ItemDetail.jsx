import React from "react";

export const ItemDetail = ({ item }) => {
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
                    <h1>{item.name}</h1>
                    <p className="lead">{item.description}</p>
                    <h2 className="text-danger">${item.price}</h2>
                    <p className="text-muted">{ item.category.charAt(0).toUpperCase() + item.category.slice(1) }</p>
                    <p>Stock: {item.stock}</p>
                    <button type="button" className="btn btn-primary">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};
