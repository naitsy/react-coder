import React from "react";
import { useState } from "react";
import { getFirestore } from "../../data/firebaseConfig";
import Swal from "sweetalert2";


export const SearchBar = (prop) => {
    const [criteria, setCriteria] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()
        Swal.fire({
            icon: 'warning',
            title: "Función no implementada 😘",
            showConfirmButton: false,
            timer: 1500
        }) 
    }


    return (
        <form className="form-inline my-2 my-lg-0 w-50" onSubmit={submitHandler}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                    onChange={(e) => setCriteria(e.target.value)}
                />
            </div>
        </form>
  );
}