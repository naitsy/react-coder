// Importar los módulos necesarios de React
import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"; // Importar el componente "ItemList"
import { Blocks } from "react-loader-spinner"; // Importar el componente "Blocks" de "react-loader-spinner"
import { useParams } from "react-router-dom"; // Importar el hook "useParams" de "react-router-dom"
import "./ItemListContainer.css";
import { getFirestore } from "../../data/firebaseConfig";

// Definir el componente "ItemListContainer"
export const ItemListContainer = () => {
    // Definir el estado inicial para los items (datos de stock) y el estado de carga (loading)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    useEffect(() => {
        setLoading(true); // Establecer "loading" en "true" para mostrar el spinner de carga
        
        const db = getFirestore();
        let products = categoryId ?
        db.collection("products").where("category", "==", categoryId) : 
        db.collection("products");
        
        products
            .get()
            .then((res) => {
                const result = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }                
                })
                setItems(result)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])


    return (
        <>
        {
            loading ? 
            (
                <div className="d-flex justify-content-center">
                    <Blocks color="#00BFFF" height={80} width={80} />
                </div>
            ):             
            (
                <>
                    <div className="d-flex itemListContainer p-3">
                        <h2>{ categoryId ? (categoryId.charAt(0).toUpperCase() + categoryId.slice(1)) : "Todos los productos" }</h2>
                    </div>
                    <ItemList items={items} />
                </>
            )
        }
        </>
    )
          
};

