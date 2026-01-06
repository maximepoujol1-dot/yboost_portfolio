# YBOOST Portfolio V1

## Contexte de réalisation

Le projet **YBOOST Portfolio V1** a été réalisé à l’aide de l’IA **« Notion »**.
Ce document est une **retranscription fidèle d’un échange réel** avec l’IA, mise en forme en **Markdown**, sans modification du fond ni interprétation du contenu.

---

## Échange avec l’IA

### Projet : YBOOST Portfolio V1

Le projet a été réalisé à l’aide de l’IA **« Notion »**

---

## Premier prompt

> Je dois réaliser en html personnel comme un CV
> Je suis un débutant.
> Prend un ton patient et pédagog ainsi que le role d'expert pour expliquer ce que tu fais.
> Elle doit comporter les sections : a propos, compétences, projets.
> Il faut générer le CSS de base avec un thème moderne.
> Il faut également ajouter un formulaire de contact personnel, créer un carrousel de projets avec JavaScript, Implémenter un mode sombre/clair, faire des animation d'entrée des éléments, créer un système de filtrage des projets par catégorie, créer un système validation du formulaire en temps réel, comporter un compteur de visites (localStorage).
> Enfin prévoit un Responsive design optimisé

---

## Première réponse de l’IA

> Super projet, Maxime ! Je vais te guider pas à pas, avec un exemple complet “prêt à copier-coller” dans un seul fichier HTML. Tu pourras ensuite séparer le CSS et le JS si tu veux.

### Objectifs couverts

* Sections : À propos, Compétences, Projets
* Thème moderne + responsive
* Formulaire de contact avec validation en temps réel
* Carrousel de projets en JavaScript
* Filtrage des projets par catégorie
* Mode sombre / clair
* Animations d’entrée des éléments
* Compteur de visites via `localStorage`

> Voir le fichier **première réponse** (contenu trop long pour être inclus ici)

---

### 2) Pourquoi ce choix technique (explications pédagogiques)

* **HTML sémantique** : balises `section`, `h1–h4`, `aria-labels` pour l’accessibilité et le SEO
* **Thème moderne** : variables CSS, dégradés doux, bordures subtiles, ombres modérées
* **Responsive** : grille CSS adaptative, `clamp()`, media queries (1024 / 860 / 560 px)
* **Animations** : `IntersectionObserver` pour de meilleures performances
* **Mode sombre / clair** : attribut `data-theme` sur `<html>` avec persistance via `localStorage`
* **Carrousel** : JavaScript vanilla (dots, clavier, auto-play, pause au survol)
* **Filtrage** : `data-category` sur chaque projet
* **Validation temps réel** : contraintes simples + regex email
* **Compteur de visites** : incrémentation via `localStorage`

---

### 3) Étapes pour l’essayer

1. Créer un dossier `portfolio`
2. Créer un fichier `index.html`
3. Coller le code fourni
4. Ouvrir `index.html` dans le navigateur
5. Personnaliser textes, projets, couleurs et avatar

---

## Deuxième prompt

> j’aimerai que tu sépare pour une meilleur visibilité et compréhension le projet en un fichier index, qui contient l’ html, une parti css et enfin une parti qui contient le javascript.
> (erreur lors de l’écriture du prompt qui a mené à refaire un mono fichier)

---

## Deuxième réponse de l’IA

> Parfait. Voici une version “monofichier” claire et structurée avec 3 parties bien séparées dans `index.html` :
>
> * Partie HTML
> * Partie CSS dans un bloc `<style>`
> * Partie JavaScript dans un bloc `<script>`

> Voir le fichier **deuxième réponse**

L’IA propose ensuite une version en trois fichiers séparés.

---

## Troisième prompt

> j’aimerai que tu sépare pour une meilleur visibilité et compréhension le projet en trois fichier, un fichier index, qui contient l’ html, une fichier css et enfin un fichier qui contient le javascript
(répétition de la question pour avoir un prompt correcte qui correspond a ma volonté de base)

---

## Troisième réponse de l’IA

> Super, voici la version en trois fichiers. Copie-colle chaque bloc dans le fichier correspondant.

> Voir le fichier **troisième réponse**

### Pour tester

1. Créer un dossier avec : `index.html`, `styles.css`, `main.js`
2. Ouvrir `index.html` dans le navigateur
3. Personnaliser textes, couleurs et projets

---

## Quatrième prompt

> je vais te donner une liste de projet, est ce que tu peux modifié le projet pour qu’il corresponde avec un filtre fini, et en cours :
> Projet Red en golang fini, power 4 en go fini, Golem (projet ydays) en cours, portefolio creer en prompt engenering, projets réseau power 4
>
> ensuite dans le « a propos » rajoute :
>
> “je suis professionnel, polyvalent, sérieux et motivé, je possède une forte capacité d’adaptation et un sens aigu du travail bien fait. Habitué à travailler en équipe comme en autonomie, je suis prêt à m’investir pleinement dans les missions qui me seront confiées et à développer mes compétences au sein de votre organisation.”
>
> enfin sépare les compétence en hard skills avec : golang, C# et python. puis les soft skill, tous ce qui est cité dans le a propos

---

## Quatrième réponse de l’IA

> Parfait, j’ai adapté le projet selon tes demandes.

Actions réalisées :

* Ajout des filtres **Fini / En cours**
* Mise à jour de la liste de projets avec leur statut
* Insertion du texte « À propos » (correction orthographique)
* Séparation des compétences en **Hard skills** et **Soft skills**
* Conservation de toutes les fonctionnalités existantes

> Voir le fichier **4ᵉ réponse**

L’IA pose ensuite une question de clarification sur le statut de certains projets.

---

## Dernier prompt

> il doit y avoir un petit problème car il a bien les catégorie dans les projets, fini et en cours mais rien dans les catégorie, comme avant il y avait les catégorie web qui afficher que le web etc

---

## Dernière réponse de l’IA

> Tu as raison : on est passé d’un filtre « catégorie » à un filtre « statut », donc le JavaScript ne gérait plus les deux en même temps.

### Solution proposée

* Deux barres de filtres :

  * **Statut** : Tous, Fini, En cours
  * **Catégorie** : Toutes, Web, Design, Autres
* Filtrage combiné (un projet s’affiche seulement s’il respecte les deux filtres)

> Voir le fichier **dernière réponse**

### Notes

* Les projets Go sont classés par défaut en **Web**
* Le projet Golem est classé en **Autres**
* Le CSS ne nécessite aucune modification
* Seule la partie **Filtrage** de `main.js` est remplacée

### Test rapide

* Cliquer sur **Fini** puis **Web** → affiche les projets finis de catégorie web
* Cliquer sur **En cours** puis **Toutes** → affiche tous les projets en cours

---
