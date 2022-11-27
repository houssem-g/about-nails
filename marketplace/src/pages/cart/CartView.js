// https://gitlab.com/saurabhshah231/reactjs-myapp/-/blob/master/src/App.js

import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/navbar';
import Footer from "../../components/footer";
import Item from '../../components/cartItem';
import styles from "../../styles/cart/cart.module.css"
import CardMedia from '@mui/material/CardMedia';

const CartView = props => {

    let items = localStorage.getItem("items_selected").split(";")
    let res = []
    items.forEach((el) => {
        res.push(JSON.parse(el)) 
    })
    
    return (
        <div style={styles.containerHomeView}>
            <Navbar titles={["Accueil", "Nouveautés", "Collections", "Catalogue", "Gel Pads", "Avis clients", "FAQ"]} />
            
            <div className={styles.CartBodycontainer}>
                <div className={styles.CartAllItems}>
                    <div className={styles.CartPanierHeader}>
                        <h1>Votre Pannier</h1>
                        <p>selectionner tout les elements</p>
                        <span className={styles.CartPanierPrice}>Prix</span>
                    </div>
                    
                    {res.map((item) => {
                        return (
                            <Item item={item}/>
                        )
                    })}
                    
                </div>
                <div className={styles.cartBodyRightContainer}>
                    Sous-total
                </div>
            </div>
            <Footer />
        </div>
    )
}

CartView.propTypes = {
    title: PropTypes.string.isRequired
}

export default CartView
