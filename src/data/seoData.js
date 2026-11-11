import { siteUrl, business, homeFaq } from "./business";
export const organizationJsonLd = {
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#nktdevweb`,
  name: business.name,
  alternateName: business.alternateName,
  founder: { "@type": "Person", name: business.founder },
  url: `${siteUrl}/`,
  logo: `${siteUrl}/assets/img/mysitelogo.png`,
  image: `${siteUrl}/assets/img/cazalet-preview.webp`,
  telephone: business.telephone,
  email: business.email,
  address: { "@type": "PostalAddress", streetAddress: business.street, postalCode: business.postalCode, addressLocality: business.city, addressRegion: "Nouvelle-Aquitaine", addressCountry: "FR" },
  areaServed: ["Gan", "Pau", "Béarn", "Pyrénées-Atlantiques", "Landes", "Haute-Garonne"].map(name => ({ "@type": "Place", name })),
  sameAs: ["https://github.com/Issou83", "https://www.linkedin.com/in/issouma%C3%AFla-niakate-60333464/"],
  knowsAbout: ["Création de sites internet", "React", "Node.js", "Applications web", "SEO local", "E-commerce"],
};
export const websiteJsonLd = {
  "@type": "WebSite", "@id": `${siteUrl}/#website`, name: business.name, url: `${siteUrl}/`, publisher: { "@id": `${siteUrl}/#nktdevweb` }, inLanguage: "fr-FR",
};
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, {
    "@type": "FAQPage", "@id": `${siteUrl}/#faq`,
    mainEntity: homeFaq.map(f => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }],
};
export const localPageJsonLd = ({ city, path, isRegion = false }) => ({
  "@context": "https://schema.org",
  "@graph": [organizationJsonLd, websiteJsonLd, {
    "@type": "Service", "@id": `${siteUrl}${path}#service`,
    name: `Création de site internet ${isRegion ? "dans le" : "à"} ${city}`,
    serviceType: "Création de site internet", provider: { "@id": `${siteUrl}/#nktdevweb` },
    areaServed: { "@type": isRegion ? "AdministrativeArea" : "City", name: city },
  }, {
    "@type": "BreadcrumbList",
    itemListElement: [ { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: city, item: `${siteUrl}${path}` } ],
  }],
});
