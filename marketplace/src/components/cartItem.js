import React from "react";

/* REACT-BOOTSTRAP */
import CardMedia from '@mui/material/CardMedia';
import styles from ".././styles/cart/cart.module.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { sxSelectForm, sxInputLabel, sxInputField, sxButtonUpdate } from ".././styles/muiTheme"
import Button from '@mui/material/Button';
import { useState } from "react";

/* COMPONENTS */

function Item({ item, getQteAndTotPrice, updateItems }) {

    const [qte, setQte] = useState(1);
    const [displayInput, setDisplayInput] = useState("hide")
    const [displaySelect, setDisplaySelect] = useState("nohide")
    const idselect = `idselect-${item._id}`
    React.useEffect(()=> {
        if(item.qte < 10){
            setDisplayInput("hide")
            setDisplaySelect("nohide")    
        } else {
            setDisplayInput("nohide")
            setDisplaySelect("hide")
        }
        setQte(item.qte)
    }, [item])
    const updateQte = () => {
        
        if(parseInt(qte) < 10){
            setDisplayInput("hide")
            setDisplaySelect("nohide")
        }
        getQteAndTotPrice(item._id, qte)
    }
    const inputChange = (event) => {

        let entered_value = parseInt(event.target.value)
        if (parseInt(entered_value) > 0) {
            setQte(entered_value)
        }
    }
    const applyDeleteItem = (event) => {
        event.preventDefault()
        let updatedItem = ""
        let listItemsInStorage = localStorage.getItem("items_selected").split(";")
        listItemsInStorage.forEach((el) => {

            if((parseInt(JSON.parse(el)._id) != parseInt(item._id)) && updatedItem != ""){
                updatedItem += ";" + el
            }
            else if((parseInt(JSON.parse(el)._id) != parseInt(item._id)) && updatedItem == ""){
                updatedItem += el
            }
        })

        localStorage.setItem("items_selected", updatedItem)
        updateItems(updatedItem)
    }
    const handleChange = (event) => {
        
        let selected_value = parseInt(event.target.dataset.value)
        let updatedItem = ""
        let listItemsInStorage = localStorage.getItem("items_selected").split(";")
        listItemsInStorage.forEach((el, i ) => {
            let dataUpdated
            if (i == 0) {
                if (parseInt(JSON.parse(el)._id) == parseInt(item._id)) {
                    dataUpdated = JSON.parse(el)
                    dataUpdated.qte = selected_value
                    dataUpdated.totPrice = selected_value * dataUpdated.price
                    updatedItem += JSON.stringify(dataUpdated)
                } else {
                    updatedItem += el
                }
                
            } else {
                if (parseInt(JSON.parse(el)._id) == parseInt(item._id)) { 
                    dataUpdated = JSON.parse(el)
                    dataUpdated.qte = selected_value
                    dataUpdated.totPrice = selected_value * dataUpdated.price
                    updatedItem += ";" + JSON.stringify(dataUpdated)
                } else {
                    updatedItem += ";" + el
                } 
            }
        })
        localStorage.setItem("items_selected", updatedItem)

        getQteAndTotPrice(item._id, selected_value)
        if(selected_value < 10){
           setDisplayInput("hide")
           setDisplaySelect("nohide")
           setQte(selected_value);             
        }
        else{
            setDisplayInput("nohide")
            setDisplaySelect("hide")
            setQte(10);
        }
      };


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
                <div className={styles.cartQteContent}>
                    <div className={styles[displaySelect]}>
                        <FormControl 
                            id={idselect}
                            sx = {sxSelectForm}
                            size="small"
                            value={qte}
                        >
                            <div>
                                <InputLabel sx = {sxInputLabel}>Qté : </InputLabel>   
                            </div>
                               
                            <Select 
                                value={qte}
                                onClick={handleChange}
                                sx={{border: "none"}}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>+10</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={styles[displayInput]}>
                        <TextField sx={sxInputField} defaultValue={10} onChange={inputChange}/>
                        <Button sx={sxButtonUpdate} onClick={updateQte}>mettre à jour</Button>
                    </div>
                    <span className={styles.separatorLine}></span>
                    
                    <div className={styles.deleteItemContent}>
                        <a href="" className={styles.deleteItem} onClick={applyDeleteItem}>
                            supprimer
                        </a>                        
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default Item;