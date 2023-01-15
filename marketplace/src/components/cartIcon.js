import React, { useState, useEffect, useCallback } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLocalStorage } from "../utils/localStorage"
import ".././styles/cart/cart.css";

const CartIcon = ({ totalQuantity }) => {

    const [localStorageItems, setLocalStorageItems] = useLocalStorage("items_selected")
    const [numItems, setNumItems] = useState(totalQuantity);

    useEffect(() => {
        setNumItems(totalQuantity);
    }, [totalQuantity]);

    // this is for initialisation of number of items in cart
    useEffect(() => {
        let nb_article = 0
        if(localStorageItems != undefined && localStorageItems != ""){
            localStorageItems.split(";").forEach((el) => {
                nb_article += parseInt(JSON.parse(el).qte)
            })
        }
        setNumItems(nb_article);
    }, [localStorageItems]);

  return (
    <div className="cart-container">
      <FaShoppingCart size={30} color="#ffffff" />
      {numItems > 0 && (
        <div className="cart-num-container">
          <span className="cart-num">{numItems}</span>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
