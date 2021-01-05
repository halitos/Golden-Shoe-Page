import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

function Footer() {
  return (
    <Jumbotron fluid className="mb-0">
      <Container>
        <h3>This wil be Footer</h3>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
