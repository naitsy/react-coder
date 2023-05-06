import React from 'react';


export const Paywall = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h3>Formulario de pago</h3>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="tel" className="form-control" id="phone" name="phone" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
