import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock } from "../../helpers/getStock";
import { Blocks } from "react-loader-spinner";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        getStock()
            .then((result) => {
                if (itemId) {
                    setItem(result.find((item) => item.id === itemId));
                } else {
                    //mostrar error
                    console.log("No se encontró el item");
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
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
