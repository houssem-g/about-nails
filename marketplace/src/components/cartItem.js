import React from "react";

/* REACT-BOOTSTRAP */
import CardMedia from '@mui/material/CardMedia';
import styles from ".././styles/cart/cart.module.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


/* COMPONENTS */

function Item({ item }) {

    const [qte, setQte] = React.useState("");
    const [displayInput, setDisplayInput] = React.useState("hide")
    const [displaySelect, setDisplaySelect] = React.useState("nohide")

    const handleChange = (event) => {
        if(event.target.value == 10){
            setDisplayInput("nohide")
            setDisplaySelect("hide")
        }
        else{
           setDisplayInput("hide")
           setDisplaySelect("nohide")
           setQte(event.target.value); 
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
                <div>
                    <FormControl className={styles[displaySelect]} sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="select-small"> 
                            Qantité
                        </InputLabel>
                        <Select 
                            value={qte}
                            onChange={handleChange}
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
                    <TextField className={styles[displayInput]}>
                        {qte}
                    </TextField >
                    <p></p>
                </div>
            </div>
        </div>

    )
}

export default Item;