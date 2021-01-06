import React, { useState } from "react";
import brown_shoe from "../images/brown_shoe.PNG";
import sizeguide from "../images/sizeguide.PNG";
import SlidingPanel from "react-sliding-side-panel";

const SingleProductDetail = () => {
  const [openPanel, setOpenPanel] = useState(false);

  return (
    <>
      <SlidingPanel type={"right"} isOpen={openPanel} size={40}>
        <div>
          <div>
            <img src={sizeguide} alt="size guide"></img>
          </div>
          <button
            className="btn text-white bg-secondary"
            onClick={() => setOpenPanel(false)}
          >
            X
          </button>
        </div>
      </SlidingPanel>
      <div className="container d-flex my-5">
        <img src={brown_shoe} alt="sample shoe" className="w-75 h-50"></img>
        <div>
          <h3>Fab Brown Shoe</h3>
          <p>This is the sigle product details page to be worked on later...</p>
          <div className="container">
            <button className="size-select btn btn-sm border-danger m-2">
              7.5
            </button>
            <button className="size-select btn btn-sm border-danger m-2 ">
              8
            </button>
            <button className="size-select btn btn-sm border-danger m-2">
              8.5
            </button>
          </div>
          <div className="container">
            <button className="size-select btn btn-sm border-success m-2 ">
              9
            </button>
            <button className="size-select btn btn-sm border-danger m-2">
              9.5
            </button>
            <button className="size-select btn btn-sm border-danger m-2">
              10
            </button>
          </div>
          <button
            className="btn btn-sm text-success"
            onClick={() => setOpenPanel(true)}
          >
            Size guide
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetail;
