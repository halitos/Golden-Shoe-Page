import React, { useState, useEffect } from "react";
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
  const [amount, setAmount] = useState();
  const [count, setCount] = useState(0);
  const value = { amount, setAmount, count, setCount };

  useEffect(() => {
    fetch("/prods")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAmount(res[0].quantity);
      });
  });

  return (
    <>
      <AmountContext.Provider value={value}>
        <NavbarBrand />
        {/* {prods !== undefined ? <div>{prods.products[0].title}</div> : "nothing"} */}
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
