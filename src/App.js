import "./App.css";
import CarouselBox from "./Components/CarouselBox";
import Footer from "./Components/Footer";
import NavbarBrand from "./Components/NavbarBrand";
import FormArea from "./Components/FormArea";
import ProductCardsDisplay from "./Components/ProductCardsDisplay";

function App() {
  return (
    <>
      <NavbarBrand />
      <div className="main">
        <FormArea />
        <CarouselBox />
      </div>
      <ProductCardsDisplay />
      <Footer />
    </>
  );
}

export default App;
