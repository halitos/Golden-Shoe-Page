import React from "react";
import { Carousel } from "react-bootstrap";
import brown_shoe from "../images/brown_shoe.PNG";
import black_shoe from "../images/black_shoe.PNG";
import girls from "../images/girls.PNG";
import boys from "../images/boys.PNG";

function CarouselBox() {
  return (
    <Carousel className="carcontainer mx-auto my-3">
      <Carousel.Item interval={2000}>
        <img
          className="caro d-block w-100"
          src={brown_shoe}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="caro d-block w-100"
          src={black_shoe}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="caro d-block w-100" src={girls} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="caro d-block w-100" src={boys} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBox;
