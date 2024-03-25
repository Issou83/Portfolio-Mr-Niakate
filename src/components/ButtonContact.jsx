import React from "react";
import { NavLink } from "react-router-dom";

const ButtonContact = () => {
  return (
    <div className="buttonContact">
      <NavLink
        to="/contact"
        className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
      >
        Un projet ?...
        <br />
        Contactez-moi.
      </NavLink>
    </div>
  );
};

export default ButtonContact;
