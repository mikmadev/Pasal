import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [meroCart, setMeroCart] = useState([]);

    // Saman thapne ekdam simple logic
    const addSaman = (saman) => {
        // Paila check garne: Saman chha ki nai
        let check = meroCart.find(p => p.id === saman.id);

        if (check) {
            // Yedi chha vane loop lagayera qty badhaune
            let nayaCart = meroCart.map(p => {
                if (p.id === saman.id) {
                    return { ...p, qty: p.qty + 1 };
                }
                return p;
            });
            setMeroCart(nayaCart);
        } else {
            // Yedi chhaina vane naya saman thapine
            setMeroCart([...meroCart, { ...saman, qty: 1 }]);
        }
    };

    // Saman hataune logic
    const removeSaman = (id) => {
        const bakiSaman = meroCart.filter(item => item.id !== id);
        setMeroCart(bakiSaman);
    };

    return (
        <ProductContext.Provider value={{ myCart: meroCart, addSaman, removeSaman }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useStore = () => useContext(ProductContext);