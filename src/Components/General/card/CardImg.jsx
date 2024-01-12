import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { image, card } from './CardImg.module.css';
import { ExpandMore } from '@mui/icons-material';


const CardImg = ({ img, title, text, pagNetlify, pagGitHub }) => {
    return (
        <Box className={card}>
            <CardMedia
                component="img"
                alt="green iguana"
                className={image}
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Description
                    </AccordionSummary>
                    <AccordionDetails>
                        {text}
                    </AccordionDetails>
                </Accordion>
                <Box my={2}>
                    <Button size="small" href={pagNetlify}>Netlify</Button>
                    <Button size="small" href={pagGitHub}>GitHub</Button>
                </Box>
            </CardContent>
            <CardActions>
            </CardActions>
        </Box>
    )
}

export default CardImg;