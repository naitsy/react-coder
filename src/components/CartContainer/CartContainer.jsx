import React from "react";

export const CartContainer = () => {
    return (
        <>
<div className="container my-5">
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4>Carrito de compras</h4>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="media">
                <img src="ruta/a/la/imagen1.jpg" className="mr-3" alt="Imagen del producto 1" />
                <div className="media-body">
                  <h5 className="mt-0">Nombre del producto 1</h5>
                  <p>Cantidad: 2</p>
                  <p>Precio unitario: $100.00</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-danger btn-sm">Remover</button>
                    <span className="badge badge-primary badge-pill">$200.00</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="media">
                <img src="ruta/a/la/imagen2.jpg" className="mr-3" alt="Imagen del producto 2" />
                <div className="media-body">
                  <h5 className="mt-0">Nombre del producto 2</h5>
                  <p>Cantidad: 1</p>
                  <p>Precio unitario: $200.00</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-danger btn-sm">Remover</button>
                    <span className="badge badge-primary badge-pill">$200.00</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4>Totales</h4>
        </div>
        <div className="card-body">
          <p className="card-text">Subtotal: <span className="float-right">$400.00</span></p>
          <p className="card-text">Impuestos: <span className="float-right">$40.00</span></p>
          <p className="card-text">Total: <span className="float-right">$440.00</span></p>
          <a href="#" className="btn btn-primary mr-2">Continuar comprando</a>
          <a href="#" className="btn btn-success">Pagar</a>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    );
};
