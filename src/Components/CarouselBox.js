import React from "react";
import { Carousel } from "react-bootstrap";
import brown_shoe from "../images/brown_shoe.PNG";

function CarouselBox() {
  return (
    <Carousel className="carcontainer mx-auto my-3">
      <Carousel.Item>
        <img
          className="caro d-block w-100"
          src={brown_shoe}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro d-block w-100"
          src={brown_shoe}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="caro d-block w-100"
          src={brown_shoe}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBox;
