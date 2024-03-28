import React from "react";
import { NavLink } from "react-router-dom";

const ButtonContact = () => {
  return (
    <NavLink
      to="/contact"
      className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
    >
      <div className="buttonContact"></div>
    </NavLink>
  );
};

export default ButtonContact;
