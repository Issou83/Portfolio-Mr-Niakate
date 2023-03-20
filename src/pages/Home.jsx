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

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <div className="logos">
          <img src={Html} alt="" className="logoTechnos" />
          <img src={Css} alt="" className="logoTechnos" />
          <img src={Sass} alt="" className="logoTechnos" />
          <img src={Js} alt="" className="logoTechnos" />
          <img src={ReacT} alt="" className="logoTechnos" />
          <img src={Node} alt="" className="logoTechnos" />
        </div>
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              onDragEnd
              dragConstraints={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              NK.WebDev
            </motion.h1>
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
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
