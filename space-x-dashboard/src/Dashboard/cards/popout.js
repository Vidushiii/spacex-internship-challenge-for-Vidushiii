import {React, useState} from 'react';
import {Dialog, 
  DialogActions,
  DialogContent,
  DialogTitle,
  Button } from '@material-ui/core';
import Innercard from "./innercard";


export default function Popout({singledata}){
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return ( <>
        <Button onClick={handleClickOpen} style={{color:"#8a2be2"}}>
          Know More 
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
           <DialogTitle style={{width:"400px"}}></DialogTitle>
           <DialogContent style={{backgroundColor:"white"}}>
             <Innercard singledata = {singledata}/>
           </DialogContent>
           <DialogActions >
             <Button onClick={handleClose} style={{backgroundColor:"#8a2be2",color:"white"}} >
               BACK
             </Button>
           </DialogActions>
         </Dialog>
         </>
    )
}