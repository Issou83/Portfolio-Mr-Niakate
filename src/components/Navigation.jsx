import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const projects = [
  ["Site vitrine pro", "/projet-1"],
  ["Location", "/projet-2"],
  ["E-commerce", "/projet-3"],
  ["SEO", "/projet-4"],
  ["Vitrine", "/projet-5"],
  ["Restauration", "/projet-6"],
  ["API & donnees", "/projet-7"],
];

const activeClass = (nav) => (nav.isActive ? "nav-active hover" : "hover");

const Navigation = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();
  const isProject = location.pathname.startsWith("/projet-");

  useEffect(() => {
    setProjectsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`navigation ${projectsOpen ? "projects-open" : ""}`}
      aria-label="Navigation principale"
    >
      <div className="nav-orbit" aria-hidden="true"></div>
      <ul className="nav-list">
        <li>
          <NavLink to="/" end className={activeClass}>
            <span>Accueil</span>
          </NavLink>
        </li>
        <li>
          <a className="hover" href="/#services">
            <span>Offres</span>
          </a>
        </li>
        <li className="nav-projects-item">
          <button
            type="button"
            className={`hover project-trigger ${isProject ? "nav-active" : ""}`}
            aria-expanded={projectsOpen}
            aria-controls="project-panel"
            onClick={() => setProjectsOpen((open) => !open)}
          >
            <span>Projets</span>
          </button>
          <ul className="nav-projects" id="project-panel" aria-label="Projets">
            {projects.map(([label, path]) => (
              <li key={path}>
                <NavLink to={path} className={activeClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <NavLink to="/contact" className={activeClass}>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
