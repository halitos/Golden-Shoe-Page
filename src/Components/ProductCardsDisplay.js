import React from "react";
import { products } from "../../src/products";
import ProductCard from "./ProductCard";

function ProductCardsDisplay() {
  return (
    <div className="row m-3 ">
      <ProductCard products={products} />
    </div>
  );
}

export default ProductCardsDisplay;
