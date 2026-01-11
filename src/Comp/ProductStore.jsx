import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [myCart, setMyCart] = useState([]);

    // Saman thapne logic
    const addSaman = (item) => {
        setMyCart((prev) => {
            const isExist = prev.find(p => p.id === item.id);
            if (isExist) {
                return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
            }
            return [...prev, { ...item, qty: 1 }];
        });
        
    };

    // Saman hataune logic
    const removeSaman = (id) => {
        setMyCart(myCart.filter(item => item.id !== id));
    };

    return (
        <ProductContext.Provider value={{ myCart, addSaman, removeSaman }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useStore = () => useContext(ProductContext);