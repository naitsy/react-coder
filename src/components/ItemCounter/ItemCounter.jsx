import React, { useState } from "react";
import { MdArrowCircleUp, MdArrowCircleDown, MdRecycling } from "react-icons/md";

export const ItemCounter = () =>  {
    const [counter, setCounter] = useState(0);

    const sumar  = () => { setCounter(counter + 1) }
    const restar = () => {
        if( counter > 0 ) 
            setCounter(counter - 1)
         
    }
    const reset  = () => { setCounter(0) }

    return (
        <>
            <h4>Item Counter: { counter }</h4>
            <button onClick={ sumar }><MdArrowCircleUp /></button>
            <button onClick={ restar }><MdArrowCircleDown /></button>
            <button onClick={ reset } ><MdRecycling /></button>
        </>
    )
}
