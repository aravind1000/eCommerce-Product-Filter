import React, { useState } from 'react';
import { TextField, MenuItem, Button } from '@mui/material';
import './Filter.css';

const Filter = ({ onFilter }) => {
    const [company, setCompany] = useState('AMZ');
    const [category, setCategory] = useState('Laptop');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [top, setTop] = useState(10);

    const handleFilter = () => {
        onFilter(company, category, top, minPrice, maxPrice);
    };

    return (
        <div className="filter">
            <TextField
                select
                label="Company"
                value={company}
                onChange={e => setCompany(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {["AMZ", "FLP", "SNP", "MYN", "AZO"].map(company => (
                    <MenuItem value={company} key={company}>{company}</MenuItem>
                ))}
            </TextField>
            <TextField
                select
                label="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            >
                {["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"].map(category => (
                    <MenuItem value={category} key={category}>{category}</MenuItem>
                ))}
            </TextField>
            <TextField
                label="Min Price"
                type="number"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Max Price"
                type="number"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Top N Products"
                type="number"
                value={top}
                onChange={e => setTop(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleFilter}>
                Apply Filter
            </Button>
        </div>
    );
};

export default Filter;
