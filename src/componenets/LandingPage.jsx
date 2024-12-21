import React, { useState } from 'react';
import AppLayout from '../global';
import useFetchProducts from '../hooks/useFetchProducts';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';


function LandingPage() {
//  const handleClick = () => {
//     alert('Button Clicked!');
//  };
   const { addToCart } = useCart();

    const {alProducts, loading, error} = useFetchProducts();
   
    return ( 
    <> 
    <AppLayout>   
       {
        loading ? (<p>Loading...</p>) : ( <div className='card'>
                {alProducts?.map((product) => (
                <div key={product.id} className='product'>
                    
                    <img src={product.image} alt={product.title} className='img-list'/>
                    <h2 className='p-title'>{product.title}</h2>
                    <p className='p-cat'> cat: {product.category}</p>
                    <p className='p-price'>Price: ${product.price}</p>
                
                    <button onClick={() => addToCart (product) }> Add to Cart</button>
                    
                    
                    
                    
                    
                </div>
                ))}
            </div>
            )
       }
       
    </AppLayout>
    </>
    );
    
}

export default LandingPage;


//    // src/Product.jsx
//    import React from 'react';

//    const Product = ({ product, addToCart }) => {
//        return (
//            <div className="product">
//                <h2>{product.title}</h2>
//                <p>${product.price}</p>
              
//            </div>
//        );
//    };

//    export default Product;
   
