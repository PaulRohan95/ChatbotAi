import React from 'react';
import { TextField } from '@mui/material';

function SearchBar ({ onSearch }) {
    return (
        <TextField 
            label='Search..'
            onChange={(e) => onSearch(e.target.value)}
            fullWidth
            />
    );
};

export default SearchBar;