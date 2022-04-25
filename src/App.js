import React from "react";
//import { Router } from "react-router";
import Hero from "./components/Hero/index";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle} from "./globalStyles";
import {productData, productDataTwo} from "./components/Products/data";
import Products from "./components/Products";
import Feature from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading="Choose your favorite" data={productData}/>
      <Feature/>
      <Products heading="Sweet Treat For You" data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
