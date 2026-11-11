import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const projects = [
  ["Site vitrine pro", "/projet-1"],
  ["Location", "/projet-2"],
  ["E-commerce", "/projet-3"],
  ["SEO", "/projet-4"],
  ["Vitrine", "/projet-5"],
  ["Restauration", "/projet-6"],
  ["API & données", "/projet-7"],
];

const activeClass = (nav) => (nav.isActive ? "nav-active hover" : "hover");

const Navigation = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  useEffect(() => {
    const closeOutside = (event) => { if (!navRef.current?.contains(event.target)) setProjectsOpen(false); };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  const isProject = location.pathname.startsWith("/projet-");

  useEffect(() => {
    setProjectsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProjectsOpen(false); }}
      onKeyDown={(event) => { if (event.key === "Escape") setProjectsOpen(false); }}
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
          <ul hidden={!projectsOpen} className="nav-projects" id="project-panel" aria-label="Projets">
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
