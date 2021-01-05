import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup } from "react-bootstrap";
import brown_shoe from "../images/brown_shoe.PNG";

const ProductCard = ({ products }) => {
  return products.map((product) => (
    <div className="col-sm-3">
      <Card>
        <Card.Img variant="top" src={brown_shoe} />
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
