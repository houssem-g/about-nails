import React from 'react';
import '.././styles/side_bar/cartSideBar.css';
import { useState, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import QuantitySelect from "./quantitySelect";
import { useLocalStorage } from "../utils/localStorage"

function CartSidebar({ onTotalQuantityChange }) {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const [localStorageItems, setLocalStorageItems] = useLocalStorage("items_selected")

    useEffect(() => {
        const itemsString = localStorageItems;
        if (itemsString != null && itemsString) {
            const itemsArray = itemsString.split(';');
            let total = 0.0;
            const parsedItems = itemsArray.map((itemString) => {
                const item = JSON.parse(itemString);
                total += parseFloat(item.qte * item.price);
                return item;
            });
            setItems(parsedItems);
            setTotalPrice(total.toFixed(2));
        }
    }, [localStorageItems]);


    const updateQty = (item, newQty) => {
      const updatedItem = {...item, qte: newQty};
      const updatedItems = items.map((i) => (i === item ? updatedItem : i));
      setItems(updatedItems);
      setTotalPrice(updatedItems.reduce((acc, item) => acc + item.qte * item.price, 0).toFixed(2));
      const updatedItemsString = updatedItems
      .map((item) => JSON.stringify(item))
      .join(';');
      setLocalStorageItems(updatedItemsString);
      onTotalQuantityChange(updatedItems.reduce((acc, item) => acc + item.qte, 0));
      
  }
  
    
    const removeItem = (item) => {
      const updatedItems = items.filter((i) => i !== item);
      setItems(updatedItems);
      setTotalPrice(updatedItems.reduce((acc, item) => acc + parseFloat(item.totPrice), 0).toFixed(2));
      const updatedItemsString = updatedItems
        .map((item) => JSON.stringify(item))
        .join(';');
      setLocalStorageItems(updatedItemsString);
      onTotalQuantityChange(updatedItems.reduce((acc, item) => acc + item.qte, 0));
    }

    return (
        <div className="sidebar">
          <div className="sidebar-top">
            <div className="subtotal-text" style={{ fontFamily: 'Verdana' }}>Sous-total</div>
            <div className="total-price">{totalPrice}</div>
            <button className="checkout-btn" onClick={function() {window.location.href = "http://localhost:3000/cart";}}>Allez au panier</button>
          </div>
          <hr className="grey-line" />
          <div className="sidebar-items">
            {items.map((item) => (
              <React.Fragment key={item._id}>
                <div className="item">
                  {/* <img src={item.image} alt="item" className="item-img" /> */}
                  <CardMedia
                        style={{  height: "152px", width: "152px" }}
                        component="img"
                        src = {require (`../static/images/${item.image}`)}
                        key={item._id}
                    />
                    <div className="item-info">
                        <QuantitySelect key={item._id} item={item} updateQty={updateQty} />
                        <div onClick={() => removeItem(item)} className="icon-container">
                            <FontAwesomeIcon key={item._id} icon={faTrash} />
                        </div>
                    </div>

                </div>
                <hr className="grey-line" />
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }
    
export default CartSidebar;
    

    