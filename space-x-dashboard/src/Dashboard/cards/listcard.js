import { React, useState } from 'react';
import { makeStyles,
  Table,TableBody, 
  TableCell,
  TableContainer,
  TableHead ,
  Paper ,
  TableRow, 
  TablePagination,
  TableFooter} from '@material-ui/core';
import { FaRocket } from "react-icons/fa";
import Popout from './popout';
 
// Styling

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:"#4d1d79",
    color:"white"
  },
  head:{
      backgroundColor:'#4d1d79',
      color :"white",
      width:"10%"
  },
  tcell:{
      color:"#8a2be2",
      backgroundColor:"white",
  },
  status:{
    fontWeight:"bold",
    padding :"2px 10px",
    color:"#8a2be2",
    backgroundColor:"white",
  }
});


export default function BasicTable({searchedData}) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
    <TableContainer component={Paper} style={{width:"90%", marginLeft:"5%"}}>
      <Table className={classes.table}  >
        <TableHead className={classes.head} > 
          <TableRow >
            <TableCell className={classes.head} >NO.</TableCell>
            <TableCell className={classes.head} align="left">Launched Year</TableCell>
            <TableCell className={classes.head}>Location</TableCell>
            <TableCell className={classes.head}>Mission</TableCell>
            <TableCell className={classes.head}>Orbit</TableCell>
            <TableCell className={classes.head}>Launch Status</TableCell>
            <TableCell className={classes.head}>Rocket</TableCell>
            <TableCell className={classes.head}>More Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            searchedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((singledata) =>{
                return(
          
            <TableRow key={singledata.rocket.flight_id} >
                <TableCell  className={classes.tcell} align="left"><FaRocket/>&nbsp;&nbsp;.{singledata.flight_number}</TableCell>
              <TableCell className={classes.tcell}  >
                {singledata.launch_year}
              </TableCell>
              <TableCell  className={classes.tcell} >{singledata.launch_site.site_name}</TableCell>
              <TableCell className={classes.tcell} >{singledata.mission_name}</TableCell>
              <TableCell className={classes.tcell} >{singledata.rocket.second_stage.payloads[0].orbit}</TableCell>
              <TableCell className={classes.status}
              style={{
                color: ((
                  singledata.launch_success === true && "green") ||
                  (singledata.launch_success === false &&  "red")
                  )
              }} >{singledata.launch_success===true ? "Successful" :  singledata.upcoming ===true ? "Upcoming" : "Unsucessful" }</TableCell>
              <TableCell className={classes.tcell} >{singledata.rocket.rocket_name}</TableCell>
              <TableCell width= "10%"className={classes.tcell}><Popout singledata={singledata} />
         </TableCell>
            </TableRow>
             ) })}
        </TableBody>
        <TableFooter >
        <TablePagination
        style={{color:"white", width:"100%"}}
        rowsPerPageOptions={[10, 20, 50]}
        count={searchedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      /> 
        </TableFooter>
      </Table>
    </TableContainer>
  </div>
  );
}
