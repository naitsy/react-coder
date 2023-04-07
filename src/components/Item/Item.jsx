import React, { useState } from 'react';

export const Item = ({ item }) => {
    return (
        <li className='col'>
            <div className="card" style={{ width:'100%'}}>
                <img className="card-img-top" src={ item.img } alt={ item.name } />
                <div className="card-body">
                    <h4 className="card-title">{ item.name } - ${ item.price }</h4>
                    <p className="card-text">{ item.description }</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
        </li>
    )
}