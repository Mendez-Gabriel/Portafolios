import React from 'react';
import { Box, Typography } from '@mui/material';

const ItemForm = ({title, description}) => {
    return (
        <Box display='flex' borderBottom='1px solid rgb(209, 209, 209)' my={2}>
            <Typography color='black' mr={1} fontWeight='600'>{title}:</Typography><Typography color='gray'>{description}</Typography>
        </Box>
    )
}

export default ItemForm;