import React, { createContext, useContext, useState, useEffect } from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();


export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [qty, setQty] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    let foundItem;
    let index;

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

    const toggleCartItemQuantity = (id, value) => {
        foundItem = cartItems.find((item) => item._id === id);
        index = cartItems.indexOf(foundItem);

        if (value === 'increase') {
            setCartItems([
                ...cartItems.slice(0, index),
                { ...foundItem, quantity: foundItem.quantity + 1 },
                ...cartItems.slice(index + 1),
            ]);
            setCartTotal((prevCartTotal) => prevCartTotal + foundItem.price);
            setCartQuantity(prevCartQuantity => prevCartQuantity + 1);
        } else if (value === 'decrease') {
            if (foundItem.quantity > 1) {
                setCartItems([
                    ...cartItems.slice(0, index),
                    { ...foundItem, quantity: foundItem.quantity - 1 },
                    ...cartItems.slice(index + 1),
                ]);
                setCartTotal((prevCartTotal) => prevCartTotal - foundItem.price);
                setCartQuantity(prevCartQuantity => prevCartQuantity - 1);
            }
           
        }
    };

    const removeItemFromCart = (id) => {
        foundItem = cartItems.find((item) => item._id === id);
        index = cartItems.indexOf(foundItem);

        setCartItems([
        ...cartItems.slice(0, index),
        ...cartItems.slice(index + 1)
        ]);
        
        setCartTotal((prevCartTotal) => prevCartTotal - (foundItem.price * foundItem.quantity));
        setCartQuantity(prevCartQuantity => prevCartQuantity - foundItem.quantity);
    };

    return (
        <Context.Provider 
            value={{
                showCart, setShowCart,
                cartItems, setCartItems,
                cartTotal, setCartTotal,
                cartQuantity, setCartQuantity,
                currentPage, setCurrentPage,
                qty, 
                increaseQty,
                decreaseQty,
                addToCart,
                toggleCartItemQuantity,
                removeItemFromCart
            }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
