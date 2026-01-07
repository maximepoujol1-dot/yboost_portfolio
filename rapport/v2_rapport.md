# YBOOST Portfolio V2

## Contexte de réalisation

Le projet **YBOOST Portfolio V2** a été réalisé à l’aide d’une **IA (Notion)** et reprend le projet Yboost v1.
La principale différence reside dans la séparation des différentes catégories sur plusieurs pages.
Ce document correspond **à un échange réel** avec l’IA, retranscrit et **mis en forme en Markdown**, sans réécriture du fond, afin de conserver un contenu authentique.

---

## Échange avec l’IA

### Projet : YBOOST Portfolio V2

Le projet a été réalisé à l’aide de l’IA **« Notion »**

---

### Premier prompt

> Mets toi en position de mentor et explique clairement comment tu fais les modification lors d’un compte rendu en fin de réponse. J’ai commencé un portfolio mais j’aimerai faire plusieurs modification. j’aimerai premièrement séparer chacune des catégorie en page dédié En suite j’aimerai réaliser des image dans la catégorie projet sur les projet fini voici les code :

---

### Première réponse de l’IA

> Super base, Maxime. On va procéder en mentor: d’abord la stratégie, puis les modifications concrètes à copier-coller, et enfin un “compte rendu” clair de comment j’ai fait chaque modif.

---

#### Objectif

* Séparer chaque catégorie en pages dédiées :
  **À propos, Compétences, Projets, Contact**
* Ajouter des emplacements d’images pour les projets “fini” + créer un dossier d’images à compléter plus tard

---

#### 1) Nouvelle arborescence de fichiers

```text
index.html
a-propos.html
competences.html
projets.html
contact.html
style.css
main.js
images/
 ├─ projet-red.jpg
 ├─ power4.jpg
 ├─ projet-reseau-power4.jpg
 ├─ ...
 └─ avatar.jpg (optionnel)
```

> Crée juste le dossier images vide maintenant. Tu le rempliras ensuite.

---

#### 2) Mettre à jour la navigation

* Remplacer la navigation basée sur des ancres par des liens vers les pages dédiées
* Conserver la section "hero" dans `index.html`
* Le bouton **« Me contacter »** redirige vers la page Contact

---

#### 3) Créer les pages dédiées

* Copier-coller l’entête et le pied de page de `index.html`
* Ne conserver que la section correspondante dans chaque page

##### 3.1 `a-propos.html`

* Contient uniquement la section **À propos**

##### 3.2 `competences.html`

* Contient uniquement la section **Compétences**

##### 3.3 `contact.html`

* Contient uniquement le formulaire **Contact**
* Le JS de validation reste dans `main.js`

##### 3.4 `projets.html`

* Contient la section **Projets**
* Ajout d’emplacements d’images via de vraies balises `<img>` pointant vers `images/`

---

#### 4) CSS – gestion des images

* Autoriser l’utilisation de `<img>` dans la grille de projets
* Conserver les styles existants
* Utilisation de `object-fit: cover`

> Possibilité d’utiliser un `placeholder.jpg` si les images ne sont pas encore prêtes.

---

#### 5) JavaScript – robustesse

* Le fichier `main.js` reste commun à toutes les pages
* Ajout de vérifications avant l’exécution de certains modules
* Modules concernés :

  * Carrousel
  * Filtrage

> Les autres fonctionnalités (thème, visites, reveal, validation) restent inchangées.

---

#### 6) Accessibilité et SEO

* Ajout d’attributs `alt` sur les images
* Utilisation de `aria-current="page"` pour la navigation
* Titres de pages distincts

---

#### 7) Où mettre les images

* Toutes les images sont stockées dans le dossier `images/`
* Nommage simple : `projet-red.jpg`, `power4.jpg`, etc.
* Ajustement ultérieur possible sans modifier le JS

---

### Compte rendu – Méthode utilisée par l’IA

* **Séparation des catégories**
  Création de 4 pages HTML distinctes et transformation de la navigation ancrée en navigation inter-pages.

* **Images pour les projets finis**
  Remplacement des blocs décoratifs par de vraies balises `<img>` avec gestion CSS adaptée.

* **Robustesse du JavaScript**
  Protection des modules pour éviter les erreurs sur les pages où les éléments n’existent pas.

