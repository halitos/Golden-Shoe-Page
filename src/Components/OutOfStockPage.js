import React from "react";
import products from "../products";
import black_shoe from "../images/blackshoe.png";
import ReactImageMagnify from "react-image-magnify";

function OutOfStockPage() {
  return (
    <div className="container d-flex">
      {/* <img src={black_shoe} alt="black shoe" className="w-50"></img> */}
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "sample shoe",
            isFluidWidth: true,
            src: black_shoe,
          },
          largeImage: {
            src: black_shoe,
            width: 3000,
            height: 2000,
          },
          isHintEnabled: true,
          shouldHideHintAfterFirstActivation: false,
          enlargedImagePosition: "over",
        }}
      />

      <div className="mx-auto mt-2 p-3">
        <h2>{products[1].title}</h2>
        <p>{products[1].text}</p>
        <p className="lead text-danger">Out of Stock</p>
      </div>
    </div>
  );
}

export default OutOfStockPage;
