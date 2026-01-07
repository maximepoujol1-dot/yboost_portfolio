## Index.html

<!doctype html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio — Maxime Poujol</title>
    <meta name="description" content="CV/Portfolio personnel de Maxime Poujol">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <!-- HEADER inchangé -->
    <header>
        <nav class="nav container" aria-label="Navigation principale">
            <div class="brand">
                <img class="avatar" src="../assets/images/moi.jpg" alt="Photo de Maxime Collette Poujol">
                <span><a href="index.html" role="menuitem"> Maxime Collette Poujol</a></span>
            </div>
            <div class="links" role="menubar" aria-label="Liens de section">
                <a href="a-propos.html" role="menuitem">À propos</a>
                <a href="competences.html" role="menuitem">Compétences</a>
                <a href="projets.html" role="menuitem">Projets</a>
                <a href="contact.html" role="menuitem">Contact</a>
            </div>
            <div class="actions">
                <button id="themeToggle" class="btn" aria-pressed="false" aria-label="Basculer thème">🌙</button>
            </div>
        </nav>
    </header>

    <!-- MODIF: main reste dans .container mais le layout global est géré en CSS (body flex + main flex:1) -->
    <main class="container">
        <section class="hero">
            <div class="hero-card reveal">
                <span class="badge">Disponible pour alternance · Remote possible</span>
                <h1>Développeur débutant, motivé et curieux </h1>
                <p class="lead">Interfaces propres, accessibles et rapides. Projets, compétences et contact ci-dessous.</p>
                <div class="hero-cta">
                    <a class="btn btn-primary" href="projets.html">Voir mes projets</a>
                    <a class="btn" href="competences.html">Mes compétences</a>
                </div>
            </div>
            <!-- Photo -->
            <div class="hero-card reveal delay-1">
                <img
                    src="../assets/images/moi.jpg"
                    alt="Portrait de Maxime Poujol"
                    class="hero-photo"
                />
            </div>
        </section>
    </main>

    <!-- MODIF MAJEURE FOOTER:
         - On enlève class="container" directement sur <footer>
         - On ajoute une div intérieure .container pour garder le contenu centré
         - Cela permet au footer de prendre 100% de la largeur de l’écran -->
    <footer>
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <span id="footerNote"></span>
            <span>Visites sur cet appareil: <strong id="visitCounter">0</strong></span>
        </div>
    </footer>

    <script src="../assets/js/main.js"></script>
</body>
</html>

## a-propos.html

<!doctype html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>À propos — Maxime Poujol</title>
    <meta name="description" content="À propos de Maxime Poujol">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav class="nav container" aria-label="Navigation principale">
            <div class="brand">
                <img class="avatar" src="../assets/images/moi.jpg" alt="Photo de Maxime Collette Poujol">
                <span><a href="index.html" role="menuitem"> Maxime Collette Poujol</a></span>
            </div>
            <div class="links" role="menubar" aria-label="Liens de section">
                <a href="a-propos.html" role="menuitem" aria-current="page">À propos</a>
                <a href="competences.html" role="menuitem">Compétences</a>
                <a href="projets.html" role="menuitem">Projets</a>
                <a href="contact.html" role="menuitem">Contact</a>
            </div>
            <div class="actions">
                <button id="themeToggle" class="btn" aria-pressed="false" aria-label="Basculer thème">🌙</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section class="section" id="a-propos">
            <h2>À propos</h2>
            <div class="card reveal">
                <p>Je m’appelle Maxime. Ce site est en HTML, CSS et JS “vanilla” pour maîtriser les bases.</p>
                <p>Je suis un étudiant, polyvalent, sérieux et motivé. Habitué à travailler en équipe comme en autonomie prêt à m’investir pleinement et à développer mes compétences.</p>
                <p> Référence :</p>
                <p> - Première année d'étude chez Ynov Bordeaux</p>
                <p> - Bac général en specialité mathématique et NSI au lycée Fernand Daguin </p>
                <p> - Assistant professeur en club de judo </p>
                <p> - Stage en pharmacie </p>
                <p> Lien utile :</p>

                <!-- MODIF MINEURE: lien GitHub simplifié pour éviter la syntaxe cassée -->
                <a href="https://github.com/maximepoujol1-dot" target="_blank" rel="noopener noreferrer">
                    https://github.com/maximepoujol1-dot
                </a>

                <p class="help">Astuce: le code inclut carrousel, filtrage, mode sombre et validation.</p>
            </div>
        </section>
    </main>

    <!-- MEME MODIF DE FOOTER QUE SUR INDEX -->
    <footer>
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <span id="footerNote"></span>
            <span>Visites sur cet appareil: <strong id="visitCounter">0</strong></span>
        </div>
    </footer>

    <script src="../assets/js/main.js"></script>
