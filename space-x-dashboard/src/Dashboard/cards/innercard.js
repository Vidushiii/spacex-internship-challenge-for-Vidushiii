import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  CardMedia
 } from "@material-ui/core";
 import { FaSpaceShuttle } from "react-icons/fa";
 import Forlist from './list';
 

const useStyles = makeStyles(( ) => ({
avatar: {
    backgroundColor: '#8a2be2',
    transform:"rotate(-90deg)"
  },
  media: {
    height: 20,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function RecipeReviewCard({singledata}) {
  const classes = useStyles();
  return (
    <Card  style={{marginLeft : "20px"}}  >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FaSpaceShuttle/>
          </Avatar>
        }
        title={"Mission : " + singledata.mission_name}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={singledata.links.flickr_images[1]}
        title={singledata.mission_name}
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
