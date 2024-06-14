import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './ProductList.css';

const ProductList = () => {
    const { products, error } = useContext(ProductContext);

    if (error) {
        return <div className="error-message">Error: {error}</div>;
    }

    return (
        <Grid container spacing={2} className="product-list">
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Card className="product-card">
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
                                {product.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                ${product.price}
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
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
