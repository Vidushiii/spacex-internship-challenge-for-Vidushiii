import {React,useCallback} from 'react';
import {AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase, 
  makeStyles,
  Button,
  Select, 
  MenuItem} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { FaRocket } from "react-icons/fa";

// This file have the top navigation bar's content.

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    borderBottom: "5px solid #8a2be2"
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color:"#8a2be2",
    marginLeft:"35%",
    fontSize:"1.70rem",
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  dropdown:{
    backgroundColor:"#8a2be2",
  },
  forbutton : {
    //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color:'#8a2be2',
    height: 25,
    fontSize: '0.84rem'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#8a2be2'
  },
  inputRoot: {
    color: '#8a2be2',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar({ setstatus,getsearch,showsearch}) {
  const classes = useStyles();

  const handlechange = useCallback( e =>{
    const search = e.target.value;
    console.log(search);
    showsearch(search)
  },[showsearch])

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor:"white"}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
           < a href="https://www.spacex.com/"> <FaRocket style={{color:"#8a2be2"}}/> </a>
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap > Space-X Launch
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange = {e=>handlechange(e)}
              value={getsearch} 
            />
            <Select className={classes.dropdown}>
                <MenuItem><Button className={classes.forbutton} variant="outlined"  onClick={()=>setstatus("")}>All</Button></MenuItem>
                <MenuItem><Button className={classes.forbutton} variant="outlined" onClick={()=>setstatus("upcoming")}>Upcoming Launches</Button></MenuItem>
                <MenuItem><Button className={classes.forbutton} variant="outlined" onClick={()=>setstatus("success")}>Successful Launches</Button></MenuItem>
                <MenuItem><Button className={classes.forbutton} variant="outlined"  onClick={()=>setstatus("failed")}>Failed Launches</Button></MenuItem>
            </Select>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

