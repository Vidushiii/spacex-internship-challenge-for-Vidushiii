import {React, useEffect, useState} from "react";
import Maincard from "./cards/maincard";
import Backgrounds from "./cards/background";
import Grid from '@material-ui/core/Grid';
import NavBar from "./navbar";
import { Box } from "@material-ui/core";
import "./landingpage.css";
import { BottomNavigation } from "@material-ui/core";
import { FaRocket } from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton';
//import { Pagination } from '@material-ui/lab';

// It is the main page of the website.

// Styling

export default function Landingpage(){
  const [launchData, setlaunchData] = useState([]);
  const[filterData,setFilterdat] = useState([]);
  const [status, setstatus] = useState("");
  useEffect(()=>{
    console.log(status);
  },[status])

  // Use effect to fetch data from API
  useEffect(()=>{
    fetch("https://api.spacexdata.com/v3/launches")
    .then((res)=>res.json())
    .then((data)=>
      setlaunchData(data)
    )
    .catch(console.error);
  }
  ,[])

 

 

  useEffect(()=>{
    if (status === "success"){
      setFilterdat(launchData.filter(data => data.launch_success == true));
      }else if(status === "failed"){
        setFilterdat(launchData.filter(data => data.launch_success == false));
      }else if(status === "upcoming"){
        setFilterdat(launchData.filter(data => data.upcoming == true));
      }else{
        setFilterdat(launchData);
      }
    
  },[status]);


    return (  
        <div className= "landingpage">
            <div className="mdiv">
            <NavBar  setstatus = { setstatus} />
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
              {
                filterData.map(singledata => 
                  (
                    <Grid key = {singledata.rocket.flight_id} container item xs={3} className="launchData" >
                      <Maincard singledata = {singledata} 
                    /></Grid>))
              })
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
