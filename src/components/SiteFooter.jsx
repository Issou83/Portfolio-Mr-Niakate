import React from "react";
import { Link } from "react-router-dom";
import { business } from "../data/business";
const SiteFooter = () => (
  <footer className="site-footer">
    <div className="footer-grid"><div><strong>NKT.DevWeb</strong><p>Sites internet & applications sur mesure.</p><p>Issoumaila Niakate · Développeur indépendant</p><address>{business.street}<br />{business.postalCode} {business.city}, près de Pau</address></div>
      <div className="footer-links"><strong>Votre projet</strong><Link to="/creation-site-vitrine">Création de site vitrine</Link><Link to="/creation-site-ecommerce">E-commerce</Link><Link to="/developpement-application-web">Application web sur mesure</Link><Link to="/seo-local-pau">Référencement local</Link></div>
      <div className="footer-links"><strong>On en parle ?</strong><a href={`mailto:${business.email}`}>{business.email}</a><a href={`tel:${business.telephone}`}>{business.phoneLabel}</a><Link to="/contact">Présenter mon projet →</Link><a href="https://github.com/Issou83" target="_blank" rel="noopener noreferrer">GitHub →</a></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} NKT.DevWeb · Gan / Pau · Accompagnement à distance : 40 & 31</span><button type="button" onClick={() => window.dispatchEvent(new Event("open-consent-settings"))}>Gérer les cookies</button></div>
  </footer>
);
export default SiteFooter;
