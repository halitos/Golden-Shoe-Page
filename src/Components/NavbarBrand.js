import React, { useContext } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
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
      <Navbar.Brand href="#home" className="d-flex pt-3 pb-1">
        <Link to="/">
          <div className="d-flex align-items-center flex-column">
            <img alt="" src={logo} width="auto" height="60" className="" />
            Golden Shoe
          </div>
        </Link>{" "}
      </Navbar.Brand>
      {/* <Nav className="w-100 d-flex justify-content-end">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#features">Products</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav> */}
      <Navbar.Brand className="ml-5 ">
        <RiShoppingCartLine /> <span className="counter">{amount ? 1 : 0}</span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarBrand;
