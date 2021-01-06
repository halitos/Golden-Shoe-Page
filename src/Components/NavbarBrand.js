import React, { useContext } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { RiShoppingCartLine } from "react-icons/ri";
import AmountContext from "./Context";

const NavbarBrand = () => {
  const { amount } = useContext(AmountContext);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      <Navbar.Brand href="#home" className="d-flex py-3">
        <Link to="/">
          <img
            alt=""
            src={logo}
            width="auto"
            height="50"
            className="d-inline-block align-top mr-5 rounded"
          />
        </Link>{" "}
        Golden Shoe
      </Navbar.Brand>
      <Nav className="w-100 d-flex justify-content-end">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">Products</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      <Navbar.Brand className="ml-5 ">
        <RiShoppingCartLine /> <span className="counter">{amount ? 1 : 0}</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarBrand;
