import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SEO from "../components/SEO";
import { homeJsonLd } from "../data/seoData";
import { homeFaq } from "../data/business";

const services = [
  { n: "01", title: "Un site qui vous ressemble.", label: "Site vitrine", text: "Présentez votre savoir-faire, vos prestations et vos réalisations. Donnez à vos futurs clients une raison claire de vous contacter.", path: "/creation-site-vitrine", tags: "Artisans · Indépendants · TPE" },
  { n: "02", title: "Une nouvelle dynamique.", label: "Refonte & visibilité", text: "Votre site mérite mieux ? Améliorons sa présentation, sa vitesse et son référencement, en partant de ce qui existe déjà.", path: "/refonte-site-web", tags: "Design · Performance · SEO local" },
  { n: "03", title: "Un outil pensé pour vous.", label: "Application web", text: "Centralisez vos données, simplifiez vos tâches et créez les fonctionnalités dont votre équipe a vraiment besoin.", path: "/developpement-application-web", tags: "React · Node.js · API" },
];

const Home = () => (
  <main id="contenu" className="studio-home">
    <SEO title="Création de site internet à Pau & Gan | NKT.DevWeb" description="Développeur web indépendant à Gan, près de Pau. Sites vitrines, refonte, e-commerce et applications sur mesure pour artisans et PME. Parlons de votre projet." path="/" jsonLd={homeJsonLd} />
    <header className="studio-header wrap">
      <Link to="/" className="studio-brand" aria-label="NKT.DevWeb, accueil">NKT<span>.</span>DevWeb<span className="brand-square" /></Link>
      <Navigation />
      <a className="header-contact" href="/contact">Parlons de votre projet <span aria-hidden="true">→</span></a>
    </header>
    <section className="studio-hero wrap" aria-labelledby="hero-title">
      <div className="studio-hero-copy">
        <p className="studio-eyebrow"><span aria-hidden="true" /> Développeur web indépendant · Gan / Pau</p>
        <h1 id="hero-title">Votre savoir-faire.<br />Un site à sa <em>hauteur.</em></h1>
        <p className="hero-description">Création de sites internet et d'applications sur mesure pour les artisans, indépendants et PME. Un design soigné. Une présence plus claire. Un contact plus simple.</p>
        <div className="studio-actions"><Link className="studio-button" to="/contact">Parlons de votre projet <span aria-hidden="true">→</span></Link><a className="studio-text-link" href="#realisations">Voir les réalisations <span aria-hidden="true">↓</span></a></div>
        <p className="hero-note">Basé à Gan, près de Pau <span>•</span> Un interlocuteur, du début à la mise en ligne</p>
      </div>
      <div className="hero-work">
        <div className="work-orbit" aria-hidden="true" />
        <div className="work-window">
          <div className="window-bar"><span aria-hidden="true">● ● ●</span><span>Projet client · SARL Cazalet</span><span aria-hidden="true">→</span></div>
          <Link to="/projet-1" aria-label="Découvrir la réalisation SARL Cazalet"><picture><source srcSet="/assets/img/cazalet-preview.webp" type="image/webp" /><img src="/assets/img/Cazalet.png" alt="Aperçu du site vitrine SARL Cazalet réalisé par NKT.DevWeb" width="900" height="650" fetchpriority="high" /></picture></Link>
        </div>
        <div className="work-caption"><span><span className="status-dot" aria-hidden="true" /> Du concret, dès le premier regard.</span><Link to="/projet-1">Voir le projet <span aria-hidden="true">→</span></Link></div>
        <div className="work-label" aria-hidden="true"><span>Design + développement</span><strong>Sur mesure.</strong></div>
      </div>
    </section>
    <div className="studio-strip"><div className="wrap"><span>Sites vitrines</span><span aria-hidden="true">✳</span><span>E-commerce</span><span aria-hidden="true">✳</span><span>Applications web</span><span aria-hidden="true">✳</span><span>SEO local</span></div></div>
    <section id="services" className="studio-section wrap">
      <div className="section-heading"><div><p className="studio-eyebrow">01 / Ce que je peux faire pour vous</p><h2>Le bon site.<br />Pour votre prochaine étape.</h2></div><p>Faire découvrir votre activité, vendre en ligne ou simplifier votre quotidien : partons de votre besoin.</p></div>
      <div className="studio-services">{services.map(s => <article key={s.n} className="studio-service"><div className="service-top"><span>{s.n}</span><span className="service-category">{s.label}</span></div><h3>{s.title}</h3><p>{s.text}</p><small>{s.tags}</small><Link to={s.path}>Découvrir l'accompagnement <span aria-hidden="true">→</span></Link></article>)}</div>
      <div className="extra-services"><span>Et pour aller plus loin</span><Link to="/creation-site-ecommerce">Vendre en ligne <span aria-hidden="true">→</span></Link><Link to="/seo-local-pau">Améliorer ma visibilité locale <span aria-hidden="true">→</span></Link></div>
    </section>
    <section id="realisations" className="studio-section wrap">
      <div className="section-heading"><div><p className="studio-eyebrow">02 / Réalisations</p><h2>Des idées devenues<br />des expériences web.</h2></div><p>Un site client et des projets de formation pour découvrir mon approche du design et du développement.</p></div>
      <div className="studio-projects">
        <article className="studio-project featured-project"><Link to="/projet-1"><picture><source srcSet="/assets/img/cazalet-preview.webp" type="image/webp" /><img src="/assets/img/Cazalet.png" alt="Site SARL Cazalet : présentation des services et des locations" width="900" height="650" loading="lazy" /></picture></Link><div><small>Projet client · Site vitrine & administration</small><h3><Link to="/projet-1">SARL Cazalet <span aria-hidden="true">→</span></Link></h3><p>Présenter l'activité et gérer les locations depuis un espace dédié.</p></div></article>
        <article className="studio-project"><Link to="/projet-2"><picture><source srcSet="/assets/img/kasa-preview.webp" type="image/webp" /><img src="/assets/img/projet-5.png" alt="Interface Kasa pour consulter les annonces de logements" width="900" height="650" loading="lazy" /></picture></Link><div><small>Projet de formation · Interface React</small><h3><Link to="/projet-2">Kasa <span aria-hidden="true">→</span></Link></h3><p>Une navigation claire entre logements, galeries et informations pratiques.</p></div></article>
      </div>
      <Link className="studio-text-link all-projects" to="/projet-4">Découvrir aussi le travail sur le SEO et la performance <span aria-hidden="true">→</span></Link>
    </section>
    <section className="studio-about"><div className="wrap about-grid"><div><p className="studio-eyebrow">03 / Proche de votre activité</p><h2>Une personne.<br />Toutes les étapes.</h2><p className="about-signature">Issoumaila Niakate <span>Développeur web · NKT.DevWeb</span></p></div><div><p className="about-lead">Vous échangez directement avec la personne qui conçoit et développe votre site.</p><p>À Gan, près de Pau, j'accompagne les entreprises qui veulent un outil utile, une image professionnelle et des explications claires. Je travaille avec React et Node.js pour des projets adaptés à votre activité.</p><div className="about-facts"><span>Design sur mesure</span><span>Mobile, tablette, ordinateur</span><span>Référencement dès la conception</span><span>Accompagnement direct</span></div><Link className="studio-text-link" to="/contact">Échangeons sur vos besoins <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="studio-section wrap">
      <div className="section-heading"><div><p className="studio-eyebrow">04 / Une méthode claire</p><h2>De votre idée<br />à sa mise en ligne.</h2></div><p>Des étapes définies ensemble, des validations régulières et un périmètre expliqué avant de commencer.</p></div>
      <ol className="studio-process">{[["On échange", "Votre activité, vos clients, vos objectifs. Nous définissons les priorités et le périmètre du devis."], ["On dessine", "La structure, les contenus et les maquettes donnent une direction concrète à votre futur site."], ["Je développe", "Le site prend forme. Navigation, formulaires et affichage mobile sont vérifiés avant la livraison."], ["On met en ligne", "Le lancement et la prise en main sont préparés. Maintenance et évolutions peuvent être définies ensemble."]].map(([title,text],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
    <section className="studio-local wrap"><div><p className="studio-eyebrow">Ici, et un peu plus loin</p><h2>Ancré dans le Béarn.<br />Connecté à vos projets.</h2><p>Basé à Gan (64290), près de Pau, dans les Pyrénées-Atlantiques. Accompagnement également à distance dans les Landes (40) et en Haute-Garonne (31).</p></div><div className="studio-local-links"><Link to="/creation-site-internet-pau"><span>Pau</span><span>Pyrénées-Atlantiques · 64 →</span></Link><Link to="/creation-site-internet-gan"><span>Gan</span><span>Au cœur de mon activité →</span></Link><Link to="/creation-site-web-bearn"><span>Béarn</span><span>Entreprises et savoir-faire locaux →</span></Link></div></section>
    <section className="studio-section wrap faq-layout"><div><p className="studio-eyebrow">Questions fréquentes</p><h2>Avant de<br />se lancer.</h2><Link className="studio-text-link" to="/contact">Poser une autre question <span aria-hidden="true">→</span></Link></div><div className="studio-faq">{homeFaq.map(f=><details key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><p>{f.answer}</p></details>)}</div></section>
    <section className="studio-final"><div className="wrap"><p className="studio-eyebrow">Votre prochaine étape commence ici</p><h2>Votre projet mérite<br />qu'on en <em>parle.</em></h2><Link className="studio-button" to="/contact">Présentez-moi votre idée <span aria-hidden="true">→</span></Link><p>Un premier échange pour comprendre vos besoins et envisager la suite.</p></div></section>
  </main>
);
export default Home;
