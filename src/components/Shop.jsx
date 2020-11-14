import React,{useState,useEffect} from 'react';
import Header from './Header';
import Header2 from './Header2';
import '../css/shop.css'
import '../css/ads.css';
import {Link } from 'react-router-dom';
import firebase from '../config/firebase';
import {AddItems} from '../components/ads'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));


function Shop(){
  
  const [products, setProducts]  = useState([]);
  useEffect(function(){
      getdata();
      },[]);

      function gotop(){
          window.scrollTo(0,0);
      }
      
  function getdata(){
      let dataList = [];
      firebase.database().ref('All_Ads').on('value',function(snapshot){ 
          snapshot.forEach(snap => {
          dataList.push(snap.val());
          }); 
          setProducts(dataList)
      });
  };

    const classes = useStyles();
    const [open1, setOpen1] = React.useState(true);
  
    const handleClick1 = () => {
      setOpen1(!open1);
    };
    const [open2, setOpen2] = React.useState(true);
  
    const handleClick2 = () => {
      setOpen2(!open2);
    };
    const [open3, setOpen3] = React.useState(true);
  
    const handleClick3 = () => {
      setOpen3(!open3);
    };

    return(
    <>
    <Header/>
    <Header2/>
    <div className="my_row">

    
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="flex-start"
  >

    <div className="breadcumbs_con">
        <ol>
            <li><Link to="/">Home</Link><span>/</span></li>
            <li><Link to="/shop">Shop</Link></li>
        </ol>
    </div>
    <br/>

    <Grid container justify="center" item xs={3}>
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      <h3 style={{color:"#002f34"}}>All Filters</h3>
      <hr/>
      <ListItem button onClick={handleClick1}>
        <ListItemText primary="All Categories" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="mobiles" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Vehicles" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Home appliances" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Electronics" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Mobiles" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Properties for sale" />
          </ListItem>
        </List>
      </Collapse>
      <hr/>
      <ListItem button onClick={handleClick2}>
        <ListItemText primary="All Locations" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Karachi" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Lahore" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Peshawar" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="Islamabad" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText secondary="others" />
          </ListItem>
        </List>
      </Collapse>
      <hr/>
      <ListItem button onClick={handleClick3}>
        <ListItemText primary="Price" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" >
    
        <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
>
          <Grid item xs={5}>
          <TextField
        id="filled-secondary"
        label="Min Price"
        variant="filled"
        color="primary"
      />
          </Grid>
          <Grid item xs={5}>
          <TextField
        id="filled-secondary"
        label="Max Price"
        variant="filled"
        color="success"
      />
      </Grid>
    </Grid>
      </List>
    </Collapse>
      <hr/>
      <ListItem button onClick={handleClick2}>
        <ListItemText primary="All Locations" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem  className={classes.nested}>
            <FormControlLabel control={<Checkbox name="new" />} label="New"/>
            </ListItem>
            <ListItem  className={classes.nested}>
            <FormControlLabel control={<Checkbox name="used" />}label="Used"/>
            </ListItem>
        </List>
      </Collapse>
      </List>
    </Grid>
    
    <Grid  item xs={9}>
      <Grid container
    direction="row"
    justify="space-evenly"
    alignItems="flex-start">

          {products.length ===0 ? <h3>Loading...</h3> :products.map((items,i)=>    
            // <Grid item sm={4} xs={6} >
                        <AddItems gotop={gotop}  key={i} plink={items.newAd.key} state={items.newAd.state}
                      title={items.newAd.title} price={items.newAd.price} img={items.newAd.img} postdate={items.newAd.postdate}
                      />
            // </Grid>
            )}  

    </Grid>
    </Grid>
    </Grid>
    </div>
    </>
    );
}

export default Shop;