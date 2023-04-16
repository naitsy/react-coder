import { stock } from "../data/stock.js";

export const getStock = () => {
    return new Promise((resolve, reject) => {
        // resolve(stock);
        setTimeout(() => {
            resolve(stock);
            reject("Error"); // Esta línea no es necesaria y provocará un error, por lo que debería ser eliminada
        }, 500);
    });
};