</body>
</html>

## competence.html

<!doctype html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Compétences — Maxime Poujol</title>
    <meta name="description" content="Compétences de Maxime Poujol">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav class="nav container" aria-label="Navigation principale">
            <div class="brand">
                <img class="avatar" src="../assets/images/moi.jpg" alt="Photo de Maxime Collette Poujol">
                <span><a href="index.html" role="menuitem"> Maxime Collette Poujol</a></span>
            </div>
            <div class="links" role="menubar" aria-label="Liens de section">
                <a href="a-propos.html" role="menuitem">À propos</a>
                <a href="competences.html" role="menuitem" aria-current="page">Compétences</a>
                <a href="projets.html" role="menuitem">Projets</a>
                <a href="contact.html" role="menuitem">Contact</a>
            </div>
            <div class="actions">
                <button id="themeToggle" class="btn" aria-pressed="false" aria-label="Basculer thème">🌙</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section id="competences" class="section">
            <h2>Compétences</h2>
            <div class="grid">
                <div class="card reveal">
                    <h3>Hard skills</h3>
                    <div class="tags">
                        <span class="tag">Golang</span>
                        <span class="tag">C#</span>
                        <span class="tag">Python</span>
                    </div>
                </div>
                <div class="card reveal delay-1">
                    <h3>Soft skills</h3>
                    <div class="tags">
                        <span class="tag">Polyvalence</span>
                        <span class="tag">Sérieux</span>
                        <span class="tag">Motivation</span>
                        <span class="tag">Travail en équipe</span>
                        <span class="tag">Autonomie</span>
                    </div>
                </div>
                <div class="card reveal delay-2">
                    <h3>Outils</h3>
                    <div class="tags">
                        <span class="tag">Git</span>
                        <span class="tag">DevTools</span>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- MEME MODIF DE FOOTER -->
    <footer>
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <span id="footerNote"></span>
            <span>Visites sur cet appareil: <strong id="visitCounter">0</strong></span>
        </div>
    </footer>

    <script src="../assets/js/main.js"></script>
</body>
</html>

## projet.html

