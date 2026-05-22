import React from "react";
import { NavLink } from "react-router-dom";

const ButtonContact = () => {
  return (
    <NavLink
      to="/contact"
      className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
      aria-label="Demander un devis ou contacter NKT.DevWeb"
    >
      <div className="buttonContact">Demander un devis</div>
    </NavLink>
  );
};

export default ButtonContact;
