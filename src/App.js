import React, { useState } from "react";
import "./App.css";
import CarouselBox from "./Components/CarouselBox";
import Footer from "./Components/Footer";
import NavbarBrand from "./Components/NavbarBrand";
import FormArea from "./Components/FormArea";
import ProductCardsDisplay from "./Components/ProductCardsDisplay";
import SingleProductDetail from "./Components/SingleProductDetail";
import { Route, Switch } from "react-router-dom";
import AmountContext from "./Components/Context";

function App() {
  const [amount, setAmount] = useState(false);
  const value = { amount, setAmount };
  return (
    <>
      <AmountContext.Provider value={value}>
        <NavbarBrand />
        <Switch>
          <Route exact path="/">
            <div className="main row ml-3">
              <FormArea />
              <CarouselBox />
            </div>
            <ProductCardsDisplay />
          </Route>
          <Route path="/details">
            <SingleProductDetail />
          </Route>
        </Switch>
        <Footer />
      </AmountContext.Provider>
    </>
  );
}

export default App;
