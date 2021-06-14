import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

export default function RecipeReviewCard() {
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <Button variant="outlined" onClick={handleClickOpen} className={classes.forbutton}>
          Know More 
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
           <DialogTitle style={{backgroundColor:"#8a2be2"}}></DialogTitle>
           <DialogContent style={{backgroundColor:"#1b1b1b"}}>
             <Innercard/>
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
}
