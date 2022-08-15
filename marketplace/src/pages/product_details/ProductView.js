import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/navbar';
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import products from "../../constants/allproducts";
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@material-ui/core';

const ProductView = props => {
    const styles = {
        containerHomeView: {
            display: "flex",
            flexDirection: "column"
        }
    };

    const { id } = useParams();
    const productDetail = products.filter((obj) => obj._id == id)[0]
    return (
        <div style={styles.containerHomeView}>
            <Navbar titles={["Accueil", "Nouveautés", "Collections", "Catalogue", "Gel Pads", "Avis clients", "FAQ"]} />
            <div className='mainContent'>
                <section className='productDescription'>
                    <div className='imageProduct'>
                        <h3>{productDetail.name}</h3>
                        
                        <CardMedia
                            style={{  height: "400px", maxWidth: "500px" }}
                            component="img"
                            src = {require (`../../static/images/${productDetail.image}`)}
                        />
                    </div>
                    <div className='descProduct'>
                        <h4>Description:</h4>
                        <p>{productDetail.description}</p>
                        <div className='buyProductChildDiv'>
                            <h4>Status:</h4>
                            <p>{productDetail.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
                        </div>
                
                        <div className='buyProductChildDiv'>
                            <h4>Price:</h4>
                            <p>{productDetail.price}€</p>  
                        </div>
                        <div className='contentBtnAddToCart'>
                            <Button variant="contained" className='addToCart'>Add To Cart</Button>
                            
                        </div>
                        </div>
                    {/* <div className='buyProduct'>
                        <div className='buyProductChildDiv'>
                            <h4>Price:</h4>
                            <p>{productDetail.price}€</p>
                        </div>
                        <div className='buyProductChildDiv'>
                            <h4>Status:</h4>
                            <p>{productDetail.countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
                        </div>
                        <div className='buyProductChildDiv'>
                            <Button variant="contained" className='addToCart'>Add To Cart</Button>
                            
                        </div>
                    </div> */}
                </section>

            </div>
            <Footer />
            
        </div>
    )
}

ProductView.propTypes = {
    title: PropTypes.string.isRequired
}

export default ProductView
