import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Blocks } from "react-loader-spinner";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../data/firebaseConfig";
import { BsFillHouseFill } from "react-icons/bs";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();
    const [exists, setExists] = useState(true)

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()
        const products = db.collection('products')        
        
        products.doc(itemId)
            .get()
            .then(doc => {
                setExists( doc.exists )
                if( exists )
                    setItem({id: doc.id, ...doc.data()})
            })
            .catch(err => {;
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    return (
        <>
            {
                loading ? 
                (
                    <div className="d-flex justify-content-center">
                        <Blocks color="#00BFFF" height={80} width={80} />
                    </div>
                ) : 
                (
                    exists?
                    <div><ItemDetail item={item} /></div>:
                    <div className="d-flex justify-content-center my-5">
                        <div className="col-flex justify-content-center">
                            <h3>El producto no existe 😥</h3>

                            <Link to="/" className="btn btn-secondary my-1">
                                <BsFillHouseFill className="me-1" /> Ir al home
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    );
};
