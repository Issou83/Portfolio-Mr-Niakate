import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        initial="out"
        exit="out"
        animate="in"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
        className="contact"
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>6 rue de Corisande</p>
              <p>64290 GAN</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <a href="tel:0615285911">
                <div className="caseContact">
                  <h4>Mobile</h4>
                  <p
                    style={{ cursor: "pointer" }}
                    className="clipboard"
                    onClick={() => alert("Téléphone copié !")}
                  >
                    06 79 81 35 35
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="issou8@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("E-mail copié !")}
                >
                  issou8@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          {/* <SocialNetwork /> */}

          <div className="credits">
            <p>Niakate I - 2023</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
