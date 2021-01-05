import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { RiShoppingCartLine } from "react-icons/ri";

const NavbarBrand = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      <Navbar.Brand href="#home" className="d-flex p-3">
        <Link to="/">
          <img
            alt=""
            src={logo}
            width="auto"
            height="50"
            className="d-inline-block align-top mr-5 rounded"
          />
        </Link>{" "}
        <h2>Golden Shoe</h2>
      </Navbar.Brand>
      <Nav className="d-flex justify-content-center p-3">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">Products</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
        <Navbar.Brand className="ml-5 ">
          <RiShoppingCartLine /> <span className="counter">0</span>
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
};

export default NavbarBrand;
