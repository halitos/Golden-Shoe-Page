import "./App.css";
import CarouselBox from "./Components/CarouselBox";
import Footer from "./Components/Footer";
import NavbarBrand from "./Components/NavbarBrand";
import FormArea from "./Components/FormArea";
import ProductCardsDisplay from "./Components/ProductCardsDisplay";
import SingleProductDetail from "./Components/SingleProductDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarBrand />
      <Switch>
        <Route exact path="/">
          <div className="main">
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
    </>
  );
}

export default App;
