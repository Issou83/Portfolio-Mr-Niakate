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
    // <a href={currentProject.gitlink}  className="linkGit" target="_blank" rel="noopener noreferrer">
    // <span className='git'></span>
    // </a>
    <div className="social-network">
      <ul className="content">
        <a
          href="https://github.com/Issou83"
          taget="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <img className="linkGit" src={logogit} alt="Logo Github"></img>
          </li>
        </a>

        <a
          href="https://www.linkedin.com/in/issouma%C3%AFla-niakate-60333464/"
          taget="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <img className="linkGit" src={linkedin} alt="Logo Linkedin"></img>
          </li>
        </a>
        {/* <a href="https://www.twitter.com" 
                taget="_blank" 
                rel="noopener noreferrer" 
                className='hover'
                onMouseOver={anim}>
        <li>
            <i className='fab fa-twitter'></i>
        </li>
                </a> */}
        {/* <a href="https://www.instagram.com" 
                taget="_blank" rel="noopener noreferrer" 
                className='hover'
                onMouseOver={anim}>
        <li>
            <i className='fab fa-instagram'></i>
        </li>
                </a> */}
      </ul>
    </div>
  );
};

export default SocialNetwork;
