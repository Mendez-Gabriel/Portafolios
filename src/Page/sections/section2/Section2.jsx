import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { background, border } from './Section2.module.css';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ItemForm from '../../../Components/General/itemForm/ItemForm';

const Section2 = () => {
    return (
        <div className={background} id='Section2'>
            <Box display='flex' flexDirection='column' alignItems='center' my={8}>
                <Typography color='black' variant='h4' fontWeight='1000' textAlign='center' mt={8}>About Me</Typography>
                <div className={border} ></div>
            </Box>
            <Box display='flex' flexWrap='wrap' justifyContent='center'>
                <Box mx={2} >
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <Typography color='black' textAlign='center' variant='h6' fontWeight='700'>I´m</Typography>
                        <Typography color='blue' textAlign='center' variant='h6' fontWeight='700' mx={1}>Gabriel Mendez</Typography>
                        <Typography color='black' textAlign='center' variant='h6' fontWeight='700'>a Web Developer</Typography>
                    </Box>
                    <Box maxWidth='700px'>
                        <Typography color='gray' textAlign='center' my={2}>
                            I´m graduated with distinction from RollingCode. My main focus lies in creating smooth and functional web experiences using technologies such as HTML5, CSS, JavaScript, Mongoose, React, Express and Node.js.
                        </Typography>
                        <Typography color='gray' textAlign='center' my={2}>
                            My training at RollingCode has provided me with a solid and up-to-date foundation in the latest web technologies, allowing me to tackle challenging projects with confidence and creativity. I consider myself an enthusiastic problem solver and am always looking for ways to improve and optimize the performance of the applications I develop.
                        </Typography>
                    </Box>
                </Box>
                <Box mx={2}>
                    <ItemForm title={'Name'} description={'Gabriel Dario Mendez'}/>
                    <ItemForm title={'Email'} description={'mendez.gabriel.d@hotmail.com'}/>
                    <ItemForm title={'Age'} description={'29'}/>
                    <ItemForm title={'From'} description={'Tucumán, Argentina'}/>
                    {/* <Button component="label" variant="contained" href="https://drive.google.com/file/d/1YWRGsiL5gI17m835dwDRjJ2helcAS83d/view?usp=drive_link" startIcon={<CloudDownloadIcon />} >
                        Download my cv
                    </Button> */}
                </Box>
            </Box>
        </div>
    )
}

export default Section2;