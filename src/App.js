import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/productList/ProductList';
import ProductProvider, { ProductContext } from './context/ProductContext';
import './App.css';
import Filter from './components/Filter/Filter';
import { fetchProducts } from './services/api';

const App = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleFilter = async (company, category, top, minPrice, maxPrice) => {
        try {
            const products = await fetchProducts(company, category, top, minPrice, maxPrice);
            setFilteredProducts(products);
        } catch (error) {
            console.error("Error fetching filtered products:", error);
        }
    };

    return (
        <ProductProvider>
            <Router>
                <div className="app">
                    <Filter onFilter={handleFilter} />
                    <ProductContext.Provider value={{ products: filteredProducts, error: null }}>
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                        </Routes>
                    </ProductContext.Provider>
                </div>
            </Router>
        </ProductProvider>
    );
};

export default App;
