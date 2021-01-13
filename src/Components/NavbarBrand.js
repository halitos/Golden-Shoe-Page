import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiSonicShoes } from "react-icons/gi";
import AmountContext from "./Context";

const NavbarBrand = () => {
  const { amount } = useContext(AmountContext);
  const [count, setCount] = useState("");

  useEffect(() => {
    fetch("/prods")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCount(`Amount = ${res[0].quantity}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="d-flex justify-content-between px-5"
    >
      <Navbar.Brand href="#home" className="d-flex pt-3 pb-1">
        <Link to="/">
          <div className="d-flex align-items-center flex-column">
            {/* <img alt="" src={logo} width="auto" height="60" className="" /> */}
            <GiSonicShoes className="logo" />
            Golden Shoe
          </div>
        </Link>{" "}
      </Navbar.Brand>
      <Navbar.Brand className="ml-5 ">
        <RiShoppingCartLine />{" "}
        <span className="counter">
          {amount ? 1 : 0}
          {count}
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavbarBrand;
