import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import brown_shoe from "../images/brown_shoe.PNG";
import shoe_1 from "../images/shoe_1.jpg";
import shoe_2 from "../images/shoe_2.jpg";
import shoe_3 from "../images/shoe_3.jpg";
import shoe_4 from "../images/shoe_4.jpg";
import shoe_big from "../images/shoe_big.jpg";
import SizeButtons from "./SizeButtons";
import SizeGuideModal from "./SizeGuideModal";

const SingleProductDetail = () => {
  const [show, setShow] = useState(false);
  const shoeImgSrcs = [shoe_1, shoe_2, shoe_3, shoe_4];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SizeGuideModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <div className="row my-5 mx-2">
        <div className="col-lg-7 col-sm-12 mb-3">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "sample shoe",
                isFluidWidth: true,
                src: brown_shoe,
              },
              largeImage: {
                src: shoe_big,
                width: 3000,
                height: 2000,
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              enlargedImagePosition: "over",
            }}
          />
          <div className="sml-img-box d-flex p-1 ">
            <img
              src={shoeImgSrcs[0]}
              alt="sample shoe"
              className="w-25 border border-secondary rounded "
            ></img>
            <img
              src={shoeImgSrcs[1]}
              alt="sample shoe"
              className="w-25 border border-secondary rounded mx-1"
            ></img>
            <img
              src={shoeImgSrcs[2]}
              alt="sample shoe"
              className="w-25 border border-secondary rounded"
            ></img>
            <img
              src={shoeImgSrcs[3]}
              alt="sample shoe"
              className="w-25 border border-secondary rounded mx-1"
            ></img>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <SizeButtons handleShow={handleShow} />
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