* **Structure du projet**
  Proposition d’une arborescence claire avec un dossier `images/`.

* **Style et accessibilité**
  Conservation des styles existants et ajout des bonnes pratiques (alt, aria).

---

## Ajustements manuels après l’échange

Après la réponse de l’IA :

* Réorganisation manuelle de l’arborescence des fichiers
* Correction des erreurs potentielles
* Harmonisation globale du projet

---


### Les modification mineure suivante du projet ont été réalisé à la main.

### second prompt de la v2

> Mets toi en position de mentor et explique clairement comment tu fais les modification lors d’un compte rendu en fin de réponse. J’ai commencé un portfolio mais j’aimerai faire plusieurs modification. j’aimerai premièrement séparer chacune des catégorie en page dédié En suite j’aimerai réaliser des image dans la catégorie projet sur les projet fini voici les code :

---

### seconde réponse de l’IA

Tu as déjà une très bonne base, bravo. On va corriger le problème de “barre du bas” (footer) de manière propre et responsive, sans casser tes cartes (`card`) ni tes sections.

## Principe général des changements

1. **Mettre le footer collé en bas** même quand la page est courte  
    
    → on transforme la page en **layout flex vertical** :  
    
    `body` devient un flex container en colonne, `main` prend toute la hauteur disponible, `footer` se cale en bas.
    
2. **Avoir un footer pleine largeur, contenu centré comme le reste**  
    
    → le `footer` ne doit pas être limité par `.container`.  
    
    On laisse le footer occuper **100% de la largeur** et on met une `.container` *à l’intérieur* du footer pour centrer son contenu.
    
3. **Ne pas changer la taille des cartes / sections**  
    
    → on ne touche pas au CSS de `.card`, `.section`, `.hero`, etc.  
    
    On ajoute seulement quelques règles pour le layout global et le footer.
    

Je te réécris ci‑dessous **tous les fichiers**, avec les changements commentés.

---

## 1. `index.html` (page d’accueil) voir seconde réponse

```

### Changements effectués dans `index.html`

- `footer class="container"` → `footer` simple + **div `.container` interne**.
    
    > Objectif : footer pleine largeur mais contenu centré.
    > 
- Aucun changement sur les cartes ou la structure du `main`.

---

## 2. `a-propos.html` voir seconde réponse

```

### Changements effectués dans `a-propos.html`

- `footer class="container"` → `footer` + `div.container` interne, comme sur `index.html`.
- Lien GitHub corrigé (ta version contenait une syntaxe Markdown entre crochets qui cassait le HTML).

---

## 3. `competences.html` voir seconde réponse


### Changements effectués dans `competences.html`

- Seule modification : même pattern de footer pleine largeur que sur les autres pages.
- Aucune modification sur `.grid` ni les cartes, donc pas d’impact sur leurs tailles.

---

## 4. `projets.html` voir seconde réponse


```

### Changements effectués dans `projets.html`

- Idem : `footer` sortie de `.container` pour être pleine largeur.
- Aucun changement sur carrousel, filtres, grid.

---

## 5. `contact.html` voir seconde réponse


```

### Changements effectués dans `contact.html`

- Footer pleine largeur comme les autres pages.
- Correction de l’attribut `placeholder` de l’input email (ta version contenait `[...]([mailto:placeholder%3D%22vous@example.com](mailto:placeholder%3D%22vous@example.com))` qui cassait le HTML).

---

## 6. `style.css` voir seconde réponse


---

## Résumé en mode “mentor”

- Pour faire un **footer collé en bas**, pense *layout global* avant de toucher au footer lui‑même :
    - `body` en `display:flex; flex-direction:column; min-height:100vh;`
    - `main { flex:1; }`
- Pour un footer **pleine largeur avec contenu centré**, ne lui donne pas `.container` directement :
    - `<footer>` plein écran
    - `<div class="container">` *dedans* pour aligner comme le reste.
- Comme tu as déjà bien isolé ton contenu dans `.container` et `.card`, ces changements n’impactent pas les tailles des encadrés.

Si tu veux, au prochain message, on peut aussi vérifier ensemble ton `main.js` pour voir comment tu gères le compteur de vues et adapter un peu le comportement sur mobile.
