import React from "react";
import { products } from "../../src/products";
import ProductCard from "./ProductCard";

function ProductCardsDisplay() {
  return (
    <div className="row my-3">
      <ProductCard products={products} />
    </div>
  );
}

export default ProductCardsDisplay;
