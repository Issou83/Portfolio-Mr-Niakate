import { createContext, useContext, useEffect } from "react";
import { siteUrl } from "../data/business";
import { organizationJsonLd, websiteJsonLd } from "../data/seoData";
const defaultImage = `${siteUrl}/assets/img/NewImage.png`;
// A collector is provided only by the build-time renderer, never by the browser.
export const SEOContext = createContext(null);
export const resolveSEO = ({ title, description, path = "/", image = defaultImage, type = "website", jsonLd, noindex = false }) => {
  const canonical = `${siteUrl}${path}`;
  const graph = jsonLd?.["@graph"] || [organizationJsonLd, websiteJsonLd];
  const completeGraph = graph.some(node => node["@type"] === "WebSite") ? graph : [...graph, websiteJsonLd];
  return { title, description, canonical, image, type, robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large", jsonLd: {
    "@context": "https://schema.org", "@graph": [...completeGraph, {
      "@type": path === "/contact" ? "ContactPage" : "WebPage", "@id": `${canonical}#webpage`, url: canonical, name: title, description,
      inLanguage: "fr-FR", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#nktdevweb` },
    }],
  } };
};
const upsert = (selector, tag, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) { element = document.createElement(tag); document.head.appendChild(element); }
  Object.entries(attributes).forEach(([key,value]) => element.setAttribute(key,value));
  return element;
};
const SEO = (props) => {
  const collect = useContext(SEOContext);
  const data = resolveSEO(props);
  if (collect) collect(data);
  const serialized = JSON.stringify(data);
  useEffect(() => {
    const meta = JSON.parse(serialized);
    document.title = meta.title;
    upsert('meta[name="description"]', "meta", { name: "description", content: meta.description });
    upsert('meta[name="robots"]', "meta", { name: "robots", content: meta.robots });
    for (const [key,value] of Object.entries({ title: meta.title, description: meta.description, url: meta.canonical, image: meta.image, type: meta.type, site_name: "NKT.DevWeb", locale: "fr_FR" })) upsert(`meta[property="og:${key}"]`, "meta", { property: `og:${key}`, content: value });
    for (const [key,value] of Object.entries({ card: "summary_large_image", title: meta.title, description: meta.description, image: meta.image })) upsert(`meta[name="twitter:${key}"]`, "meta", { name: `twitter:${key}`, content: value });
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: meta.canonical });
    const ld = upsert('#page-jsonld', "script", { id: "page-jsonld", type: "application/ld+json" });
    ld.textContent = JSON.stringify(meta.jsonLd);
  }, [serialized]);
  return null;
};
export { siteUrl, defaultImage };
export default SEO;
