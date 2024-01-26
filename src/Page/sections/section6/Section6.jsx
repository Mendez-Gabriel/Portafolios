import React from 'react';
import { background, border } from './Section6.module.css';
import { Box, Typography, Button, Link } from '@mui/material';
import Form from '../../../Components/Specific/form/Form';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Section6 = () => {
  return (
    <div className={background} id='Section6'>
        <Box mx={2} py={8}>
            <Typography color='black' variant='h4' fontWeight='1000' textAlign='center'>Contact</Typography>
            <div className={border}></div>
            {/* <Box>
              <Form />
            </Box> */}
            <Box m={2}>
              <Typography variant='h6' fontWeight='800'>Address</Typography>
              <Typography>San Miguel de Tucumán, Tucumán, Argentina</Typography>
            </Box>
            <Box m={2}>
              <Typography variant='h6' fontWeight='800'>Communicate</Typography>
              <Typography>1157641372</Typography>
              <Typography>mendez.gabriel.d@hotmail.com</Typography>
            </Box>
            <Box m={2}>
              <Typography variant='h6' fontWeight='800'>Follow me</Typography>
              <Button href='https://github.com/Mendez-Gabriel' sx={{color:'black'}}><GitHubIcon/></Button>                
              <Button href='www.linkedin.com/in/gabriel-mendez-dario/'><LinkedInIcon/></Button>
            </Box>

        </Box>
    </div>
  )
}

export default Section6;