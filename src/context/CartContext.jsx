import React, { createContext, useState, useEffect, useContext } from 'react';

// Create Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
        alert(`${product.title} added to cart!`);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((product) => product.id !== id));
        alert(`Product removed from cart!`);
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);






//    // src/CartContext.js
//    import React, { createContext, useContext, useReducer } from 'react';
//    import ProductCard from '../componenets/ProductCard';

//    const CartContext = createContext();

//    const cartReducer = (state, action) => {
//        switch (action.type) {
//            case 'ADD_TO_CART':
//             alert(`${product.title} added to cart!`);
//                return {
//                    ...state,
//                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                   
//                };
//            case 'REMOVE_FROM_CART':
//                return {
//                    ...state,
//                    cart: state.cart.filter(item => item.id !== action.payload.id),
//                };
//            case 'UPDATE_QUANTITY':
//                return {
//                    ...state,
//                    cart: state.cart.map(item =>
//                        item.id === action.payload.id
//                            ? { ...item, quantity: action.payload.quantity }
//                            : item
//                    ),
//                };
//            default:
//                return state;
//        }
//    };

//    export const CartProvider = ({ children }) => {
//        const [state, dispatch] = useReducer(cartReducer, { cart: [] });

//        return (
//            <CartContext.Provider value={{ state, dispatch }}>
//                {children}
//            </CartContext.Provider>
//        );
//    };

//    export const useCart = () => useContext(CartContext);