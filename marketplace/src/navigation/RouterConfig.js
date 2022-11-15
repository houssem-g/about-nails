import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Analyse  from "../pages/analysis"; 
import Product  from "../pages/product_details";
import { ROOT, Cryptomonnaies, Analysis, Scoring, ProductDetail, CART } from "./constants";
// import { dark, light } from "../styles/muiTheme";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={ROOT} element={<Home/>} />
        <Route exact path={Cryptomonnaies} element={<Home/>} />
        <Route exact path={Analysis} element={<Analyse/>} />
        <Route exact path={Scoring} element={<Analyse/>} />
        <Route exact path={ProductDetail} element={<Product/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<Home/>} />
        {/* <Route exact path={PAGE1} element={<Page1/>} /> */}

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}

      </Routes>
    </div>
  );
};
