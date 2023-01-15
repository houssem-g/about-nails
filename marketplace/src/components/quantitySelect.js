import React from 'react';
import { FormControl, Select, InputLabel, MenuItem, TextField, Button } from '@mui/material';
import  styles from '.././styles/cart/mui_quantitySelect.module.css';
import { useState, useEffect } from 'react';
import {sxSelectForm, sxInputField } from ".././styles/cart/muiThemeQteSelect"

function QuantitySelect({ item, updateQty }) {
  const [qte, setQte] = useState(item.qte);

  const handleChange = (event) => {
    setQte(parseInt(event.target.value));
    updateQty(item, event.target.value);
  };
    useEffect(()=> {
        setQte(item.qte)
    },[item])

  const idselect = "select-qte-cart-mobile";
  const displaySelect = qte < 10 ? "displayBlock" : "displayNone";
  const displayInput = qte >= 10 ? "displayBlock" : "displayNone";

  return (
    <div className={styles.quantitySelectContainer}>
        <div className={styles[displaySelect]}>
            <FormControl 
                id={idselect}
                sx = {sxSelectForm}
                size="small"
                value={qte}
            >
                <Select 
                    value={qte}
                    onChange={handleChange}
                    sx={{border: "none", height: "25px",}}
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
            <TextField sx={sxInputField} defaultValue={qte} onChange={handleChange}/>
        </div>
    </div>
);

}
export default QuantitySelect
