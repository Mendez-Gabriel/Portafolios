import React from 'react';
import { Box, Typography } from '@mui/material';

const Section1 = () => {
  return (
    <Box minHeight='100vh' display='flex' flexDirection='column' justifyContent='center' alignItems='center' id='Section1'>
            <Typography color='white' variant='h4' textAlign='center'>Welcome</Typography>       
            <Typography color='white' variant='h4' fontWeight='700' textAlign='center' my={3}>I´m Full Stack Devolper</Typography>
            <Typography color='white' variant='h5' textAlign='center'>based in Tucumán, Argentina</Typography>               
    </Box>
  )
}

export default Section1;