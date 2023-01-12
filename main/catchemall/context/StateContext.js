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
    }

    const decreaseQty = () => {
    setQty((previousQty) => {
        console.log(previousQty);
        if (previousQty - 1 < 1) return 1;

        return previousQty - 1;
        });
    }

    const addToCart = (product, quantity) => {
        const itemExistsInCart = cartItems.find((item) => item._id === product._id);
        if (itemExistsInCart) {
            
            setCartItems(
                cartItems.map((item) =>
                    item._id === product._id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                )   
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity }]);
        }
        setCartTotal((prevCartTotal) => prevCartTotal + product.price * quantity);
        setCartQuantity(cartQuantity + quantity);
        toast.success(`${qty} ${product.name} added to cart`);
    };

    return (
        <Context.Provider 
            value={{
                showCart, setShowCart,
                cartItems, 
                cartTotal, 
                cartQuantity, 
                qty, 
                increaseQty,
                decreaseQty,
                addToCart,
            }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
