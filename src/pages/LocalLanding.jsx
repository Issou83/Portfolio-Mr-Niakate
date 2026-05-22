import React from "react";
import { NavLink } from "react-router-dom";
import ConsentBanner from "../components/ConsentBanner";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SEO, { siteUrl } from "../components/SEO";
import { localPageJsonLd } from "../data/seoData";

const pageData = {
  pau: {
    city: "Pau",
    path: "/creation-site-internet-pau",
    title: "Creation site internet Pau - NKT.DevWeb pour artisans et PME",
    description:
      "Creation de site internet a Pau pour artisans, independants, TPE et PME : site vitrine, refonte, SEO local, application web et accompagnement sur mesure.",
    intro:
      "A Pau, vos futurs clients comparent vite. Votre site doit expliquer votre valeur, rassurer et donner envie de vous contacter sans friction.",
  },
  gan: {
    city: "Gan",
    path: "/creation-site-internet-gan",
    title: "Creation site internet Gan - Site vitrine et SEO local",
    description:
      "NKT.DevWeb cree des sites internet a Gan pour artisans, entrepreneurs et PME : design sur mesure, parcours contact, SEO local et performance.",
    intro:
      "Base a Gan, NKT.DevWeb accompagne les entreprises locales avec une approche directe, claire et orientee demandes de contact.",
  },
  bearn: {
    city: "Bearn",
    path: "/creation-site-web-bearn",
    title: "Creation site web Bearn - Agence web locale NKT.DevWeb",
    description:
      "Creation de site web dans le Bearn : sites vitrines, refontes, SEO local, solutions e-commerce et applications web pour TPE/PME.",
    intro:
      "Dans le Bearn, un site efficace doit parler du terrain, des clients locaux et de vos services avec precision.",
  },
};

const LocalLanding = ({ area }) => {
  const data = pageData[area];

  return (
    <main className="local-page">
      <SEO
        title={data.title}
        description={data.description}
        path={data.path}
        jsonLd={localPageJsonLd({ city: data.city, path: data.path })}
      />
      <ConsentBanner />
      <Mouse />
      <Navigation />
      <Logo />

      <section className="local-hero">
        <p className="section-kicker">SEO local et acquisition</p>
        <h1>Creation de site internet a {data.city}</h1>
        <p>{data.intro}</p>
        <div className="local-actions">
          <NavLink to="/contact" className="buttonContact hover">
            Demander un devis
          </NavLink>
          <a className="secondary-link" href={`${siteUrl}/#services`}>
            Voir les offres
          </a>
        </div>
      </section>

      <section className="local-content">
        <article>
          <h2>Ce qui fait vraiment gagner des clients</h2>
          <p>
            Une page d'accueil belle ne suffit pas. Il faut des messages par
            service, des preuves visibles, une structure claire, un formulaire
            simple et des signaux locaux coherents avec Google Business Profile.
          </p>
        </article>
        <article>
          <h2>Une strategie locale propre</h2>
          <p>
            NKT.DevWeb evite les pages dupliquees qui remplacent seulement le
            nom de la ville. Chaque zone doit servir une intention precise :
            comprendre votre activite, votre territoire et vos clients.
          </p>
        </article>
        <article>
          <h2>Technique, design et SEO ensemble</h2>
          <p>
            Performance, responsive, donnees structurees, contenus utiles et
            appels a l'action travaillent ensemble pour transformer la visite en
            contact.
          </p>
        </article>
      </section>
    </main>
  );
};

export default LocalLanding;
