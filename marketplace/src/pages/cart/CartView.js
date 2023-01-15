// https://gitlab.com/saurabhshah231/reactjs-myapp/-/blob/master/src/App.js

import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/navbar';
import Footer from "../../components/footer";
import Item from '../../components/cartItem';
import styles from "../../styles/cart/cart.module.css"

const CartView = props => {
    
    let items = localStorage.getItem("items_selected") 
    let res = []
    let obj = {}
    let initTotPrice = 0.0
    let initTotQte = 0
    if(items != undefined){
        items.split(";").forEach((el) => {
            obj = JSON.parse(el)
            obj = obj.qte ? {...obj} : {...obj, ...{qte: 1, totPrice: obj.price}}
            initTotPrice =  (parseFloat(initTotPrice) + parseFloat(obj.totPrice)).toFixed(2);
            initTotQte += parseInt(obj.qte);
            res.push(obj)
        })
    }

    const [displayBodyCart, setDisplayBodyCart] = res.length ? React.useState("CartPanierHeader") : React.useState("hide") 
    const [displayEmptyBodyCart, setDisplayEmptyBodyCart] = res.length ? React.useState("hide") : React.useState("classEmptyBodyCart") 
    let [resUpdated, setResUpdated] = React.useState(res)
    let [totPageQte, setTotPageQte] = React.useState(initTotQte)
    let [totPagePrice, setTotPagePrice] = React.useState(parseFloat(initTotPrice).toFixed(2))
    const [styleToDisplay, setStyleToDisplay] = React.useState("mobileItemDisplay")
    
    const getQteAndTotPrice = (id, qte) => {
        let cntElement = 0
        let sumElement = 0.0
        let updatedItem = ""
        resUpdated.forEach((el) => {
            if (el._id == id) {
                el.qte = qte
                el.totPrice = parseFloat(el.price * qte).toFixed(2);
            }
            if(updatedItem == "") {
                updatedItem += JSON.stringify(el)
            } else {
                updatedItem += ";" + JSON.stringify(el)
            }
            cntElement = parseInt(cntElement) + parseInt(el.qte)
            sumElement = (parseFloat(sumElement) + parseFloat(el.totPrice)).toFixed(2)
        })
        localStorage.setItem("items_selected", updatedItem)
        setTotPageQte(cntElement)
        setTotPagePrice(sumElement)
    }

    const updateItems = (new_items) => {
        res = []
        let cntElement = 0
        let sumElement = 0.0
        if(new_items == ""){
            localStorage.removeItem("items_selected")
            setDisplayEmptyBodyCart("classEmptyBodyCart")
            setDisplayBodyCart("hide")
            setResUpdated(res)
            setTotPageQte(0)
            setTotPagePrice(0.0)
            return
        }
        new_items.split(";").forEach((el) => {
            res.push(JSON.parse(el))
            cntElement = parseInt(cntElement) + parseInt(JSON.parse(el).qte)
            sumElement = (parseFloat(sumElement) + parseFloat(JSON.parse(el).totPrice)).toFixed(2)
        })
        setResUpdated(res)
        setTotPageQte(cntElement)
        setTotPagePrice(sumElement)
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth < 750) {
          setStyleToDisplay("mobileItemDisplay")
        }
        else {
          setStyleToDisplay("mobileItemHide")
        }
        
      });

    return (
        <div style={styles.containerHomeView}>
            <Navbar titles={["Accueil", "Nouveautés", "Collections", "Catalogue", "Gel Pads", "Avis clients", "FAQ"]} totalQuantity={totPageQte}/>
            <div className={styles.CartBodycontainer}>
                <div className={styles.CartAllItems}>
                    <div id="bodyCart" className={styles[displayBodyCart]}>
                        <h1>Votre Pannier</h1>
                        <span className={styles.CartPanierPrice}>Prix</span>
                        
                    </div>
                    <div id="emptyBodyCart" className={styles[displayEmptyBodyCart]}>
                        <h1>
                            Votre panier About nails est vide.
                        </h1>
                        <p>
                            Votre panier est à votre service. Donnez-lui un but : remplissez-le avec nos produits. <br></br>
                            Continuez les achats sur <a className={styles.linkToOurSite} href="http://localhost:3000">about-nails.com</a>
                        </p>
                    </div>
                    {resUpdated.map((item) => {
                        return (
                            <Item key={item._id} item={item} getQteAndTotPrice={getQteAndTotPrice} updateItems={updateItems}/>
                        )
                    })}
                    <div className={styles.CartPanierFooter}>
                        <span>Sous-total ({totPageQte} articles): <strong>{totPagePrice}€</strong></span>
                    </div>
                </div>
                <div className={styles.cartBodyRightContainer}>
                    <div className={styles.priceTopRight}>
                        Sous-total ({totPageQte} articles): <strong>{totPagePrice}€</strong>  
                    </div>
                    <div className={styles.priceBottomRight}>
                    
                    </div>

                    
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
