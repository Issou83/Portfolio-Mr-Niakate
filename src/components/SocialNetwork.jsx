import React from "react";
import logogit from "../assets/fonts/img/github.png";
import linkedin from "../assets/fonts/img/linkedin.png";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content" aria-label="Liens sociaux">
        <li>
          <a
            href="https://github.com/Issou83"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
            onMouseOver={anim}
            aria-label="Profil Github de NKT.DevWeb"
          >
            <img className="linkGit" src={logogit} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/issouma%C3%AFla-niakate-60333464/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
            onMouseOver={anim}
            aria-label="Profil LinkedIn de NKT.DevWeb"
          >
            <img className="linkGit" src={linkedin} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetwork;
