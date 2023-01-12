import React, { createContext, useContext, useState, useEffect } from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();


export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [qty, setQty] = useState(1);

    const increaseQty = () => {
    setQty((previousQty) => previousQty + 1);
    };

    const decreaseQty = () => {
    setQty((previousQty) => {
        if (previousQty - 1 > 1) return 1;
        return previousQty - 1;
        });
    };

    return (
        <Context.Provider 
            value={{
                showCart, 
                cartItems, 
                cartTotal, 
                cartQuantity, 
                qty, 
                increaseQty,
                decreaseQty,
            }}>
        {children}
        </Context.Provider>
    )
}
