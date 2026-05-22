import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import ButtonContact from "../components/ButtonContact";
import ConsentBanner from "../components/ConsentBanner";
import Logo from "../components/Logo";

const Home = () => {
  const services = [
    {
      title: "Sites vitrines qui convertissent",
      text: "Une presence claire, rapide et credible pour transformer vos visiteurs en demandes de devis.",
    },
    {
      title: "Applications web metier",
      text: "Des outils sur mesure pour simplifier vos process, gerer vos donnees et gagner du temps.",
    },
    {
      title: "Refonte & performance",
      text: "Audit UX, design, vitesse et parcours utilisateur pour repartir sur une base solide.",
    },
  ];

  const advantages = [
    "Diagnostic UX offert",
    "Interlocuteur unique",
    "Design sur mesure",
    "Site rapide et responsive",
  ];

  const offers = [
    {
      name: "Presence",
      forWho: "Artisan, independant, jeune activite",
      items: ["Site vitrine clair", "Parcours contact", "Base SEO locale"],
    },
    {
      name: "Croissance",
      forWho: "TPE/PME qui veut plus de demandes",
      items: ["Refonte UX", "Pages services", "Optimisation conversion"],
    },
    {
      name: "Metier",
      forWho: "Entreprise avec besoins specifiques",
      items: ["Application web", "API & donnees", "Interface d'administration"],
    },
  ];

  const process = [
    "Audit de l'existant",
    "Prototype UX",
    "Developpement",
    "Mise en ligne",
  ];

  return (
    <div className="homeContainer">
      <ConsentBanner />
      <Mouse />

      <section className="home agency-hero" id="accueil">
        <Navigation />
        <div className="myLogo">
          <Logo />
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
                NKT.DevWeb
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

        <div className="hero-copy">
          <p className="eyebrow">Agence web dans le 64</p>
          <h1>
            Des sites web sur mesure pour les artisans, entrepreneurs et PME
            qui veulent etre choisis.
          </h1>
          <p>
            NKT.DevWeb concoit des experiences digitales rapides, lisibles et
            pensees pour vos objectifs : gagner en visibilite, rassurer vos
            clients et generer plus de contacts.
          </p>
          <div className="hero-actions">
            <ButtonContact />
            <a className="secondary-link" href="#services">
              Voir les offres
            </a>
          </div>
          <ul className="hero-trust">
            {advantages.map((advantage) => (
              <li key={advantage}>{advantage}</li>
            ))}
          </ul>
        </div>

        <Buttons right={"/projet-1"} />
      </section>

      <section className="agency-section difference-section">
        <p className="section-kicker">Pourquoi NKT.DevWeb</p>
        <h2>La proximite d'un freelance, la structure d'une agence.</h2>
        <div className="difference-grid">
          <article>
            <strong>Pau, Gan, Bearn et Nouvelle-Aquitaine</strong>
            <p>
              Un accompagnement local pour les entreprises qui veulent une
              presence web serieuse sans perdre du temps dans le jargon.
            </p>
          </article>
          <article>
            <strong>Pas un template de plus</strong>
            <p>
              L'identite visuelle reste memorisable, mais chaque page sert un
              objectif concret : comprendre, rassurer, contacter.
            </p>
          </article>
        </div>
      </section>

      <section className="agency-section agency-intro" id="services">
        <p className="section-kicker">Ce que l'on construit</p>
        <h2>Une base web solide, utile et belle.</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="agency-section offers-section">
        <p className="section-kicker">Offres lisibles</p>
        <h2>Un cadre simple, adapte a votre maturite digitale.</h2>
        <div className="offers-grid">
          {offers.map((offer) => (
            <article key={offer.name}>
              <small>{offer.forWho}</small>
              <h3>{offer.name}</h3>
              <ul>
                {offer.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="agency-section agency-proof">
        <div>
          <p className="section-kicker">Pour petites equipes ambitieuses</p>
          <h2>Un accompagnement proche, sans langage inutile.</h2>
        </div>
        <div className="proof-list">
          <p>Audit avant design pour comprendre vos vrais freins.</p>
          <p>Parcours de contact raccourci pour faciliter la prise de decision.</p>
          <p>Design responsive pense pour mobile, tablette et bureau.</p>
        </div>
      </section>

      <section className="agency-section process-section">
        <p className="section-kicker">Methode</p>
        <h2>Un projet avance etape par etape.</h2>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step}>
              <small>0{index + 1}</small>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="agency-section final-cta">
        <p className="section-kicker">Pret a clarifier votre presence web ?</p>
        <h2>
          On transforme votre idee en site professionnel, visible et agreable a
          utiliser.
        </h2>
        <ButtonContact />
      </section>
    </div>
  );
};

export default Home;
