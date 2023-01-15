import React from 'react';
import { Tabs, Tab, Dialog, TextField, DialogContent, DialogContentText, DialogTitle, DialogActions, Button } from '@mui/material';
import * as All from '../navigation/constants';
import {useNavigate, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from ".././styles/header.module.css";
import { sxCompMagnifing, sxCompMagnifingMobile } from ".././styles/headerReactMUI"
import { StylesProvider } from "@mui/styles";
import ".././styles/muiTab.css"
import {IconButton} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import BasicMenu from "./select"
import SignUp from './signup';
import SignIn from './signin';
import CartIcon from './cartIcon'
import { FaSignInAlt } from 'react-icons/fa';

function dynamicProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    
  };
}

const dict_paths = {
  "/": 0,
  "/Accueil/" : 0,
  "/Nouveautés/": 1,
  "/Collections/": 2,
  "/Catalogue/" : 3,
  "/Gelpads/" : 4,
  "/Avisclients/" : 5,
  "/Faq/" : 6,
};


const Navbar = ({titles, totalQuantity}) => {
  let history = useNavigate();

  const goTo = (path) => {
    path = path.split(":")[0] || path
      history(path || All.ROOT);
  }

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let location = useLocation()
  location = location.pathname.split("?")[0] || location.pathname
  let curPath = dict_paths[location]
  
  useEffect(() => {
    
    if (Object.keys(dict_paths).includes(location)) {
      setValue(dict_paths[location]);
    }
    else {
      setValue(false)
    }
    }, [curPath, location]);


  const listOfTab = []
  titles.forEach((val, ind) => {
    listOfTab.push(<Tab sx={{opacity:1, fontFamily: "Verdana"}} key = {val} label={val} {...dynamicProps(ind)} onClick={()=>goTo(All[val])}/>)
    }
  )
  const handleOpen = () => setOpenSignin(true);
  const handleCloseSignUp = () => {
    setOpen(false);
  };
  const handleCloseSignIn = () => {
    setOpenSignin(false);
  };
  const switchSigninSignup = (val) => {
    if (val === "openSignin"){
      setOpen(false)
      setOpenSignin(true)
    }
    else if (val === "openSignup") {
      setOpenSignin(false)
      setOpen(true)
    }
  }

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
          <Tabs className={styles.titlesBar} value={value} onChange={handleChange} aria-label="simple tabs example" textColor="inherit" >
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
            
              <Button sx={{display:"flex", flexDirection: "column"}} color="inherit" onClick={handleOpen}>
                <FaSignInAlt style={{  marginBottom: "6px"}} size={30} color='white' />
                Login
              </Button>

              <Dialog onClose={handleCloseSignUp} open={open}>
                <SignUp switcherProp = {val => switchSigninSignup(val)}/>
              </Dialog>

              <Dialog onClose={handleCloseSignIn} open ={openSignin}>
                <SignIn switcherProp = {val => switchSigninSignup(val)} />
              </Dialog>
          </div>
          <div className={styles.buttonDiv}>
              <Button sx={{display: "block"}} color="inherit" onClick={()=>goTo(All["Cart"])}>
                <CartIcon totalQuantity={totalQuantity} />
                Panier
              </Button>
          </div>
        </div>

        
      </div>
      
    </StylesProvider>
  );
}

export default Navbar;