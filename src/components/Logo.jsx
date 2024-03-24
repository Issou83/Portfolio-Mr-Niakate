import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <span className="logo">
      <NavLink to="/">NKT</NavLink>
    </span>
  );
};

export default Logo;
