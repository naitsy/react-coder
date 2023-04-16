import React from "react";
import { Item } from "../Item/Item";
// import "./ItemList.css";

export const ItemList = ({ items }) => {
    // const [items, setItems] = useState([]);

    return (
        <div className="d-flex flex-row justify-content-start flex-wrap">
            {items.map((it) => (
                <Item key={it.id} item={it} />
            ))}
        </div>
    );
};
