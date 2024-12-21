import React from 'react';
import { useCart } from '../context/CartContext';
  
// src/components/Cart.js
const Cart = () => {
    const { state, dispatch } = useCart();

    const handleRemoveFromCart = (product) => {
        dispatch({ type: 'removeFromCart', payload: product });
    };

    const handleUpdateQuantity = (product, quantity) => {
        if (quantity <= 0) return; // Prevent removing by setting to 0
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: product.id, quantity } });
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {state.cart.length === 0 ? (
                <div>Your cart is empty</div>
            ) : (
                state.cart.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>
                            Quantity: 
                            <button onClick={() => handleUpdateQuantity(product, product.quantity - 1)}>-</button>
                            {product.quantity}
                            <button onClick={() => handleUpdateQuantity(product, product.quantity + 1)}>+</button>
                        </p>
                        <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
                    </div>
                )))}
        </div>
    );
};

export default Cart;