<!doctype html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Projets — Maxime Poujol</title>
    <meta name="description" content="Projets de Maxime Poujol">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav class="nav container" aria-label="Navigation principale">
            <div class="brand">
                <img class="avatar" src="../assets/images/moi.jpg" alt="Photo de Maxime Collette Poujol">
                <span><a href="index.html" role="menuitem"> Maxime Collette Poujol</a></span>
            </div>
            <div class="links" role="menubar" aria-label="Liens de section">
                <a href="a-propos.html" role="menuitem">À propos</a>
                <a href="competences.html" role="menuitem">Compétences</a>
                <a href="projets.html" role="menuitem" aria-current="page">Projets</a>
                <a href="contact.html" role="menuitem">Contact</a>
            </div>
            <div class="actions">
                <button id="themeToggle" class="btn" aria-pressed="false" aria-label="Basculer thème">🌙</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section id="projets" class="section">
            <h2>Projets</h2>
            <div class="card reveal">
                <!-- Filtres par statut -->
                <div class="filters" id="filters-status" role="tablist" aria-label="Filtrer par statut">
                    <button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">Tous</button>
                    <button class="filter-btn" data-filter="fini" role="tab">Fini</button>
                    <button class="filter-btn" data-filter="en-cours" role="tab">En cours</button>
                </div>

                <!-- Filtres par catégorie -->
                <div class="filters" id="filters-category" role="tablist" aria-label="Filtrer par catégorie">
                    <button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">Toutes</button>
                    <button class="filter-btn" data-filter="web" role="tab">Web</button>
                    <button class="filter-btn" data-filter="reseau" role="tab">Réseau</button>
                    <button class="filter-btn" data-filter="autres" role="tab">Autres</button>
                </div>

                <!-- CARROUSEL avec vraies images -->
                <div class="carousel" aria-roledescription="carrousel" aria-label="Projets en vedette">
                    <div class="carousel-track" id="carouselTrack">
                        <!-- Slide 1 -->
                        <article class="slide" data-status="fini" data-category="web">
                            <img class="thumb-img" src="../assets/images/Abyss_fall.png" alt="Projet Red — visuel">
                            <div>
                                <h3>Projet Red (Golang)</h3>
                                <p class="meta">Statut: Fini · Catégorie: Web</p>
                                <p>Implémentation en Go. Bonnes pratiques, tests de base.</p>
                            </div>
                        </article>

                        <!-- Slide 2 -->
                        <article class="slide" data-status="fini" data-category="web">
                            <img class="thumb-img" src="../assets/images/Connect.png" alt="Power 4 — visuel">
                            <div>
                                <h3>Power 4 (Go)</h3>
                                <p class="meta">Statut: Fini · Catégorie: Web</p>
                                <p>Jeu puissance 4 en Go. Gestion du plateau et des conditions de victoire.</p>
                            </div>
                        </article>

                        <!-- Slide 3 -->
                        <article class="slide" data-status="en-cours" data-category="autres">
                            <img class="thumb-img" src="../assets/images/placeholder.jpg" alt="Golem — image à venir">
                            <div>
                                <h3>Golem — Projet Ydays</h3>
                                <p class="meta">Statut: En cours · Catégorie: Autres</p>
                                <p>Travail d’équipe, architecture modulaire, itérations rapides.</p>
                            </div>
                        </article>
                    </div>
                    <div class="carousel-controls" id="carouselDots" aria-label="Choisir la diapositive"></div>
                </div>

                <!-- Grille de projets -->
                <div class="projects-grid" id="projectsGrid" style="margin-top: 12px;">
                    <article class="project" data-status="fini" data-category="web">
                        <img class="cover" src="../assets/images/Abyss_fall.png" alt="Vignette du projet Projet Red">
                        <div class="content">
                            <h4>Projet Red</h4>
                            <p class="meta">Golang · Statut: Fini · Catégorie: Web</p>
                        </div>
                    </article>

                    <article class="project" data-status="fini" data-category="web">
                        <img class="cover" src="../assets/images/Connect.png" alt="Vignette du projet Power 4 en Go">
                        <div class="content">
                            <h4>Power 4</h4>
                            <p class="meta">Go · Statut: Fini · Catégorie: Web</p>
                        </div>
                    </article>

                    <article class="project" data-status="en-cours" data-category="autres">
                        <img class="cover" src="../assets/images/placeholder.jpg" alt="Image à venir pour Golem (Ydays)">
                        <div class="content">
                            <h4>Golem (Ydays)</h4>
                            <p class="meta">Collab · Statut: En cours · Catégorie: Autres</p>
                        </div>
                    </article>

                    <article class="project" data-status="en-cours" data-category="web">
                        <img class="cover" src="../assets/images/placeholder.jpg" alt="Image à venir pour Portfolio en Prompt Engineering">
                        <div class="content">
                            <h4>Portfolio en Prompt Engineering</h4>
                            <p class="meta">IA/Prompt · Statut: En cours · Catégorie: Web</p>
                        </div>
                    </article>

                    <article class="project" data-status="fini" data-category="reseau">
                        <img class="cover" src="../assets/images/projet-reseau-power4.jpg" alt="Vignette du projet Réseau Power 4">
                        <div class="content">
                            <h4>Projets réseau — Power 4</h4>
                            <p class="meta">Réseau/Go · Statut: Fini · Catégorie: Réseau</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>

    <!-- MEME FOOTER -->
    <footer>
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <span id="footerNote"></span>
            <span>Visites sur cet appareil: <strong id="visitCounter">0</strong></span>
        </div>
    </footer>

    <script src="../assets/js/main.js"></script>
</body>
</html>

## contact

<!doctype html>
<html lang="fr" data-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact — Maxime Poujol</title>
    <meta name="description" content="Contactez Maxime Poujol">
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <header>
        <nav class="nav container" aria-label="Navigation principale">
            <div class="brand">
                <img class="avatar" src="../assets/images/moi.jpg" alt="Photo de Maxime Collette Poujol">
                <span><a href="index.html" role="menuitem"> Maxime Collette Poujol</a></span>
            </div>
            <div class="links" role="menubar" aria-label="Liens de section">
                <a href="a-propos.html" role="menuitem">À propos</a>
                <a href="competences.html" role="menuitem">Compétences</a>
                <a href="projets.html" role="menuitem">Projets</a>
                <a href="contact.html" role="menuitem" aria-current="page">Contact</a>
            </div>
            <div class="actions">
                <button id="themeToggle" class="btn" aria-pressed="false" aria-label="Basculer thème">🌙</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section id="contact" class="section">
            <h2>Contact</h2>
            <div class="card reveal">
                <form id="contactForm" novalidate>
                    <div class="field" id="f-name">
                        <label for="name">Nom</label>
                        <input type="text" id="name" name="name" placeholder="Votre nom" autocomplete="name" required minlength="2" />
                        <span class="error">Entrez au moins 2 caractères.</span>
                    </div>

                    <div class="field" id="f-email">
                        <label for="email">Email</label>
                        <!-- MODIF: correction de l’attribut placeholder (la version précédente contenait une syntaxe Markdown cassée) -->
                        <input type="email" id="email" name="email" placeholder="vous@example.com" autocomplete="email" required />
                        <span class="error">Entrez un email valide.</span>
                    </div>

                    <div class="field" id="f-message">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Votre message" required minlength="10"></textarea>
                        <span class="error">Entrez au moins 10 caractères.</span>
                    </div>

                    <p class="help">
                        La validation est en temps réel. <br>
                        Aucune donnée n’est envoyée (démo)
                    </p>

                    <div style="display:flex; gap:10px; align-items:center;">
                        <button type="submit" class="btn btn-primary">Envoyer</button>
                        <span id="formStatus" aria-live="polite"></span>
                    </div>
                </form>
            </div>
        </section>
    </main>

    <!-- MEME FOOTER -->
    <footer>
        <div class="container" style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <span id="footerNote"></span>
            <span>Visites sur cet appareil: <strong id="visitCounter">0</strong></span>
        </div>
    </footer>

    <script src="../assets/js/main.js"></script>
