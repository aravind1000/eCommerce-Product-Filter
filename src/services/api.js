import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
    const url = `${API_BASE_URL}/products?limit=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
        const response = await axios.get(url);
        return response.data.products;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export { fetchProducts };
