import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork"
import Buttons from "../components/Buttons"

const contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>rue...</p>
                            <p>64290 GAN</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0679813535" className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={() => alert("Téléphone copié !")}>06 79 81 35 35</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="issou8@gmail.com" className="hover">
                                <p style={{cursor: "pointer"}} className="clipboard" onClick={() => alert("E-mail copié !")}>issou8@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Niakate Issoumaïla - 2023</p>
                    </div>
                </div>
                <Buttons  left={"/projet-4"} />
            </div>
        </main>
    );
};

export default contact;