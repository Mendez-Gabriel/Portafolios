import React from 'react';
import { background, border, bgCard } from './Section3.module.css';
import { Box, Typography, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataArrayIcon from '@mui/icons-material/DataArray';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import Items from '../../../Components/General/item/Items';

const Section3 = () => {
    return (
        <div className={background} id='Section3'>
            <Box mx={2} py={8}>
                <Typography color='black' variant='h4' fontWeight='1000' textAlign='center'>What I Do?</Typography>
                <div className={border}></div>
                <Box display='flex' justifyContent='center' flexWrap='wrap' mt={8}>
                    <Items 
                        icon={<CodeIcon color='black'/>}
                        text={'Language'}
                        element={
                            <>
                                <Button variant="text" color="success">JavaScript</Button>
                                <Button variant="text" color="success">c++</Button>
                            </>
                        }
                    />
                    <Items 
                        icon={<DataObjectIcon/>}
                        text={'Frameworks'}
                        element={
                            <>
                                <Button variant="text" color="success">Express</Button>
                                <Button variant="text" color="success">React</Button>
                                <Button variant="text" color="success">Material UI</Button>
                                <Button variant="text" color="success">Boostrap</Button>
                                <Button variant="text" color="success">Vite</Button>
                            </>
                        }
                    />
                    <Items 
                        icon={<DataArrayIcon/>}
                        text={'Libraries'}
                        element={
                            <>
                                <Button variant="text" color="success">Mongoose</Button>
                                <Button variant="text" color="success">React Router Dom</Button>
                                <Button variant="text" color="success">Cors</Button>
                                <Button variant="text" color="success">bcrypt</Button>
                                <Button variant="text" color="success">JWT</Button>
                                <Button variant="text" color="success">NPM</Button>
                                <Button variant="text" color="success">Axios</Button>
                                <Button variant="text" color="success">morgan</Button>
                            </>
                        }
                    />
                    <Items 
                        icon={<DynamicFormIcon/>}
                        text={'Tools'}
                        element={
                            <>
                                <Button variant="text" color="success">Node.js</Button>
                                <Button variant="text" color="success">GitHub</Button>
                                <Button variant="text" color="success">GitLab</Button>
                                <Button variant="text" color="success">Atlassian Tools</Button>
                                <Button variant="text" color="success">Cloudinary</Button>
                                <Button variant="text" color="success">Postman</Button>
                            </>
                        }
                    />
                </Box>
            </Box>
        </div>
    )
}

export default Section3;