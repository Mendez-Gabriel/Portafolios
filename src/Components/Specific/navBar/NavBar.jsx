import React from 'react';
import { useState } from 'react';
import { SwipeableDrawer, IconButton, AppBar, Typography, Toolbar, Box, Avatar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListNav from './ListNav';
import icon from '../../../assets/Perfil.jpg';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const NavBar = () => {

  const icons = [HomeIcon, PersonIcon, CodeIcon, DocumentScannerIcon, IntegrationInstructionsIcon, MailIcon];
  const iconsRed = [GitHubIcon, LinkedInIcon];
  const nameIcon = ['Home', 'About Me', 'What I Do', 'Resume', 'Portfolio', 'Contact'];

  const handleItemClick = (index) => {
    const section = document.getElementById(index);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [open, setOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (event) {
      setOpen(!open);
    }

  };

  return (
    <div>
      <Box sx={{ display: { md: 'none' } }}>
        <AppBar position="fixed" sx={{ backgroundColor: '#08040C' }} >
          <Toolbar>
            <Avatar src={icon} sx={{ marginRight: '15px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gabriel Dario Mendez
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{ overflowY: 'hidden' }}
      >
        <Box sx={{ backgroundColor: '#08040C', minHeight: '100vh', padding: '20px', overflow: 'hidden', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'hidden'  }} display="flex" >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar src={icon} sx={{ width: '150px', height: '150px', marginTop: '30px', border: '10px solid grey' }} />
          </Box>
          <Typography variant="h6" component="div" textAlign='center' color='white'>
            Gabriel Dario Mendez
          </Typography>
          <Box sx={{ height: '50%' }} >
            <Box display="flex">
              <ListNav setOpen={setOpen} icons={icons} nameIcon={nameIcon} handleItemClick={handleItemClick}/>
            </Box>
          </Box>
          <Box display="flex" justifyContent='center'>
            <Button href='https://github.com/Mendez-Gabriel'>
              <GitHubIcon sx={{color:'white'}}/>
            </Button>
            <Button href='https://www.linkedin.com/in/gabriel-mendez-dario/'>
              <LinkedInIcon  sx={{color:'white'}}/>
            </Button>
          </Box>
        </Box>
      </SwipeableDrawer>
    </div>
  )
}

export default NavBar;