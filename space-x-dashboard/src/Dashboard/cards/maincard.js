import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import {Card,
  CardHeader,
  CardContent,
  Avatar,
  Button,
  Typography,
 } from "@material-ui/core";
 import { FaSpaceShuttle } from "react-icons/fa";
 import Dialog from '@material-ui/core/Dialog';
 import DialogActions from '@material-ui/core/DialogActions';
 import DialogContent from '@material-ui/core/DialogContent';
 import DialogTitle from '@material-ui/core/DialogTitle';
import Innercard from "./innercard";

//It will have the main content card .


// Styling of page
const useStyles = makeStyles(( ) => ({
  card:{
   backgroundColor:'#1b1b1b',
   color:'white',
   border: '3px solid #8a2be2',
   width : '80%',
   '&:hover': {
    backgroundColor: 'white',
    color: '#8a2be2',
    boxShadow: '5px 10px'
}
  },
  avatar: {
    backgroundColor: '#8a2be2',
    transform:"rotate(-90deg)"
  },
  forbutton: {
    marginTop:"5px",
    backgroundColor:'#8a2be2',
    color:'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#8a2be2',
  }
  }
}));

export default function MainCard({singledata}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <FaSpaceShuttle/>
          </Avatar>
        }
        title= {"Mission : " + singledata.mission_name}
        subheader={ "Launch Year : "+ singledata.launch_year}  />
      <CardContent>
        <Typography variant="body2"  component="p">
        { "Location : "+ singledata.launch_site.site_name}
        <br/>
        {singledata.launch_success===true ? "Status : Successful" : "Status : Failed" }
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen} className={classes.forbutton}>
          Know More 
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
           <DialogTitle style={{backgroundColor:"#8a2be2"}}></DialogTitle>
           <DialogContent style={{backgroundColor:"#1b1b1b"}}>
             <Innercard singledata = {singledata}/>
           </DialogContent>
           <DialogActions style={{backgroundColor:"#8a2be2"}} >
             <Button onClick={handleClose} style={{backgroundColor:"white",color:"#8a2be2"}} >
               BACK
             </Button>
           </DialogActions>
         </Dialog>
      </CardContent>   
    </Card>
  );
};
MainCard.PropTypes = {
  rocket_name: PropTypes.string

}
