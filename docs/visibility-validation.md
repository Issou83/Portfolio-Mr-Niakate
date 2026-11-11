# Mise à jour NKT.DevWeb — 11 novembre 2026

## Changements

- Accueil repensé dans l'identité sombre, avec une signature cyan, des réalisations visibles et des appels au contact.
- Éléments visuels cohérents sur les pages contact, services, zones et projets. Images WebP de présentation, dimensions explicites, chargement différé hors du premier écran et polices avec `font-display: swap`.
- Textes propres à Pau, Gan et au Béarn ; accompagnement à distance décrit explicitement pour les départements 40 et 31, sans inventer d'implantations.
- Informations d'entreprise centralisées dans `src/data/business.js`. Les coordonnées existantes du site sont conservées.
- Pré-rendu des 17 pages publiques et d'une page 404 au build. Le HTML contient le contenu React, les métadonnées propres à la route et un graphe JSON-LD unique, avant JavaScript. React hydrate ensuite ce HTML.
- FAQ et données structurées produites depuis la même source ; noms alternatifs de la marque, entité professionnelle, site, pages et fils d'Ariane.
- Liens de téléphone/e-mail directs ; formulaire protégé contre les doubles envois et messages d'erreur accessibles. Conservation de la configuration EmailJS existante.
- Choix des cookies appliqué par la commande `gtag('consent','update',...)`, valeurs par défaut placées avant les scripts Analytics et réglages réouvrables en pied de page.
- Routes et liens projets conservés. La description des réalisations est lisible sur écran tactile, sans survol.

## Commandes

```bash
npm ci
npm run build
npm run check:site
CI=true npm test -- --watchAll=false --runInBand
```

`npm run build` lance CRA puis `scripts/prerender.cjs`. Le dossier à publier sur Netlify est `build`. Le pré-rendu génère aussi les règles `_redirects` pour les routes connues et un repli HTTP 404. Ne pas publier directement le dossier `public`, dont le `_redirects` sert uniquement au développement historique.

## Vérifications effectuées

- Compilation production réussie.
- Prévisualisation Netlify : 17 routes en HTTP 200, chacune avec son H1, sa canonique et son JSON-LD dans le HTML ; une URL inexistante renvoie HTTP 404 avec `noindex`.
- 17 pages du sitemap + 404 : HTML présent, un H1, titres uniques, canonique, JSON-LD unique, correspondance exacte de la FAQ, fichiers image et liens internes.
- 3 tests du formulaire : blocage des doubles envois, réponse positive simulée, erreur réseau et absence de clé traitées sans faux succès.
- Navigateur : ouverture/fermeture du menu et touche Échap, FAQ, navigation contact avec mise à jour des métadonnées, réouverture et refus des cookies.
- Affichage à 1348 px ; pages principales dans des cadres mobiles de 320 et 390 px (largeur intérieure effective 305 et 375 px avec barres de défilement). Pas de débordement horizontal détecté sur accueil, contact, projet, page locale et page service.
- Aucune erreur de l'application observée dans la console pendant ces parcours ; des messages provenant de l'extension du navigateur sont sans rapport avec le site.

## Limites et suivi

L'envoi réel EmailJS et la réception en boîte ne sont pas testés ; les tests utilisent un transport simulé. Les robots doivent encore explorer la version publiée : aucune position Google, indexation ou citation par une IA n'est garantie. La FAQ structurée n'implique pas l'obtention d'un résultat enrichi.

Après publication, vérifier les réponses HTTP des routes et des adresses inexistantes sur Netlify, contrôler les URL dans Search Console, puis suivre demandes de contact et requêtes locales. Les données Analytics existantes ne sont pas interprétées comme une mesure avant/après dans cette mise à jour.

Références : https://developers.google.com/search/docs/appearance/ai-features ; https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
