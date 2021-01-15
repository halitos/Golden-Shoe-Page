import React, { useContext, useState } from "react";
import AmountContext from "./Context";

function SizeButtons({ handleShow }) {
  const { count, amount, setAmount, setCount } = useContext(AmountContext);
  const [select, setSelect] = useState(false);

  function incrData() {
    fetch("/prods/increment-amount", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({}),
    })
      .then(() => {
        fetch("/prods")
          .then((res) => res.json())
          .then((res) => {
            console.log(res[0].quantity);
            setAmount(res[0].quantity);
          });
      })
      .catch((e) => console.error(e));

    setCount(count - 1);
  }

  function decrData() {
    fetch("/prods/decr-amount", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then(() => {
        fetch("/prods")
          .then((res) => res.json())
          .then((res) => {
            console.log(res[0].quantity);
            setAmount(res[0].quantity);
          });
      })
      .catch((e) => console.error(e));

    setCount(count + 1);
  }

  function handleClick() {
    if (!select) {
      setSelect(true);
    } else {
      setSelect(false);
    }
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
          onClick={handleClick}
          className={
            select
              ? "size-select btn btn-sm btn-success m-3"
              : amount < 1
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
      <div className="container btn-box">
        <button
          className={
            amount < 1
              ? "btn btn-danger mx-2 add-btn"
              : "btn btn-secondary mx-2 add-btn"
          }
          onClick={decrData}
        >
          {amount > 0 ? "Add" : "Out of Stock"}
        </button>
        <button
          className={count < 1 ? "d-none" : "btn btn-secondary ml-3 add-btn"}
          onClick={incrData}
        >
          Remove
        </button>
      </div>
      {select && amount > 0 && (
        <p className="mx-auto my-3 text-info">
          {`Only ${amount} left in stock`}
        </p>
      )}
    </div>
  );
}

export default SizeButtons;
