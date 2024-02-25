import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import Html from "../assets/fonts/img/HTML5_logo.svg";
import Css from "../assets/fonts/img/CSS3.svg";
import Js from "../assets/fonts/img/JavaScript_logo.svg";
import Sass from "../assets/fonts/img/Sass_Logo.svg";
import ReacT from "../assets/fonts/img/React-icon.svg";
import Node from "../assets/fonts/img/Node.js_logo.svg";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="homeContainer">
      <Mouse />
      <div className="home">
        <Navigation />
        <div className="myLogo">
          <Logo />
        </div>

        <div className="logos">
          <img src={Html} alt="logo html" className="logoTechnos" />
          <img src={Css} alt="Logo css" className="logoTechnos" />
          <img src={Sass} alt="logo sass" className="logoTechnos" />
          <img src={Js} alt="Logo Javascript" className="logoTechnos" />
          <img src={ReacT} alt="Logo react" className="logoTechnos" />
          <img src={Node} alt="Logo Node.js" className="logoTechnos" />
        </div>
        <SocialNetwork />

        <div className="home-main">
          <div className="blockTitle glow">
            <div className="main-content">
              <motion.h2
                drag
                onDragEnd
                dragConstraints={{
                  left: -250,
                  right: 950,
                  top: -200,
                  bottom: 250,
                }}
              >
                NKT.WebDev
              </motion.h2>
              <motion.h3
                drag
                onDragEnd
                dragConstraints={{
                  left: -250,
                  right: 950,
                  top: -200,
                  bottom: 250,
                }}
              >
                <DynamicText />
              </motion.h3>
            </div>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
      <div className="titleHome">
        <h1>
          Création de votre site web moderne, pour que votre activité soit
          visible par vos potentiels clients{" "}
        </h1>
      </div>
    </div>
  );
};

export default Home;
