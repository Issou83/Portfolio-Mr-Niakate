import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
const NotFound = () => <main id="contenu" className="notFound"><SEO title="Page introuvable | NKT.DevWeb" description="Cette page n'existe pas. Retrouvez les services et réalisations de NKT.DevWeb." path="/404" noindex /><div className="notFound-content"><h1>Page introuvable</h1><p>Cette adresse ne correspond à aucune page du site.</p><Link to="/">Retour à l'accueil</Link></div></main>;
export default NotFound;
