import React from 'react';
import { ItemList } from '../ItemList/ItemList';
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="itemListContainer">
      <ItemList />
      {/* <h2 style={props.styling}>{props.greetings}</h2> */}
    </div>
  );
}