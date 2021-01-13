import React from "react";
import ProductCard from "./ProductCard";
const products = require("../../src/products");

function ProductCardsDisplay({ prods }) {
  return (
    <div className="row m-3">
      <ProductCard prods={prods} products={products} />
    </div>
  );
}

export default ProductCardsDisplay;
