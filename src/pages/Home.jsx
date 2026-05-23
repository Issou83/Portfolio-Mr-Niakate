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
import SEO from "../components/SEO";
import { homeJsonLd } from "../data/seoData";

const Home = () => {
  const services = [
    {
      title: "Sites vitrines qui convertissent",
      text: "Une présence claire, rapide et crédible pour transformer vos visiteurs en demandes de devis.",
    },
    {
      title: "Applications web métier",
      text: "Des outils sur mesure pour simplifier vos process, gérer vos données et gagner du temps.",
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
      name: "Présence",
      forWho: "Artisan, indépendant, jeune activité",
      items: ["Site vitrine clair", "Parcours contact", "Base SEO locale"],
    },
    {
      name: "Croissance",
      forWho: "TPE/PME qui veut plus de demandes",
      items: ["Refonte UX", "Pages services", "Optimisation conversion"],
    },
    {
      name: "Métier",
      forWho: "Entreprise avec besoins spécifiques",
      items: ["Application web", "API & données", "Interface d'administration"],
    },
  ];

  const process = [
    "Audit de l'existant",
    "Prototype UX",
    "Développement",
    "Mise en ligne",
  ];

  return (
    <div className="homeContainer">
      <SEO
        title="NKT.DevWeb - Agence web à Gan et Pau pour artisans, TPE et PME"
        description="Création de sites vitrines, applications web et solutions e-commerce pour artisans, entrepreneurs, TPE et PME à Gan, Pau, dans le Béarn et en Nouvelle-Aquitaine."
        path="/"
        jsonLd={homeJsonLd}
      />
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
            qui veulent être choisis.
          </h1>
          <p>
            NKT.DevWeb conçoit des expériences digitales rapides, lisibles et
            pensées pour vos objectifs : gagner en visibilité, rassurer vos
            clients et générer plus de contacts.
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
        <h2>La proximité d'un freelance, la structure d'une agence.</h2>
        <div className="difference-grid">
          <article>
            <strong>Pau, Gan, Béarn et Nouvelle-Aquitaine</strong>
            <p>
              Un accompagnement local pour les entreprises qui veulent une
              présence web sérieuse sans perdre du temps dans le jargon.
            </p>
          </article>
          <article>
            <strong>Pas un template de plus</strong>
            <p>
              L'identité visuelle reste mémorisable, mais chaque page sert un
              objectif concret : comprendre, rassurer, contacter.
            </p>
          </article>
        </div>
      </section>

      <section className="agency-section agency-intro" id="services">
        <p className="section-kicker">Ce que l'on construit</p>
        <h2>Une base web solide, utile et belle.</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span></span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a
                className="service-link"
                href={
                  [
                    "/creation-site-vitrine",
                    "/developpement-application-web",
                    "/refonte-site-web",
                  ][index]
                }
              >
                Explorer ce service
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="agency-section offers-section">
        <p className="section-kicker">Offres lisibles</p>
        <h2>Un cadre simple, adapté à votre maturité digitale.</h2>
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

      <section className="agency-section search-intent-section">
        <p className="section-kicker">Intentions de recherche</p>
        <h2>Des pages conçues pour les recherches qui amènent des clients.</h2>
        <div className="intent-links">
          <a href="/creation-site-vitrine">Création site vitrine</a>
          <a href="/refonte-site-web">Refonte site web</a>
          <a href="/developpement-application-web">Application web sur mesure</a>
          <a href="/seo-local-pau">SEO local Pau</a>
          <a href="/creation-site-ecommerce">Création e-commerce</a>
        </div>
      </section>

      <section className="agency-section agency-proof">
        <div>
          <p className="section-kicker">Pour petites équipes ambitieuses</p>
          <h2>Un accompagnement proche, sans langage inutile.</h2>
        </div>
        <div className="proof-list">
          <p>Audit avant design pour comprendre vos vrais freins.</p>
          <p>Parcours de contact raccourci pour faciliter la prise de décision.</p>
          <p>Design responsive pensé pour mobile, tablette et bureau.</p>
        </div>
      </section>

      <section className="agency-section process-section">
        <p className="section-kicker">Méthode</p>
        <h2>Un projet avance étape par étape.</h2>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step}>
              <small>0{index + 1}</small>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="agency-section local-seo-section">
        <p className="section-kicker">Zones accompagnées</p>
        <h2>Une présence locale claire pour être trouvé au bon moment.</h2>
        <div className="local-links">
          <a href="/creation-site-internet-pau">Création site internet Pau</a>
          <a href="/creation-site-internet-gan">Création site internet Gan</a>
          <a href="/creation-site-web-bearn">Création site web Béarn</a>
        </div>
      </section>

      <section className="agency-section faq-section">
        <p className="section-kicker">Questions fréquentes</p>
        <h2>Les bonnes questions avant de lancer votre site.</h2>
        <div className="faq-grid">
          <article>
            <h3>Combien coûte un site internet professionnel ?</h3>
            <p>
              Le prix dépend du nombre de pages, du contenu, des fonctionnalités
              et du niveau d'accompagnement. Le cadrage évite de payer des
              options inutiles.
            </p>
          </article>
          <article>
            <h3>Un site vitrine peut-il vraiment générer des contacts ?</h3>
            <p>
              Oui, si l'offre est claire, les preuves visibles, la vitesse bonne
              et le parcours de contact simple, surtout sur mobile.
            </p>
          </article>
          <article>
            <h3>Pourquoi travailler le SEO local dès le début ?</h3>
            <p>
              Les signaux locaux, la cohérence des informations et les pages de
              services aident Google à comprendre votre zone et vos expertises.
            </p>
          </article>
        </div>
      </section>

      <section className="agency-section final-cta">
        <p className="section-kicker">Prêt à clarifier votre présence web ?</p>
        <h2>
          On transforme votre idée en site professionnel, visible et agréable à
          utiliser.
        </h2>
        <ButtonContact />
      </section>
    </div>
  );
};

export default Home;