</body>
</html>


## style.css

:root {
    --bg: #0f172a;
    --bg-soft: #111827;
    --text: #e5e7eb;
    --muted: #94a3b8;
    --primary: #6366f1;
    --primary-contrast: #ffffff;
    --card: #111827;
    --border: #1f2937;
    --shadow: 0 10px 30px rgba(0,0,0,0.25);
    --radius: 14px;
    --radius-sm: 10px;
    --ring: 0 0 0 3px rgba(99,102,241,0.35);
}

/* Thème clair */
:root[data-theme="light"] {
    --bg: #f8fafc;
    --bg-soft: #ffffff;
    --text: #0f172a;
    --muted: #475569;
    --primary: #4f46e5;
    --primary-contrast: #ffffff;
    --card: #ffffff;
    --border: #e5e7eb;
    --shadow: 0 10px 24px rgba(2,6,23,0.08);
    --ring: 0 0 0 3px rgba(79,70,229,0.25);
}

* {
    box-sizing: border-box;
}

/* MODIF IMPORTANTE POUR LE LAYOUT GLOBAL:
   - body devient un flex container vertical
   - min-height: 100vh pour couvrir toute la hauteur
   - main pourra prendre l’espace restant, ce qui pousse le footer en bas */
html, body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
    background: radial-gradient(1200px 800px at 80% -10%, rgba(99,102,241,0.15), transparent), var(--bg);
    color: var(--text);
    line-height: 1.6;
}

/* MODIF: body en flex column pour sticky footer */
body {
    display: flex;              /* ajout */
    flex-direction: column;     /* ajout */
    min-height: 100vh;          /* ajout */
}

/* MODIF: main prend toute la hauteur disponible entre header et footer */
main {
    flex: 1;                    /* ajout: permet au main de s’étirer, footer reste en bas */
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px;
}

/* Header / Nav */
header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: color-mix(in oklab, var(--bg-soft) 85%, transparent);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 24px;
}

.brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
}

.brand .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), #22c55e);
    box-shadow: var(--shadow);
}

.nav a {
    color: var(--muted);
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 10px;
}

.nav a:hover,
.nav a:focus {
    color: var(--text);
    background: color-mix(in oklab, var(--primary) 14%, transparent);
    outline: none;
}

.actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn {
    border: 1px solid var(--border);
    background: var(--bg-soft);
    color: var(--text);
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    transition: transform .15s ease, background .2s ease, border-color .2s ease;
}

.btn:hover {
    transform: translateY(-1px);
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--primary) 60%, #000));
    color: var(--primary-contrast);
    border-color: transparent;
    box-shadow: 0 8px 20px color-mix(in oklab, var(--primary) 25%, transparent);
}

.btn-primary:focus {
    box-shadow: var(--ring);
    outline: none;
}

/* Hero */
.hero {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 28px;
    align-items: center;
    padding: 56px 24px;
}

.hero-card {
    background: linear-gradient(0deg, color-mix(in oklab, var(--card) 86%, transparent), var(--card));
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    box-shadow: var(--shadow);
    overflow: hidden;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid var(--border);
    color: var(--muted);
    background: color-mix(in oklab, var(--primary) 10%, transparent);
    font-size: 12px;
}

h1 {
    margin: 10px 0 8px;
    font-size: clamp(28px, 4vw, 40px);
    line-height: 1.2;
}

