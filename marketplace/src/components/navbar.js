import React from 'react';
import Tabs from '@material-ui/Tabs';
import Tab from '@material-ui/Tab';
import { Modal, Button } from '@mui/material';
import * as All from '../navigation/constants';
import {useNavigate, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from ".././styles/header.module.css";
import { sxCompMagnifing, sxCompMagnifingMobile } from ".././styles/headerReactMUI"
import { StylesProvider } from "@material-ui/styles";
import ".././styles/muiTab.css"
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import BasicMenu from "./select"

function dynamicProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    
  };
}

const dict_paths = {
  "/Accueil/" : 0,
  "/analysis/": 1,
  "/scoring/": 2,
  "/": 0,
};


// Navbar is the exported component
const Navbar = ({titles}) => {
  // const classeStyles = useStyles();
  let history = useNavigate();

  const goTo = (path) => {
    path = path.split(":")[0] || path
      history(path || All.ROOT);
  }

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let location = useLocation()
  location = location.pathname.split("?")[0] || location.pathname
  let curPath = dict_paths[location]
  useEffect(() => {
    
    if (curPath!== "/accueil") {
      setValue(dict_paths[location]);
    }
    }, [curPath, location]);

  const listOfTab = []
  titles.forEach((val, ind) => {
    listOfTab.push(<Tab label={val} {...dynamicProps(ind)} onClick={()=>goTo(All[val])}/>)
    }
  )
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <StylesProvider injectFirst>
    <div className={styles.containerParrent}>
        <div className={styles.iconMenu}>
          {/* <IconButton  color="secondary" aria-label="List" component="span">
            <ListIcon/> */}
            <BasicMenu titles={["Accueil", "Nouveautés", "Collections", "Catalogue", "Gel Pads", "Avis clients", "FAQ"]}/>
          {/* </IconButton> */}
        </div>
        <div className={styles.magnifingGlass}>
          <a href="http://localhost:3000/#" ><SearchIcon sx={sxCompMagnifing}/></a>

        </div>

        <div className={styles.contentTitleBar}>
          <h2 className={styles.logo}>About Nails</h2>
          <Tabs className={styles.titlesBar} value={value} onChange={handleChange} aria-label="simple tabs example" textColor="none" >
          {listOfTab}
          </Tabs>
        </div>

        <div className={styles.mobileMagnifingGlass}>
          <a href="http://localhost:3000/#" ><SearchIcon sx={sxCompMagnifingMobile}/></a>

        </div>
        <div className={styles.buttonParentDiv}>
          <div className={styles.iconLogin}>
            <IconButton  color="secondary" aria-label="List" component="span">
              <AccountCircleIcon/>
            </IconButton>
          </div>
          <div className={styles.iconCart}>
            <IconButton  color="secondary" aria-label="List" component="span">
              <ShoppingCart/>
            </IconButton>
          </div>

          <div className={styles.buttonDiv}>
              <Button color="inherit" onClick={handleOpen}>Login</Button>
          </div>
          <div className={styles.buttonDiv}>
              <Button color="inherit">Cart</Button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        > Hello world
          {/* <LogIn
          onClose={handleClose}
          isNewUser = {false}
          /> */}
        </Modal>

      </div>
    </StylesProvider>
  );
}

export default Navbar;