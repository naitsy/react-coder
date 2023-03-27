import React from 'react';
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="itemListContainer">
      <h1>ItemListContainer</h1>
      <hr />
      <h2 style={props.styling}>{props.greetings}</h2>
    </div>
  );
}