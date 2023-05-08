import React from "react";
import { useState } from "react";
import { getFirestore } from "../../data/firebaseConfig";




export const SearchBar = () => {
    const [criteria, setCriteria] = useState(""); 

    const submitHandler = (e) => {
        e.preventDefault()

        if( criteria.trim().length < 4 ) return

        // const db = getFirestore()
        
        // db.collection("products")
        // .where("name", ">=", criteria)
        // .get()
        // .then(res => {
        //     console.log(res.docs)
        // })
    }


    return (
        <form className="form-inline my-2 my-lg-0 w-50" onSubmit={(e) => e.preventDefault()}>
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