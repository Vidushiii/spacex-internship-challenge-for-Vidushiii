import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  CardMedia,
  CardActions,
  Button
 } from "@material-ui/core";
 import { FaSpaceShuttle } from "react-icons/fa";
 import Forlist from './list';
 

const useStyles = makeStyles(( ) => ({
  card:{
    minWidth: 200
  },
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
    <Card  style={{marginLeft : "20px"}} className={classes.card} >
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
        image={ singledata.links.flickr_images.length > 0 ? singledata.links.flickr_images[0] : "https://www.businessinsider.in/photo/82347519/a-huge-rocket-from-chinas-space-station-launch-could-fall-back-to-earth-totally-uncontrolled.jpg?imgsize=420349"}
        title={singledata.mission_name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {singledata.details}
        <CardActions>
        <a href={singledata.links.article_link}><Button size="small" color="primary">
          Know More !!
        </Button></a>
        </CardActions>
        </Typography>
        <Forlist singledata= {singledata}/>
      </CardContent> 
      <CardActions>
        <a href={singledata.links.video_link}><Button size="small" color="primary">
          Watch
        </Button>
        </a>
      </CardActions>
    </Card>
  );
}
