import React from 'react';
import { bgCard, size } from './Items.module.css';
import { Box, Typography } from '@mui/material';

const Items = ({ icon, text, element }) => {
    return (
        <Box display='flex' my={5}>
            <Box className={bgCard}>
                {icon}
            </Box>
            <Box  className={size} display='flex' flexDirection='column'>
                <Typography color='black' variant='h6' textAlign='center'>
                    {text}
                </Typography>
                <Box display='flex' mx={2} flexWrap='wrap' justifyContent='center'>
                    {element}
                </Box>
            </Box>
        </Box>
    )
}

export default Items;