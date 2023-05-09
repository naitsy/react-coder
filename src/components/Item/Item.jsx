import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`}>
            <div className="card card-product">
                <img src={ item.img } className="card-img" alt={ item.name } />
                <div className="card-info-container">
                    <div className="card-price d-flex justify-content-between">
                        <p>${ item.price.toLocaleString("es-AR") }</p>                                        
                    </div>
                    <div className="card-title">
                        <p>{ item.name }</p>
                    </div>                
                </div>
            </div>
        </Link>
    )
}