import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 import List from '@material-ui/core/List';
 import ListItem from '@material-ui/core/ListItem';
 import ListItemText from '@material-ui/core/ListItemText';
 import { ListItemIcon } from '@material-ui/core';
 import Divider from '@material-ui/core/Divider';
 
// It have the list component for the popop card.

// styling
 const useStyles = makeStyles(( ) => ({
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: 'white',
    },
  }));

export default function Forlist({singledata}){
    const classes = useStyles();
    return (
    <List component="nav" className={classes.list} aria-label="mailbox folders">
      <Listschema L1="Flight No. " L2={singledata.flight_number}/>
      <Listschema L1="Mission Name. " L2={singledata.mission_name}/>
      <Listschema L1="Rocket Type : " L2={singledata.rocket.rocket_type}/>
      <Listschema L1="Nationality " L2={singledata.rocket.second_stage.payloads[0].nationality}/>
      <Listschema L1="Playload Type : " L2={singledata.rocket.second_stage.payloads[0].payload_type}/>
      <Listschema L1="Manufacturer : " L2={singledata.rocket.second_stage.payloads[0].manufacturer}/>
      <Listschema L1="Orbit : " L2={singledata.rocket.second_stage.payloads[0].orbit}/>
      
    </List>
);
}

function Listschema({L1,L2}){
  return( 
     <>
    <ListItem button>
      <ListItemText primary={L1} />
          <ListItemIcon >
          <ListItemText primary={L2} />
          </ListItemIcon>
      </ListItem>
      < Divider/>
      </>
  )
};