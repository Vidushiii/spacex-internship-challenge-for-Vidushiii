import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
 } from "@material-ui/core";
 import { FaSpaceShuttle } from "react-icons/fa";
 import Forlist from './list';

const useStyles = makeStyles(( ) => ({
avatar: {
    backgroundColor: '#8a2be2',
    transform:"rotate(-90deg)"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card  style={{marginLeft : "20px"}}  >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FaSpaceShuttle/>
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Forlist/>
      </CardContent> 
    </Card>
  );
}
