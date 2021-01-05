import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
const FormArea = () => {
  return (
    <Form className="ml-2 p-3 w-25 bg-light">
      <Form inline>
        <Form.Label>Search for keywords</Form.Label>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Categories</Form.Label>
        <Form.Control as="select" type="text" placeholder="select">
          <option>Select</option>
          <option>Women</option>
          <option>Men</option>
          <option>Boys</option>
          <option>Girls</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label>Example multiple select</Form.Label>
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
