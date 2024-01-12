import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { backgroundBox } from './Cards.module.css';

const CardText = () => {
    return (
        <Card>
            <CardContent>
                <Typography className={backgroundBox} mb={2}>
                    2023
                </Typography>
                <Typography variant="h5" component="div">
                    Full Stack Developer
                </Typography>
                <Typography color="text.secondary" my={2}>
                    Rolling Code HighSchool
                </Typography>
                <Typography color="text.secondary" fontSize={15}>
                    Graduado con distinción de RollingCode. Mi enfoque principal reside en la creación de experiencias web fluidas y funcionales utilizando tecnologías como HTML5, CSS, JavaScript, Mongoose, React, Express y Node.js.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href='https://web.rollingcodeschool.com/'>Know more</Button>
            </CardActions>
        </Card>
    )
}

export default CardText;