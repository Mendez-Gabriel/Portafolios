import React from 'react';
import { background, border } from './Section4.module.css';
import { Box, Typography } from '@mui/material';
import CardText from '../../../Components/General/card/CardText';


const Section4 = () => {
  return (
    <div className={background} id='Section4'>
      <Box mx={2} py={8}>
        <Typography color='black' variant='h4' fontWeight='1000' textAlign='center'>Resume</Typography>
        <div className={border}></div>
      </Box>
      <Box >
        <Typography color='black' variant='h5' fontWeight='1000' ml={2}>My Education</Typography>
        <CardText />
      </Box>
    </div>
  )
}

export default Section4;