import React, {useEffect, useState} from 'react';
import axios from 'axios';


function useFetchProducts() {
    const [ alProducts, setAlProducts ] = useState(null);
   
    const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
        (async () => {
            try {
                const products = await axios.get("https://fakestoreapi.com/products");
                console.log
                const generalProducts = await products.data;
            // console.log(generalProducts);
            if(generalProducts) {
                setLoading(false);
                setAlProducts(generalProducts);
            } 
        }catch (err) {
        setLoading(false);
        setError("No record found");
            }  
        })(); 
    }, []);

  return { alProducts, error, loading };
}

export default useFetchProducts;