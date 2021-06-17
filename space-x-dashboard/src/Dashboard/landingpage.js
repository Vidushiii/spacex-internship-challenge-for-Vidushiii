import {React, useEffect, useState} from "react";
import NavBar from "./navbar";
import "./landingpage.css";
import { BottomNavigation, CircularProgress } from "@material-ui/core";
import { FaRocket, FaSearch } from "react-icons/fa";
import IconButton from '@material-ui/core/IconButton';
import Maincard from "./cards/listcard";

// It is the main page of the website.

export default function Landingpage(){
  
  const [launchData, setlaunchData] = useState([]);

  // To get the filtered data
  const[filterData,setFilterdat] = useState([]);
  const [searchedData,setsearchedData] = useState([]);
  const [getsearch,showsearch]=useState("");

  // For getting results based on Launch Status
  const [status, setstatus] = useState("");

  // For loading State
  const [loading,setloading] = useState(false);

  useEffect(()=>{
    console.log(searchedData);
  },[searchedData])
  
  useEffect(()=>{
    console.log(getsearch);
  },[getsearch])

  // Use effect to fetch data from API
  useEffect(()=>{
    setloading(true);
    fetch("https://api.spacexdata.com/v3/launches")
    .then((res)=>res.json())
    .then((data)=>{
      setlaunchData(data),
      setFilterdat(data),
      setsearchedData(data);
      console.log(data);
      setloading(false);
    }
    )
    .catch(console.error);
  }
  ,[])

// To get the results based on Mission name , launch year & nationality

 useEffect(()=>{
   if(getsearch !== ""  || getsearch !== null)
   setsearchedData(filterData.filter(searchfilter=>(searchfilter.mission_name.toLowerCase() === getsearch.toLowerCase()
    || searchfilter.launch_year === getsearch
    || searchfilter.rocket.second_stage.payloads[0].nationality.toLowerCase() === getsearch.toLowerCase() )  ))
   else
   setsearchedData(filterData);
 },[getsearch])

 useEffect(()=>{
   setsearchedData(filterData)
 },[filterData])
 
 // To get the data based on launch status
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
            <NavBar  setstatus = { setstatus } getsearch={getsearch}  showsearch={showsearch} />
            <div style={{padding:'20px',backgroundColor:"white"}}>
             {loading ? <div style={{backgroundColor:"white", color:"#8a2be2", padding:"12%", marginLeft:"30%",marginBottom:"5%" }}>
                      <CircularProgress style={{color:"#8a2be2"}}/>
                       <h2>Loading!!</h2> 
                      </div>: searchedData.length > 0 ? <div >
                      <Maincard searchedData = {searchedData} /> </div>  :
                      <div style={{backgroundColor:"white", color:"#8a2be2", padding:"12%", marginLeft:"30%" }}>
                     <FaSearch style={{color:"#8a2be2",width:"100px",height:"100px"}}/>
                       <h2>No Results!!</h2> 
                      </div>}
            </div>
          </div>
          <BottomNavigation style={{backgroundColor:"white"}}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer">
           < a href="https://www.spacex.com/"> <FaRocket style={{color:"#8a2be2"}}/>SpaceX</a>
          </IconButton>
          </BottomNavigation>
        </div>
      );
}
