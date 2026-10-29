Tu es un développeur front-end expert. Je veux créer un site vitrine one-page
(mobile first, responsive, rapide, accessible) pour mon entreprise.

## 0. Identité visuelle (obligatoire)
- Logo : utilise UNIQUEMENT le fichier lockup-horizontal.svg (icône + nom + slogan).
  Ne crée aucune autre version du logo et ne modifie ni ses couleurs ni ses proportions.
  Usage : en-tête (hauteur 40 à 56 px) et pied de page. Ajoute une marge de
  protection autour du logo égale à la hauteur de l'icône.
- Favicon : utilise favicon-simplifie-carre.svg (+ version PNG 32, 180 et 512 px).
- Image Open Graph : utilise banniere-linkedin.svg adaptée à 1200×630 px.
- Palette : toutes les couleurs du site doivent provenir de cette palette :
  --color-primary: #1A2838    (titres, textes, en-tête)
  --color-brand: #3A5C8A      (boutons secondaires, liens)
  --color-brand-dark: #405C82 (survols, bordures)
  --color-brand-light: #8FB0DC (fonds de section, icônes, accents doux)
  --color-accent: #ED7410     (boutons d'action principaux)
  --color-accent-light: #FFA23C (accents, surlignages, badges)
  --color-footer: #131B24     (fond du pied de page)
  --color-white: #FFFFFF      (fond principal)
  Définis-les comme variables CSS et réutilise-les partout. N'introduis aucune
  autre couleur sans me demander.
- Contraste : respecte WCAG AA. Sur fond orange, le texte doit être blanc
  (ou bleu nuit sur #FFA23C). Ne mets jamais de texte orange sur fond blanc
  pour du texte courant.
- Typographie : [à choisir, sans-serif lisible, ex. Inter ou Manrope].
- Style : moderne, sobre, technique mais rassurant. Espaces blancs généreux,
  coins légèrement arrondis, ombres douces. Éviter les dégradés autres que
  ceux du logo.

## 1. Contexte et objectif
- Marque : Nomira (slogan : « Regagnez vos ressources »).
  Utilise « Nomira » partout, sans variante.
- Site : www.nomira.ma
- Activité : micro-solutions logicielles ciblées, déployées en quelques jours,
  pour éliminer les tâches manuelles chronophages des TPE/PME (Maroc, et Paris).
- Objectif principal : faire demander un diagnostic gratuit de 30 minutes
  (CTA répété dans toute la page).
- Cible : dirigeants de TPE/PME, cabinets médicaux, centres de formation,
  commerces et prestataires de services.
- Langue : français. Ton : professionnel, direct, rassurant, sans jargon.

## 2. Structure de la page (dans cet ordre, ancres de navigation)
1. Header fixe : logo lockup-horizontal, liens (Constat, Parcours, Avantage,
   Solutions, Subventions, Pourquoi, FAQ, Contact), bouton « Diagnostic 0 € »
   en couleur accent.
2. Hero : titre « Un problème visé. Un coût en moins. », sous-titre expliquant
   la promesse, 3 chiffres clés (coût −32 %, déploiement 4 jours, subventions
   jusqu'à 70 %), 2 boutons (Demander le diagnostic / Découvrir le constat).
3. Constat : 4 cartes douleur (ressaisies manuelles 14 h/mois, impayés,
   −8 % de revenus liés aux relances absentes, abonnements logiciels inutiles).
4. Parcours : 5 étapes numérotées (diagnostic chiffré, cadrage à prix fixe,
   déploiement en 4 jours, mise en service et formation, suivi et garantie).
   Bouton « Lancer un diagnostic sans frais ».
5. Avantage : tableau comparatif « Agence classique » vs « Nomira »
   (délais, devis, code, 3 points par colonne). Badge « Garantie 4 jours ».
   Trois blocs : calendrier ferme, zéro frais masqué, propriété intégrale des données.
6. Micro-solutions : 3 cartes sectorielles (Santé & cabinets médicaux,
   Formation & établissements, Commerces & prestataires), chacune avec
   un chiffre clé, 3 fonctionnalités et un bouton « Chiffrer ce cas d'usage ».
   Encart « Votre métier a un workflow particulier ? » avec bouton
   « Décrire votre processus ».
7. Subventions : 3 blocs (éligibilité vérifiée, dossier clé en main,
   zéro avance lourde). Mention : « Étude confidentielle, sans obligation ».
8. Différenciateurs : 4 points (maîtrise des flux métiers, forfait fixe,
   code pérenne et réversible, subventions mobilisées).
9. FAQ : accordéon (coût, délai de 4 jours, compétences techniques requises,
   suivi après mise en service, fonctionnement des aides, secteur spécifique).
   [Réponses à rédiger à partir des informations fournies ci-dessous]
10. Formulaire de diagnostic : nom et prénom, téléphone ou WhatsApp,
    entreprise et secteur, point de friction principal (champ texte).
    Mention : « Réponse sous 24h ouvrées · Données 100 % confidentielles ».
11. Footer (fond #131B24, logo en version fond sombre si disponible) :
    coordonnées, liens WhatsApp, email, QR code, mentions légales,
    politique de confidentialité, © année.

## 3. Coordonnées et éléments à intégrer
- Téléphone : +212 6 61 57 42 47
- WhatsApp : https://wa.me/212661574247 (bouton flottant optionnel, couleur accent)
- Email : contact@nomira.ma
- Site : www.nomira.ma
- Villes : Casablanca · Paris

## 4. Exigences techniques
- Stack : [ex. Next.js + Tailwind CSS, ou HTML/CSS/JS statique], avec les
  couleurs déclarées dans la configuration Tailwind ou les variables CSS.
- Déploiement : Vercel
- SEO : balises title et meta description, Open Graph, Twitter card, données
  structurées (Organization, LocalBusiness), sitemap, robots.txt, locale fr_FR
- Performance : score Lighthouse > 90, SVG optimisés, images en WebP, lazy loading
- Accessibilité : contrastes WCAG AA, navigation clavier, labels de formulaire
- Formulaire : validation côté client, envoi vers [email / CRM / API à préciser],
  message de confirmation, protection anti-spam (honeypot ou reCAPTCHA)
- Analytics : [Google Analytics / Plausible] avec suivi des clics sur les CTA

## 5. Conformité
- Bannière cookies si analytics, politique de confidentialité conforme à la loi
  marocaine 09-08 (CNDP) et au RGPD si ciblage européen.
- Pages légales : mentions légales, confidentialité (à rédiger, pas d'ancre vide).

## 6. Étapes de réalisation à respecter
1. Proposer l'arborescence et la maquette (sections, hiérarchie visuelle,
   application de la palette) et attendre ma validation.
2. Définir le design system : variables de couleurs, typographie, espacements,
   composants.
3. Développer les sections dans l'ordre ci-dessus, en composants réutilisables.
4. Intégrer le formulaire et le suivi.
5. Optimiser le SEO, la performance et l'accessibilité.
6. Tester (mobile, navigateurs, contrastes, formulaire, liens) et livrer un
   récapitulatif des éléments à valider par moi (chiffres, textes légaux).

## 7. Contraintes de contenu
- N'utilise aucun chiffre sans indication qu'il doit être validé par moi.
- Signale tout texte que tu juges incohérent ou non vérifiable.
- Rédige les réponses FAQ à partir des informations suivantes : [à compléter].

Commence par l'étape 1 et pose-moi les questions nécessaires avant de coder.