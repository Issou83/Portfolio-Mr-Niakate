import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀Site pour Transtporteur</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀Locations de Logements</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀E-commerce</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀Référencement et SEO</li>
            </NavLink>
            <NavLink
              to="/projet-5"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀Site vitrine</li>
            </NavLink>
            <NavLink
              to="/projet-6"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀Site pour la réstauration</li>
            </NavLink>
            <NavLink
              to="/projet-7"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>🚀API et base de données</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
