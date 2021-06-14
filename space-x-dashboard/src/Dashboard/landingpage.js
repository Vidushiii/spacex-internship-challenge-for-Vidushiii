import {React, useEffect, useState} from "react";
import Crddd from "./cards/maincard";
import Backgrounds from "./cards/background";
import Grid from '@material-ui/core/Grid';
import NavBar from "./navbar";
import { Box } from "@material-ui/core";
import "./landingpage.css";
import { BottomNavigation } from "@material-ui/core";
import { FaRocket } from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton';

// It is the main page of the website.

// Styling

export default function Landingpage(){
    return (  
        <div className= "landingpage">
            <div className="mdiv">
            <NavBar />
            <Backgrounds>
            <Box
          display='flex'
          flexDirection='column'
          height='90vh'
          maxWidth='60%'
          justifyContent='center'
        >
            <div className="heading">
              <h2>SpaceX Launch</h2>
              <p>Everything about the launch!!!</p></div>
              </Box>
            </Backgrounds>
            <div style={{padding:'20px',marginTop:'-20px'}}>
              <Grid container spacing={4} >
              <Grid container item xs={4}><Crddd/></Grid>
              <Grid container item xs={4}><Crddd/></Grid>
              <Grid container item xs={4}><Crddd/></Grid>
              <Grid container item xs={4}><Crddd/></Grid>
              </Grid>
            </div>
          </div>
          <BottomNavigation style={{backgroundColor:"#1b1b1b"}}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
           < a href="https://www.spacex.com/"> <FaRocket style={{color:"#8a2be2"}}/>SpaceX</a>
          </IconButton>
          </BottomNavigation>
        </div>
      );
}
