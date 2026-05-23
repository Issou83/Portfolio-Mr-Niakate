import { siteUrl } from "../components/SEO";

const business = {
  name: "NKT.DevWeb",
  legalName: "NKT.DevWeb - Issoumaila Niakate",
  url: siteUrl,
  logo: `${siteUrl}/assets/img/mysitelogo.png`,
  image: `${siteUrl}/assets/img/NewImage.png`,
  telephone: "+33679813535",
  email: "issou8@gmail.com",
  priceRange: "Sur devis",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6 rue de Corisande",
    postalCode: "64290",
    addressLocality: "Gan",
    addressRegion: "Nouvelle-Aquitaine",
    addressCountry: "FR",
  },
  sameAs: [
    "https://github.com/Issou83",
    "https://www.linkedin.com/in/issouma%C3%AFla-niakate-60333464/",
  ],
};

const services = [
  "Création de site vitrine",
  "Création de site internet à Pau",
  "Refonte de site web",
  "Développement d'application web",
  "Création e-commerce",
  "Optimisation SEO locale",
  "API et base de données",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#nktdevweb`,
  ...business,
  areaServed: [
    { "@type": "City", name: "Gan" },
    { "@type": "City", name: "Pau" },
    { "@type": "AdministrativeArea", name: "Béarn" },
    { "@type": "AdministrativeArea", name: "Pyrénées-Atlantiques" },
    { "@type": "AdministrativeArea", name: "Nouvelle-Aquitaine" },
  ],
  serviceType: services,
  knowsAbout: services,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: business.telephone,
      contactType: "Devis et conseil web",
      areaServed: "FR",
      availableLanguage: ["fr-FR"],
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "NKT.DevWeb",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#nktdevweb` },
  inLanguage: "fr-FR",
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte la création d'un site internet pour une TPE ou un artisan ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le budget dépend du nombre de pages, du contenu, des fonctionnalités et du niveau d'accompagnement. NKT.DevWeb commence par cadrer le besoin pour proposer un devis adapté et éviter les options inutiles.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous avec des entreprises autour de Pau et Gan ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. NKT.DevWeb accompagne les artisans, entrepreneurs, TPE et PME à Gan, Pau, dans le Béarn, les Pyrénées-Atlantiques et plus largement en Nouvelle-Aquitaine.",
      },
    },
    {
      "@type": "Question",
      name: "Pouvez-vous améliorer un site existant plutôt que le refaire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Un audit UX, technique et SEO permet d'identifier si une optimisation suffit ou si une refonte est plus pertinente pour obtenir plus de contacts.",
      },
    },
  ],
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, faqJsonLd],
};

export const localPageJsonLd = ({ city, path }) => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationJsonLd,
    {
      "@type": "Service",
      "@id": `${siteUrl}${path}#service`,
      name: `Création de site internet à ${city}`,
      serviceType: "Création de site internet",
      provider: { "@id": `${siteUrl}/#nktdevweb` },
      areaServed: { "@type": "City", name: city },
    },
  ],
});
