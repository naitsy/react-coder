import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../../helpers/getStock";
import { Blocks } from "react-loader-spinner";
import { ItemDetail } from "../ItemDetail/ItemDetail";

import { getFirestore } from "../../data/firebaseConfig";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const products = db.collection('products')        
        
        products.doc(itemId)
            .get()
            .then(doc => {
                setItem({id: doc.id, ...doc.data()})
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId]);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Blocks color="#00BFFF" height={80} width={80} />
                </div>
            ) : (
                <div>{loading ? <Blocks /> : <ItemDetail item={item} />}</div>
            )}
        </>
    );
};
