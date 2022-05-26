

import {  Grid } from "@material-ui/core";
import styles from ".././styles/footer.module.css";
import Social from "./social";
import { socialGrid, infoGrid, joinGrid, spaceArround, footer } from "../styles/footerReactMUI";




const Footer = () => {

  return (
    <footer style={footer}>

      <Grid container direction="row" style = {spaceArround}>
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
          <div>

          </div>
        </Grid>
        <Grid item direction="column" style={socialGrid}>
          <Social />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;