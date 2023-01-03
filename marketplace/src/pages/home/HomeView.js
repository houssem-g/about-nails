// https://gitlab.com/saurabhshah231/reactjs-myapp/-/blob/master/src/App.js

import React from 'react'
import PropTypes from 'prop-types'
// import useAxios from '../../api/axiosCRUD';
import Navbar from '../../components/navbar';
// import { useState, useEffect } from 'react';
import Footer from "../../components/footer";
import products from "../../constants/allproducts";
import Product from "../../components/products"
const HomeView = props => {
    const styles = {
        containerHomeView: {
            display: "flex",
            flexDirection: "column"
        }
    };
    const allTitles = ["Accueil", "Nouveautés", "Collections", "Catalogue", "Gel Pads", "Avis clients", "FAQ"]


    return (
        <div style={styles.containerHomeView}>
            <Navbar titles={allTitles} />
            <div className='contentListNails'>
                <section className='listNails'>
                        {products.map((product, i) => {
                            return (
                                <Product key={i} product={product}/>
                            )
                        })}
                </section>
            </div>
            <Footer />
            
        </div>
    )
}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
