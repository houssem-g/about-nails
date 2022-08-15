import React from "react";

/* REACT-BOOTSTRAP */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import imageUrl  from ".././static/images"
/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */

function Product({ product }) {

    return (
        <Card className="card">
            <Link to={`/product/${product._id}`}>
                <CardMedia
                    style={{  height: "300px" }}
                    component="img"
                    src = {require (`.././static/images/${product.image}`)}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <strong>{product.name}</strong>
                </Typography>
                <Typography variant="h6" component="h6">
                    {product.price}€
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Product;
