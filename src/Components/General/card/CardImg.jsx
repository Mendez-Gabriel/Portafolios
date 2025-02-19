import { CardActions, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { image, card } from './CardImg.module.css';
import { ExpandMore } from '@mui/icons-material';
import Buttons from '../buttons/Buttons';
import PropTypes from 'prop-types';

const CardImg = ({ img, title, text, urlPage, arrayOfButtons }) => {
    return (
        <Box className={card}>
            <Button href={urlPage} target="_blank" rel="noopener noreferrer">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    className={image}
                    image={img}
                />
            </Button>
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
                    <Buttons arrayOfButtons={arrayOfButtons} />
                </Box>
            </CardContent>
            <CardActions>
            </CardActions>
        </Box>
    )
}

CardImg.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    arrayOfButtons: PropTypes.array,
    urlPage: PropTypes.string
}

export default CardImg;