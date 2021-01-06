import React, { useState, useContext } from "react";
import brown_shoe from "../images/brown_shoe.PNG";
import SizeGuideModal from "./SizeGuideModal";
import AmountContext from "./Context";

const SingleProductDetail = () => {
  const { amount, setAmount } = useContext(AmountContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick() {
    !amount ? setAmount(true) : setAmount(false);
    console.log(amount);
  }

  return (
    <>
      <SizeGuideModal
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <div className="container d-flex my-5">
        <img src={brown_shoe} alt="sample shoe" className="w-75 h-50"></img>
        <div>
          <h3>Fab Brown Shoe</h3>
          <p>This is the sigle product details page to be worked on later...</p>
          <p>Select Size</p>
          <button className="btn btn-sm text-success" onClick={handleShow}>
            Size guide
          </button>
          <div className="container mt-2">
            <button className="size-select btn btn-sm border-danger m-3">
              7.5
            </button>
            <button className="size-select btn btn-sm border-danger m-3 ">
              8
            </button>
            <button className="size-select btn btn-sm border-danger m-3">
              8.5
            </button>
          </div>
          <div className="container mb-5">
            <button
              className={
                amount
                  ? "size-select btn btn-sm border-danger m-3"
                  : "size-select btn btn-sm border-success m-3 "
              }
            >
              9
            </button>
            <button className="size-select btn btn-sm border-danger m-3">
              9.5
            </button>
            <button className="size-select btn btn-sm border-danger m-3">
              10
            </button>
          </div>

          <button className="btn btn-dark" onClick={handleClick}>
            {!amount ? "Add to Basket" : "Remove"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
