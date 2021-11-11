import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />
    </div>
  );
};

export default Header;
