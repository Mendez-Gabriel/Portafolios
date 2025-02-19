import React from 'react';
import { background, border, container } from './Section4.module.css';
import { Box, Typography, Container } from '@mui/material';
import CardText from '../../../Components/General/card/CardText';
import { arrayOfCard } from './Secction4.data';


const Section4 = () => {
  return (
    <Box className={background} id='Section4'>
      <Box mx={2} py={8}>
        <Typography color='black' variant='h4' fontWeight='1000' textAlign='center'>My Education</Typography>
        <div className={border}></div>
      </Box>
      <Box display='flex' justifyContent='center' sx={{ flexWrap: 'wrap' }} py={5}>
        <CardText arrayOfCards={arrayOfCard} />
      </Box>
    </Box>
  )
}

export default Section4;