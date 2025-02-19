import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { backgroundBox, card } from "./Cards.module.css";
import PropTypes from 'prop-types';

const CardText = ({ arrayOfCards }) => {
  return (
    <>
      {arrayOfCards.map((array) => (
        <Card className={card} key={array.id}>
          <CardContent>
            <Typography className={backgroundBox} mb={2}>
              {array.year}
            </Typography>
            <Typography variant="h5" component="div">
              {array.title}
            </Typography>
            <Typography color="text.secondary" my={2}>
              {array.subTitle}
            </Typography>
            <Typography color="text.secondary" fontSize={15}>
              {array.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" target="_blank" rel="noopener noreferrer" href={array.url}>
              {array.btn}
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

CardText.propTypes = {
    arrayOfCards: PropTypes.array
}

export default CardText;
