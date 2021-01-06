import React from "react";
import { Modal, Button } from "react-bootstrap";
import sizeguide from "../images/sizeguide.PNG";

function SizeGuideModal({ show, handleClose, handleShow }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Size Guide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div>
            <img src={sizeguide} alt="size guide" className="w-100"></img>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SizeGuideModal;
