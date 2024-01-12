import React from 'react';
import { background, border } from './Section5.module.css';
import { Box, Typography } from '@mui/material';
import ListCard from '../../../Components/General/listCard/ListCard';

const Section5 = () => {
  return (
    <div className={background} id='Section5'>
        <Box mx={2} py={8}>
            <Typography color='black' variant='h4' fontWeight='1000' textAlign='center'>Portfolio</Typography>
            <div className={border}></div>
        </Box>
        <ListCard />
    </div>
  )
}

export default Section5;