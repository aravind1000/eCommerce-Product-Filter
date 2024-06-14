import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import './Sort.css';

const Sort = ({ onSort }) => {
    return (
        <TextField
            select
            label="Sort By"
            onChange={e => onSort(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
        >
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
            <MenuItem value="discount">Discount</MenuItem>
        </TextField>
    );
};

export default Sort;
