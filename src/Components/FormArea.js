import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
const FormArea = () => {
  return (
    <Form className="mt-3 p-2 col-lg-3 col-md-8 col-sm-10 mx-auto bg-light">
      <Form inline>
        <Form.Label className="my-3">Search for keywords</Form.Label>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label className="my-3">Categories</Form.Label>
        <Form.Control as="select" type="text" placeholder="select">
          <option>Select</option>
          <option>Women</option>
          <option>Men</option>
          <option>Boys</option>
          <option>Girls</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Multiple select</Form.Label>
        <Form.Control as="select" multiple>
          <option></option>
          <option>Women</option>
          <option>Men</option>
          <option>Boys</option>
          <option>Girls</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default FormArea;
