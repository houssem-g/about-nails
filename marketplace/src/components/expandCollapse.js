import { Container } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import ".././styles/mobileFooter.css"
import Social from "./social";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// https://www.npmjs.com/package/react-collapsible
const ExpandCollapse = () => {
    const [displayIconLegal, setDisplayIconLegal] = useState("block");
    const [hideIconLegal, setHideIconLegal] = useState("none");
    const [displayIconInfo, setDisplayIconInfo] = useState("block");
    const [hideIconInfo, setHideIconInfo] = useState("none");
    const [displayIconJoin, setDisplayIconJoin] = useState("block");
    const [hideIconJoin, setHideIconJoin] = useState("none");
    const clpseOpenedLegal = () => {
        setDisplayIconLegal("none")
        setHideIconLegal("block")
    }
    const clpseOpenedInfo = () => {
        setDisplayIconInfo("none")
        setHideIconInfo("block")
    }
    const clpseOpenedJoin = () => {
        setDisplayIconJoin("none")
        setHideIconJoin("block")
    }
    const clpseClosedLegal = () => {
        setDisplayIconLegal("block")
        setHideIconLegal("none")
    }
    const clpseClosedInfo = () => {
        setDisplayIconInfo("block")
        setHideIconInfo("none")
    }
    const clpseClosedJoin = () => {
        setDisplayIconJoin("block")
        setHideIconJoin("none")
    }
return (
    <Container className='contentCollapse'>
        <div className='contentTitleClpseAndIcon'>
        
        <Collapsible className='clpse' trigger="LEGAL" onOpening={clpseOpenedLegal}  onClosing={clpseClosedLegal}>
            <ul className="noPoints">
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
        </Collapsible>
        <KeyboardArrowDownIcon className='iconClpseDown' style={{"display" : displayIconLegal}} />
        <KeyboardArrowUpIcon className='iconClpseUp' style={{"display" : hideIconLegal}}/>
        </div>
        <div className='contentTitleClpseAndIcon'>
            <Collapsible className='clpse' trigger="INFORMATIONS"  onOpening={clpseOpenedInfo}  onClosing={clpseClosedInfo}>
                <ul className="noPoints">
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
            </Collapsible>
            <KeyboardArrowDownIcon className='iconClpseDown' style={{"display" : displayIconInfo}} />
            <KeyboardArrowUpIcon className='iconClpseUp' style={{"display" : hideIconInfo}}/>
        </div>
        <div className='contentTitleClpseAndIcon'>
            <Collapsible className='clpse' trigger="REJOIGNEZ-NOUS"  onOpening={clpseOpenedJoin}  onClosing={clpseClosedJoin}>
                <p className='paragraphStyle'>Retrouvez-nous sur les réseaux sociaux, découvrez les dernières tendances et nouveauté</p>
            </Collapsible>
            <KeyboardArrowDownIcon className='iconClpseDown' style={{"display" : displayIconJoin}} />
            <KeyboardArrowUpIcon className='iconClpseUp' style={{"display" : hideIconJoin}}/>
        </div>
        <div className='socialMedia'>
        <Social/>
        </div>
    </Container>
    );
};

export default ExpandCollapse