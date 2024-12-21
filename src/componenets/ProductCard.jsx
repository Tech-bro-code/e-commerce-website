import React, { useEffect, useState } from 'react';
import AppLayout from '../global';
// src/components/ProductList.js
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { dispatch } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        dispatch({ type: 'addToCart', payload: product });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <AppLayout>
        <div className='card'>
            {/* <div>Products</div> */}
            {products.map(product => (
                <div className='product' key={product.id}>
                     <img className='img-list' src={product.image} alt={product.title} />
                    <h2 className='p-title'>{product.title}</h2>
                    <p className='p-price' >${product.price}</p>
                   
                    <button className='' onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
        </AppLayout>
);
// return <>
// <AppLayout>
//     <div>Products</div>
// </AppLayout>

// </> 
};

   

export default ProductCard;




// src/components/ProductList.js

// x
//     return (
//         <div>
//             {products.map(product => (
//                 <div key={product.id}>
//                     <h2>{product.title}</h2>
//                     <p>${product.price}</p>
//                     <img src={product.image} alt={product.title} />
//                     <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductList;
