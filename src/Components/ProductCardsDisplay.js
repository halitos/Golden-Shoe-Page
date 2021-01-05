import React from "react";
import { products } from "../../src/products";
import ProductCard from "./ProductCard";

function ProductCardsDisplay() {
  return (
    <div className="row">
      <ProductCard products={products} />
    </div>
  );
}

export default ProductCardsDisplay;
