import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
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

const localContent = {
  pau: [
    ["Être compris dès la première visite", "Pour un artisan, un indépendant ou une PME de l'agglomération paloise, le site doit préciser les prestations, la zone d'intervention et les moyens de contact. Photos de réalisations, services détaillés et coordonnées cohérentes aident vos clients à comparer et à vous choisir."],
    ["Une présence cohérente autour de Pau", "Le travail peut associer les pages de votre site, votre fiche Google Business Profile si vous y êtes éligible et vos annuaires professionnels. Les informations sont vérifiées ensemble : activité, adresse, téléphone et secteurs réellement desservis."],
    ["Votre interlocuteur à Gan", "NKT.DevWeb est installé à Gan, près de Pau. Le projet commence par un échange sur vos clients et vos priorités, puis avance avec un devis et des validations de maquettes. Les modalités de rencontre ou de travail à distance sont convenues ensemble."],
  ],
  gan: [
    ["Présenter votre activité à Gan", "Un commerce, un artisan ou une jeune entreprise a besoin d'une présentation lisible : prestations, exemples de travaux, informations pratiques et contact direct. Le site vitrine est conçu autour de ces éléments, sans multiplier les pages sans utilité."],
    ["Un développeur basé dans la commune", "Issoumaila Niakate développe sous le nom NKT.DevWeb depuis Gan (64290), 6 rue de Corisande. Vous échangez directement avec la personne qui réalise le projet, de la définition du besoin jusqu'à la prise en main du site."],
    ["Faire évoluer une présence existante", "Vous avez déjà un site ou une fiche professionnelle ? Nous examinons ce qui peut être conservé : adresse du site, contenus utiles et points de contact. Les améliorations prioritaires peuvent concerner le mobile, les photos, les textes ou la rapidité."],
  ],
  bearn: [
    ["Montrer vos services et votre territoire", "Pour une entreprise du Béarn, préciser les communes réellement desservies et montrer ses réalisations aide le visiteur à savoir si elle répond à son besoin. Le contenu s'appuie sur vos activités et vos projets, plutôt que sur une liste artificielle de villes."],
    ["Un site adapté au travail de terrain", "Vos clients consultent souvent votre site entre deux activités, sur téléphone. Les prestations, horaires que vous communiquez et moyens de contact doivent être faciles à trouver. Les formulaires et les galeries sont préparés pour les petits écrans."],
    ["Un accompagnement depuis Gan", "NKT.DevWeb accompagne depuis Gan les projets de sites vitrines, de refonte et d'applications web. Si votre activité s'étend aux Landes ou à la Haute-Garonne, les échanges, maquettes et validations peuvent aussi être organisés à distance."],
  ],
};

const LocalLanding = ({ area }) => {
  const data = pageData[area];

  return (
    <main id="contenu" className="local-page">
      <SEO
        title={data.title}
        description={data.description}
        path={data.path}
        jsonLd={localPageJsonLd({ city: data.city, path: data.path, isRegion: area === "bearn" })}
      />
      <Mouse />
      <Navigation />
      <Logo />

      <nav className="breadcrumbs" aria-label="Fil d’Ariane"><NavLink to="/">Accueil</NavLink><span aria-hidden="true">/</span><span>{data.city}</span></nav>
      <section className="local-hero">
        <p className="section-kicker">SEO local et acquisition</p>
        <h1>{data.h1}</h1>
        <p>{data.intro}</p>
        <div className="local-actions">
          <NavLink to="/contact" className="buttonContact hover">
            Demander un devis
          </NavLink>
          <a className="secondary-link" href="/#services">
            Voir les offres
          </a>
        </div>
      </section>

      <section className="local-content">
        {localContent[area].map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <section className="related-section"><h2>Du savoir-faire à la prise de contact</h2><p>Découvrez le site client SARL Cazalet, puis les accompagnements adaptés à votre projet. Le devis précise les pages, les fonctionnalités et les étapes de validation.</p><div className="related-links"><NavLink to="/projet-1">Réalisation SARL Cazalet →</NavLink><NavLink to="/creation-site-vitrine">Site vitrine →</NavLink><NavLink to="/refonte-site-web">Refonte de site →</NavLink><NavLink to="/contact">Parler de mon projet →</NavLink></div></section>
    </main>
  );
};

export default LocalLanding;
