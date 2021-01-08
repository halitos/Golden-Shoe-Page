import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup } from "react-bootstrap";
import brown_shoe from "../images/brown_shoe.PNG";
import black_shoe from "../images/black_shoe.PNG";
import girls from "../images/girls.PNG";
import boys from "../images/boys.PNG";

const ProductCard = ({ products }) => {
  const imgSrcs = [brown_shoe, black_shoe, girls, boys];

  return products.map((product, index) => (
    <div className="col-lg-3 col-md-6 col-sm-10 my-3 mx-auto d-flex align-items-stretch">
      <Card>
        <Card.Img variant="top" src={imgSrcs[index]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.text}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item className="float-right">
              {product.price}
            </ListGroup.Item>
          </ListGroup>
          <Link to="/details">
            {product.availability ? (
              <Button variant="dark">See Details</Button>
            ) : (
              <div className="text-danger ">Out of stock</div>
            )}
          </Link>
        </Card.Body>
      </Card>
    </div>
  ));
};

export default ProductCard;
