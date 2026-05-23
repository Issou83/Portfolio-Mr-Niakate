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
    h1: "Création de site internet à Pau",
    path: "/creation-site-internet-pau",
    title: "Création site internet Pau - NKT.DevWeb pour artisans et PME",
    description:
      "Création de site internet à Pau pour artisans, indépendants, TPE et PME : site vitrine, refonte, SEO local, application web et accompagnement sur mesure.",
    intro:
      "À Pau, vos futurs clients comparent vite. Votre site doit expliquer votre valeur, rassurer et donner envie de vous contacter sans friction.",
  },
  gan: {
    city: "Gan",
    h1: "Création de site internet à Gan",
    path: "/creation-site-internet-gan",
    title: "Création site internet Gan - Site vitrine et SEO local",
    description:
      "NKT.DevWeb crée des sites internet à Gan pour artisans, entrepreneurs et PME : design sur mesure, parcours contact, SEO local et performance.",
    intro:
      "Basé à Gan, NKT.DevWeb accompagne les entreprises locales avec une approche directe, claire et orientée demandes de contact.",
  },
  bearn: {
    city: "Béarn",
    h1: "Création de site web dans le Béarn",
    path: "/creation-site-web-bearn",
    title: "Création site web Béarn - Agence web locale NKT.DevWeb",
    description:
      "Création de site web dans le Béarn : sites vitrines, refontes, SEO local, solutions e-commerce et applications web pour TPE/PME.",
    intro:
      "Dans le Béarn, un site efficace doit parler du terrain, des clients locaux et de vos services avec précision.",
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
        <h1>{data.h1}</h1>
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
            simple et des signaux locaux cohérents avec Google Business Profile.
          </p>
        </article>
        <article>
          <h2>Une stratégie locale propre</h2>
          <p>
            NKT.DevWeb évite les pages dupliquées qui remplacent seulement le
            nom de la ville. Chaque zone doit servir une intention précise :
            comprendre votre activité, votre territoire et vos clients.
          </p>
        </article>
        <article>
          <h2>Technique, design et SEO ensemble</h2>
          <p>
            Performance, responsive, données structurées, contenus utiles et
            appels à l'action travaillent ensemble pour transformer la visite en
            contact.
          </p>
        </article>
      </section>
    </main>
  );
};

export default LocalLanding;
