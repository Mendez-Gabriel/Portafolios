import React from 'react';
import { List, Box, ListItem, ListItemText, ListItemButton, ListItemIcon, Button } from '@mui/material';
import { red } from '@mui/material/colors';


const ListNav = ({ setOpen, icons, nameIcon, handleItemClick }) => {



  return (
    <Box
    sx={{ width: 200 }}
    role='presentation'
    
    >{nameIcon ?
      (
        <List>
          {nameIcon.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleItemClick(`Section${index+1}`);
                  setOpen(false);
                }}
                onKeyDown={() => setOpen(false)}
              >
                <ListItemIcon sx={{color:'white'}}>
                    {React.createElement(icons[index])}                 
                </ListItemIcon>
                <ListItemText primary={text} sx={{color:'white'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )
      :
      (
       <></>
      )
    }      
    </Box>
  )
}

export default ListNav;