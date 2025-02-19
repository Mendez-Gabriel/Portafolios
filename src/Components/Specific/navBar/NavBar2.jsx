import React from 'react';
import { SwipeableDrawer, Typography, Box, Avatar } from '@mui/material';
import icon from '../../../assets/Perfil.jpg';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListNav2 from './ListNav2';


const NavBar2 = () => {

    const icons = [HomeIcon, PersonIcon, CodeIcon, DocumentScannerIcon, IntegrationInstructionsIcon, MailIcon];
    const iconsRed = [GitHubIcon, LinkedInIcon];
    const nameIcon = ['Home', 'About Me', 'What I Do', 'My Education', 'Portfolio', 'Contact'];

    const handleItemClick = (index) => {
      const section = document.getElementById(index);
  
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
        <Box  sx={{ backgroundColor: '#08040C', minHeight: '100vh', padding: '20px', flexDirection: 'column', justifyContent: 'space-between', display: {xs:'none', md:'block flex'}}}  position='fixed' >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar src={icon} sx={{ 
              width: '150px', 
              height: '150px', 
              marginTop: '30px', 
              boxShadow: '0px 0px 10px 5px grey' 
            }}/>
          </Box>
          <Typography variant="h6" component="div" textAlign='center' color='white'>
            Gabriel Dario Mendez
          </Typography>
          <Box sx={{height: '50%' }} >
            <Box  display="flex">
              <ListNav2 icons={icons} nameIcon={nameIcon} handleItemClick={handleItemClick}/>
            </Box>
          </Box>
          <Box display="flex">
            <ListNav2 icons={iconsRed} />
          </Box>
        </Box>
  )
}

export default NavBar2;