.lead {
    color: var(--muted);
    font-size: 16px;
}

.hero-cta {
    margin-top: 18px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

/* Sections / cartes */
.section {
    margin: 28px 0;
}

.section h2 {
    font-size: 22px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 18px;
    box-shadow: var(--shadow);
    overflow: hidden;
}

/* Tags */
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag {
    padding: 6px 10px;
    font-size: 13px;
    color: var(--muted);
    border: 1px solid var(--border);
    border-radius: 999px;
    background: color-mix(in oklab, var(--bg) 85%, var(--bg-soft));
}

/* Projets (statuts) */
.filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 10px;
}

.filter-btn {
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--bg-soft);
    color: var(--muted);
    cursor: pointer;
}

.filter-btn.active,
.filter-btn:focus {
    color: var(--text);
    background: color-mix(in oklab, var(--primary) 16%, transparent);
    outline: none;
}

.carousel {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border);
    background: var(--bg-soft);
}

.carousel-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    transition: transform .5s ease;
}

.slide {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 16px;
    align-items: center;
}

.slide .thumb {
    aspect-ratio: 16/10;
    border-radius: 12px;
    background: linear-gradient(135deg, color-mix(in oklab, var(--primary) 40%, transparent), color-mix(in oklab, var(--bg) 80%, var(--bg-soft)));
    border: 1px solid var(--border);
}

.carousel-controls {
    position: absolute;
    inset: auto 0 8px 0;
    display: flex;
    justify-content: center;
    gap: 10px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: color-mix(in oklab, var(--text) 35%, transparent);
    border: 1px solid var(--border);
    cursor: pointer;
}

.dot.active {
    background: var(--primary);
    border-color: transparent;
}

/* Grille filtrable */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.project {
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    background: var(--bg-soft);
    transition: transform .15s ease, opacity .2s ease;
}

.project.hide {
    opacity: 0;
    transform: scale(.98);
    pointer-events: none;
}

/* Images de projet */
.project .cover {
    display: block;
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-bottom: 1px solid var(--border);
    background: linear-gradient(135deg,
        color-mix(in oklab, var(--primary) 35%, transparent),
        color-mix(in oklab, var(--bg) 85%, var(--bg-soft))
    );
}

.project .content {
    padding: 12px;
}

.project .meta {
    color: var(--muted);
    font-size: 13px;
}

/* Formulaire */
form {
    display: grid;
    gap: 12px;
}

.field {
    display: grid;
    gap: 6px;
}

label {
    font-weight: 600;
}

input,
textarea,
select {
    background: var(--bg-soft);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 10px 12px;
    box-shadow: inset 0 -1px 0 rgba(0,0,0,0.05);
    transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    box-shadow: var(--ring);
    border-color: transparent;
}

.help {
    font-size: 13px;
    color: var(--muted);
}

.error {
    font-size: 13px;
    color: #ef4444;
    display: none;
}

.field.invalid .error {
    display: block;
}

.field.valid input,
.field.valid textarea {
    border-color: #22c55e;
}

/* Footer */
/* MODIF:
   - footer n’est plus limité par .container → il peut prendre 100% de la largeur
   - padding latéral cohérent avec le reste
   - pas de width: auto / max-width ici, c’est le .container interne qui centre le contenu */
footer {
    margin-top: 28px;
    padding: 16px 24px;
    color: var(--muted);
    border-top: 1px solid var(--border);
    background: color-mix(in oklab, var(--bg-soft) 85%, transparent);
}

/* Animations d’entrée */
.reveal {
    opacity: 0;
    transform: translateY(12px);
    animation: fadeUp .7s ease forwards;
}

.reveal.delay-1 {
    animation-delay: .1s;
}

.reveal.delay-2 {
    animation-delay: .2s;
}

.reveal.delay-3 {
    animation-delay: .3s;
}

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .hero {
        grid-template-columns: 1fr;
    }

    .slide {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 860px)  {
    .grid {
        grid-template-columns: 1fr 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 560px)  {
    .grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .nav {
        flex-wrap: wrap;
    }
}

/* Optionnel: avatar image si tu ajoutes assets/images/avatar.jpg */
.brand .avatar {
    background: center/cover no-repeat url('../images/avatar.jpg'),
        linear-gradient(135deg, var(--primary), #22c55e);
}

/* Images dans le carrousel (option A) */
.slide .thumb-img {
    width: 100%;
    aspect-ratio: 16/10;
    border-radius: 12px;
    border: 1px solid var(--border);
    object-fit: cover;
    display: block;
}

.brand .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow);
}

.hero-photo {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 16px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    display: block;
}