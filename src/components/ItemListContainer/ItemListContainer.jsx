// Importar los módulos necesarios de React
import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList"; // Importar el componente "ItemList"
import { Blocks } from "react-loader-spinner"; // Importar el componente "Blocks" de "react-loader-spinner"
import { useParams } from "react-router-dom"; // Importar el hook "useParams" de "react-router-dom"
import { getStock } from "../../helpers/getStock"; // Importar la función "getStock" de "helpers/getStock
import "./ItemListContainer.css";

// Definir el componente "ItemListContainer"
export const ItemListContainer = () => {
    // Definir el estado inicial para los items (datos de stock) y el estado de carga (loading)
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    // Definir un efecto que se ejecutará solo una vez después de que se monte el componente
    useEffect(() => {
        setLoading(true); // Establecer "loading" en "true" para mostrar el spinner de carga
        // Llamar a la función "getStock" y manejar la promesa resultante
        getStock()
            .then((result) => {
                if (categoryId) 
                    result = result.filter((item) => item.category === categoryId);

                setItems(result);

            }) // Establecer el estado "items" con los datos de stock
            .catch((error) => {
                console.log(error);
            }) // Registrar cualquier error en la consola
            .finally(() => {
                setLoading(false);
            }); // Establecer "loading" en "false" para mostrar los datos de stock
    }, [categoryId]); // La dependencia vacía asegura que este efecto solo se ejecute una vez después del montaje

    

    // Devolver la interfaz de usuario con los componentes que deben ser mostrados
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
                    <div className="d-flex justify-content-start itemListContainer ">
                        <h2>{ categoryId ? (categoryId.charAt(0).toUpperCase() + categoryId.slice(1)) : "Todos los productos" }</h2>
                    </div>
                    <ItemList items={items} />
                </>
            )
        }
        </>
    )
          
};

