import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import * as All from '../navigation/constants';
import {useNavigate, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from ".././styles/header.module.css";
import { sxCompMagnifing, sxCompMagnifingMobile } from ".././styles/headerReactMUI"
import { StylesProvider } from "@material-ui/core/styles";
import ".././styles/muiTab.css"
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function dynamicProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    
  };
}

const dict_paths = {
  "/allCrypto/" : 0,
  "/analysis/": 1,
  "/scoring/": 2,
  "/": 0,
};


// Navbar is the exported component
const Navbar = ({titles}) => {
  // const classeStyles = useStyles();
  const history = useNavigate();

  const goTo = (path) => {
      path = path.split(":")[0] || path
      
      history.push(path || All.ROOT);
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let location = useLocation()
  location = location.pathname.split("?")[0] || location.pathname
  let curPath = dict_paths[location]
  useEffect(() => {
    
    if (curPath!== "/allCrypto") {
      setValue(dict_paths[location]);
    }
    }, [curPath, location]);

  const listOfTab = []
  titles.forEach((val, ind) => {
    listOfTab.push(<Tab label={val} {...dynamicProps(ind)} onClick={()=>goTo(All[val])}/>)
    }
  )

  return (
    <StylesProvider injectFirst>
    <div className={styles.containerParrent}>
        <div className={styles.iconMenu}>
          <IconButton  color="secondary" aria-label="List" component="span">
            <ListIcon/>
          </IconButton>
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
              <Button color="inherit">Login</Button>
          </div>
          <div className={styles.buttonDiv}>
              <Button color="inherit">Cart</Button>
          </div>
        </div>
    </div>
    </StylesProvider>
  );
}

export default Navbar;