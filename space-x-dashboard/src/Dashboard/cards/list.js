import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 import List from '@material-ui/core/List';
 import ListItem from '@material-ui/core/ListItem';
 import ListItemText from '@material-ui/core/ListItemText';
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

export default function Forlist(){
    const classes = useStyles();
    return (
    <List component="nav" className={classes.list} aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Ill" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>
);
}