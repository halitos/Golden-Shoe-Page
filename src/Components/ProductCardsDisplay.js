import React from "react";
import ProductCard from "./ProductCard";
const products = require("../../src/products");

function ProductCardsDisplay() {
  return (
    <div className="row m-3">
      <ProductCard products={products} />
    </div>
  );
}

export default ProductCardsDisplay;
