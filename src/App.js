import "./App.css";
import CarouselBox from "./Components/CarouselBox";
import Footer from "./Components/Footer";
import NavbarBrand from "./Components/NavbarBrand";
import FormArea from "./Components/FormArea";

function App() {
  return (
    <>
      <NavbarBrand />
      <div className="main">
        <FormArea />
        <CarouselBox />
      </div>
      <Footer />
    </>
  );
}

export default App;
