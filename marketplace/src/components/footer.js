

import {  Grid } from "@material-ui";
import styles from ".././styles/footer.module.css";
import Social from "./social";
import { socialGrid, infoGrid, joinGrid, spaceArround, footer, hideGridOnMobile } from "../styles/footerReactMUI";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ExpandCollapse from "./expandCollapse"

const Footer = () => {
  const [styleToDisplay, setStyleToDisplay] = useState(spaceArround);

  
  window.addEventListener('resize', function(event) {
    if(window.innerWidth < 750) {
      setStyleToDisplay(hideGridOnMobile)
    }
    else {
      setStyleToDisplay(spaceArround)
    }
    
  });
  
  

  return (
    <footer style={footer}>
      <Grid container direction="row" style = { styleToDisplay }>
        <Grid item  direction="column">
          <div className={styles.titleLegal}>
            <p> LEGAL</p>
          </div>
          <div>
            <ul className={styles.noPoints}>
              <li>
                <a href="www.google.fr">Mentions Légal</a>
              </li>
              <li>
                <a href="www.google.fr">Conditions générales de ventes et d'utilisation</a>
              </li>
              <li>
                <a href="www.google.fr">Politique de confidentialité</a>
              </li>
              <li>
                <a href="www.google.fr">Politique de retour et de remboursement</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item direction="column" style={infoGrid}>
          <div className={styles.titleInfo}>
            <p> INFORMATIONS</p>
          </div>
          <div>
            <ul className={styles.noPoints}>
              <li>
                <a href="www.google.fr">Notre concept</a>
              </li>
              <li>
                <a href="www.google.fr">Nos collections</a>
              </li>
              <li>
                <a href="www.google.fr">Avis Clients</a>
              </li>
              <li>
                <a href="www.google.fr">Suivre ma commande</a>
              </li>
              <li>
                <a href="www.google.fr">Nous contacter</a>
              </li>
              <li>
                <a href="www.google.fr">Devenir Ambassadrice</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item direction="column" style = {joinGrid}>
          <div className={styles.titleJoinUs}>
            <p> REJOIGNEZ-NOUS</p>
          </div>
          <div className={styles.bodyJoinUs}>
            <p> Retrouvez-nous sur les réseaux sociaux, découvrez les dernières tendances et nouveautés </p>
          </div>
        </Grid>
        <Grid item direction="column" style={socialGrid}>
          <Social />
        </Grid>
      </Grid>
      <ExpandCollapse  />

    </footer>
  );
};

export default Footer;