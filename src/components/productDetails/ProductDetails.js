import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ProductDetails.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const { products } = useContext(ProductContext);
    const product = products.find(p => p.id === productId);

    if (!product) return <div>Product not found</div>;

    return (
        <Card className="product-detail">
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Company: {product.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Category: {product.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Rating: {product.rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Discount: {product.discount}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Availability: {product.availability ? 'In stock' : 'Out of stock'}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;
