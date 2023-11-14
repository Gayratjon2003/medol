import React from "react";
import NavMenu from "./NavMenu";
import SaleNavbar from "./SaleNavbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <SaleNavbar />
      <NavMenu />
    </div>
  );
};

export default Navbar;
