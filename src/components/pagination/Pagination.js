import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <MuiPagination
            count={totalPages}
            page={currentPage}
            onChange={(e, value) => onPageChange(value)}
            color="primary"
        />
    );
};

export default Pagination;
