import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { backgroundBox, card } from './Cards.module.css';

const CardText = () => {
    return (
        <Card className={card}>
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
                    Graduated with distinction from RollingCode. My main focus lies in creating fluid and functional web experiences using technologies such as HTML5, CSS, JavaScript, Mongoose, React, Express and Node.js.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href='https://web.rollingcodeschool.com/'>More about</Button>
            </CardActions>
        </Card>
    )
}

export default CardText;