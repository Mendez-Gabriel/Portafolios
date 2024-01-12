import React from 'react';
import { List, Box, ListItem, ListItemText, ListItemButton, ListItemIcon, Button, Typography } from '@mui/material';

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
                        {icons.map((icon, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    handleItemClick(`Section${index + 1}`);
                                }}
                            >
                                <Box color={'white'}>
                                    {React.createElement(icons[index])}
                                </Box>
                            </Button>
                        ))}
                    </Box>
                )
            }

        </Box>
    )
}

export default ListNav2;