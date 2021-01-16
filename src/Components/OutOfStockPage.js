import React from "react";
import products from "../products";
import ReactImageMagnify from "react-image-magnify";
import brown_shoe from "../images/brown_shoe.PNG";
import black_shoe from "../images/blackshoe.png";
import girls from "../images/girls.PNG";
import boys from "../images/boys.PNG";

function OutOfStockPage({ imgSrc }) {
  const imgSrcs = [brown_shoe, black_shoe, girls, boys];

  return (
    <div className="container d-flex">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "sample shoe",
            isFluidWidth: true,
            src: imgSrcs[imgSrc],
          },
          largeImage: {
            src: imgSrcs[imgSrc],
            width: 3000,
            height: 2000,
          },
          isHintEnabled: true,
          shouldHideHintAfterFirstActivation: false,
          enlargedImagePosition: "over",
        }}
      />

      <div className="mx-auto mt-2 p-3">
        <h2>{products[imgSrc].title}</h2>
        <p>{products[imgSrc].text}</p>
        <p className="lead text-danger">Out of Stock</p>
      </div>
    </div>
  );
}

export default OutOfStockPage;
