import React, { useContext } from "react";
import AmountContext from "./Context";

function SizeButtons({ handleShow }) {
  const { amount, setAmount } = useContext(AmountContext);

  function handleClick() {
    !amount ? setAmount(true) : setAmount(false);
    console.log(amount);
  }

  return (
    <div className="container single-sizebox">
      <h3>Fab Brown Shoe</h3>
      <p className="lead">£125</p>
      <p>
        Have a closer look at the diefferent pictures of product and use our
        Size Guide to help you pick the right size for you
      </p>
      <span className="lead mr-5">Select Size</span>
      <button className="btn btn-sm text-success ml-5" onClick={handleShow}>
        Size guide
      </button>
      <div className="container mt-2">
        <button className="size-select btn btn-sm border-danger m-3">
          7.5
        </button>
        <button className="size-select btn btn-sm border-danger m-3 ">8</button>
        <button className="size-select btn btn-sm border-danger m-3">
          8.5
        </button>
      </div>
      <div className="container mb-4">
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
        <button className="size-select btn btn-sm border-danger m-3">10</button>
      </div>
      <button className="btn btn-secondary add-btn" onClick={handleClick}>
        {!amount ? "Add to Basket" : "Remove"}
      </button>
    </div>
  );
}

export default SizeButtons;
