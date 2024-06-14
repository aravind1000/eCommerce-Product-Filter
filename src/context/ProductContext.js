import React, { createContext, useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts('AMZ', 'Laptop', 10, 1, 10000); // Example parameters
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        };

        loadProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, error }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
