import React from 'react';
import { List, Box, ListItem, ListItemText, ListItemButton, ListItemIcon, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ListNav2 = ({ icons, handleItemClick, nameIcon }) => {
    return (
        <Box
            sx={{ width: 200 }}
            role='presentation'

        >
            {nameIcon ?
                (
                    <List>
                        {nameIcon.map((text, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        handleItemClick(`Section${index + 1}`);
                                    }}
                                    onKeyDown={() => setOpen(false)}
                                >
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        {React.createElement(icons[index])}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ color: 'white' }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                )
                :
                (
                    <Box display="flex" justifyContent="center" >
                        <Button
                            onClick={() => {
                                handleItemClick(`Section${index + 1}`);
                            }}
                            href='https://github.com/Mendez-Gabriel'
                        >
                            <Box color={'white'}>
                                <GitHubIcon />
                            </Box>
                        </Button>
                        <Button
                            onClick={() => {
                                handleItemClick(`Section${index + 1}`);
                            }}
                            href='www.linkedin.com/in/gabriel-mendez-dario/'
                        >
                            <Box color={'white'}>
                                <LinkedInIcon />
                            </Box>
                        </Button>
                        
                    </Box>
                )
            }

        </Box>
    )
}

export default ListNav2;