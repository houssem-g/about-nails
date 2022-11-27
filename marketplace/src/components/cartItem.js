import React from "react";

/* REACT-BOOTSTRAP */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from ".././styles/cart/cart.module.css"

import { Link } from "react-router-dom";

/* COMPONENTS */

function Item({ item }) {

    console.log("item : ", item)
    return (
        <div className={styles.cartBodyLeftContainer}>
            <div className={styles.cartBodyLeft}>
                <CardMedia
                    style={{  height: "230px" }}
                    component="img"
                    src = {require (`../static/images/${item.image}`)}
                />
            </div>
            <div className={styles.cartBodyRight}>
                <div className={styles.cartBodyPriceLeft}>{item.price}€</div>
                <div className={styles.cartBodyTitle}>{item.name}</div>
                <div className={styles.cartBodyDesc}><p>{item.description}</p></div>
            </div>
        </div>

    )
}

export default Item;