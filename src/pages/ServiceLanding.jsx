import React from "react";
import { NavLink } from "react-router-dom";
import ConsentBanner from "../components/ConsentBanner";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SEO, { siteUrl } from "../components/SEO";
import { organizationJsonLd } from "../data/seoData";

const services = {
  vitrine: {
    path: "/creation-site-vitrine",
    title: "Création site vitrine - NKT.DevWeb pour artisans et PME",
    description:
      "Création de site vitrine professionnel pour artisans, entrepreneurs, TPE et PME : design sur mesure, SEO local, parcours contact et responsive mobile.",
    h1: "Création de site vitrine professionnel",
    intro:
      "Un site vitrine efficace ne présente pas seulement votre activité. Il clarifie votre offre, rassure vos visiteurs et transforme les recherches locales en prises de contact.",
    bullets: [
      "Message commercial clair dès le premier écran",
      "Pages services pensées pour Google et pour vos clients",
      "Formulaire, téléphone et appels à l'action visibles",
      "Responsive mobile testé sur plusieurs largeurs",
    ],
  },
  refonte: {
    path: "/refonte-site-web",
    title: "Refonte site web - UX, performance et SEO local",
    description:
      "Refonte de site web pour améliorer l'image, la vitesse, le SEO et la conversion. Audit UX, structure, contenus et parcours client.",
    h1: "Refonte de site web orientée conversion",
    intro:
      "Quand un site existe déjà mais ne génère pas assez de contacts, la refonte doit partir d'un audit : contenus, UX, vitesse, mobile, SEO et preuves de confiance.",
    bullets: [
      "Audit de l'existant avant design",
      "Structure des pages et titres retravaillés",
      "Navigation plus simple et plus persuasive",
      "Correction des blocages mobile et performance",
    ],
  },
  app: {
    path: "/developpement-application-web",
    title: "Développement application web sur mesure - NKT.DevWeb",
    description:
      "Développement d'application web sur mesure pour PME : interface métier, données, API, administration et automatisation de processus.",
    h1: "Développement d'application web sur mesure",
    intro:
      "Une application web métier sert à gagner du temps, fiabiliser vos données et remplacer les fichiers dispersés par un outil adapté à votre organisation.",
    bullets: [
      "Interface claire pour vos équipes",
      "API, base de données et tableaux de bord",
      "Accès admin et workflows adaptés",
      "Base technique évolutive",
    ],
  },
  seo: {
    path: "/seo-local-pau",
    title: "SEO local Pau et Béarn - Visibilité Google pour TPE PME",
    description:
      "SEO local à Pau, Gan et dans le Béarn : structure du site, pages services, pages locales, données structurées, contenus et signaux de confiance.",
    h1: "SEO local pour être trouvé au bon moment",
    intro:
      "Le SEO local vise les recherches à forte intention : un client proche, un besoin clair, une décision rapide. Le site, Google Business Profile et les avis doivent raconter la même histoire.",
    bullets: [
      "Pages services + zones locales sans duplication pauvre",
      "NAP cohérent : nom, adresse, téléphone",
      "Données structurées LocalBusiness et Service",
      "Maillage interne pour guider Google et les visiteurs",
    ],
  },
  ecommerce: {
    path: "/creation-site-ecommerce",
    title: "Création site e-commerce - Parcours achat clair et fiable",
    description:
      "Création de site e-commerce et parcours d'achat : catalogue, panier, formulaire, performance mobile et expérience client rassurante.",
    h1: "Création de site e-commerce clair et fiable",
    intro:
      "Un e-commerce doit inspirer confiance rapidement : produits lisibles, panier simple, informations de livraison claires et tunnel d'achat sans friction.",
    bullets: [
      "Catalogue lisible et fiches produits utiles",
      "Parcours panier et commande simplifié",
      "Expérience mobile prioritaire",
      "Mesure des conversions et optimisations",
    ],
  },
};

const ServiceLanding = ({ service }) => {
  const data = services[service];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd,
      {
        "@type": "Service",
        "@id": `${siteUrl}${data.path}#service`,
        name: data.h1,
        description: data.description,
        provider: { "@id": `${siteUrl}/#nktdevweb` },
        areaServed: ["Gan", "Pau", "Béarn", "Pyrénées-Atlantiques"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: data.h1,
            item: `${siteUrl}${data.path}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="service-page">
      <SEO
        title={data.title}
        description={data.description}
        path={data.path}
        jsonLd={jsonLd}
      />
      <ConsentBanner />
      <Mouse />
      <Navigation />
      <Logo />

      <section className="service-hero">
        <p className="section-kicker">Service web</p>
        <h1>{data.h1}</h1>
        <p>{data.intro}</p>
        <div className="service-actions">
          <NavLink to="/contact" className="buttonContact hover">
            Demander un devis
          </NavLink>
          <NavLink
            to={service === "seo" ? "/creation-site-internet-pau" : "/seo-local-pau"}
            className="secondary-link"
          >
            {service === "seo" ? "Voir les pages locales" : "Voir le SEO local"}
          </NavLink>
        </div>
      </section>

      <section className="service-content">
        <article>
          <h2>Ce que l'on optimise</h2>
          <ul>
            {data.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Pourquoi c'est important</h2>
          <p>
            Les visiteurs ne lisent pas un site comme une plaquette. Ils
            scannent, comparent et cherchent une preuve. Chaque page doit donc
            répondre vite : quoi, pour qui, pourquoi vous, et comment vous
            contacter.
          </p>
        </article>
        <article>
          <h2>Objectif final</h2>
          <p>
            Construire un actif web durable : utile pour les clients, lisible
            pour Google, crédible pour les prospects et simple à faire évoluer.
          </p>
        </article>
      </section>
    </main>
  );
};

export default ServiceLanding;
