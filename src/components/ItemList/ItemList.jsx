import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";

export const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("./products.js")
            .then(response => response.json())
            .then(data => setItems(data))
        }, 2000);
    }, [])
 
    return (<ul className="row">{ items.map( it => <Item key={ it.id } item={ it } /> ) }</ul>)
    
}