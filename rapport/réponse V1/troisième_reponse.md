# troisième réponse et modification effectuée

# index.html :

<!doctype html>
<html lang="fr" data-theme="light">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Portfolio — Maxime Poujol</title>
	<meta name="description" content="CV/Portfolio personnel de Maxime Poujol">
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<header>
		<nav class="nav container" aria-label="Navigation principale">
			<div class="brand">
				<div class="avatar" aria-hidden="true"></div>
				<span>Maxime Poujol</span>
			</div>
			<div class="links" role="menubar" aria-label="Liens de section">
				<a href="#a-propos" role="menuitem">À propos</a>
				<a href="#competences" role="menuitem">Compétences</a>
				<a href="#projets" role="menuitem">Projets</a>
				<a href="#contact" role="menuitem">Contact</a>
			</div>
			<div class="actions">
				<button id="themeToggle" class="btn" aria-pressed="false" aria-label="Basculer thème">🌙</button>
				<a class="btn btn-primary" href="#contact">Me contacter</a>
			</div>
		</nav>
	</header>

	<main class="container">
		<section class="hero">
			<div class="hero-card reveal">
				<span class="badge">Disponible pour alternance · Remote possible</span>
				<h1>Développeur débutant, motivé et curieux</h1>
				<p class="lead">Interfaces propres, accessibles et rapides. Projets, compétences et contact ci-dessous.</p>
				<div class="hero-cta">
					<a class="btn btn-primary" href="#projets">Voir mes projets</a>
					<a class="btn" href="#competences">Mes compétences</a>
				</div>
			</div>
			<div class="hero-card reveal delay-1" aria-hidden="true">
				<div style="aspect-ratio:1/1; border-radius:16px; border:1px solid var(--border);
					background:
					conic-gradient(from 180deg at 60% 40%, color-mix(in oklab, var(--primary) 45%, transparent), transparent 25%),
					radial-gradient(400px 200px at 80% 0%, color-mix(in oklab, var(--primary) 18%, transparent), transparent),
					radial-gradient(300px 160px at 0% 80%, color-mix(in oklab, #22c55e 14%, transparent), transparent)"></div>
			</div>
		</section>

		<section id="a-propos" class="section">
			<h2>À propos</h2>
			<div class="card reveal">
				<p>Je m’appelle Maxime. Ce site est en HTML, CSS et JS “vanilla” pour maîtriser les bases.</p>
				<p class="help">Astuce: lis le code pour comprendre le carrousel, le filtrage, le mode sombre, et la validation.</p>
			</div>
		</section>

		<section id="competences" class="section">
			<h2>Compétences</h2>
			<div class="grid">
				<div class="card reveal">
					<h3>Front-end</h3>
					<div class="tags">
						<span class="tag">HTML sémantique</span>
						<span class="tag">CSS moderne</span>
						<span class="tag">Grid/Flex</span>
						<span class="tag">Accessibilité</span>
						<span class="tag">Animations</span>
					</div>
				</div>
				<div class="card reveal delay-1">
					<h3>JavaScript</h3>
					<div class="tags">
						<span class="tag">DOM</span>
						<span class="tag">Événements</span>
						<span class="tag">localStorage</span>
						<span class="tag">Validation</span>
						<span class="tag">Carrousel</span>
					</div>
				</div>
				<div class="card reveal delay-2">
					<h3>Outils</h3>
					<div class="tags">
						<span class="tag">Git</span>
						<span class="tag">DevTools</span>
						<span class="tag">Responsive</span>
						<span class="tag">SEO basique</span>
					</div>
				</div>
			</div>
		</section>

		<section id="projets" class="section">
			<h2>Projets</h2>
			<div class="card reveal">
				<div class="filters" role="tablist" aria-label="Filtrer par catégorie">
					<button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">Tous</button>
					<button class="filter-btn" data-filter="web" role="tab">Web</button>
					<button class="filter-btn" data-filter="design" role="tab">Design</button>
					<button class="filter-btn" data-filter="autres" role="tab">Autres</button>
				</div>

				<div class="carousel" aria-roledescription="carrousel" aria-label="Projets en vedette">
					<div class="carousel-track" id="carouselTrack">
						<article class="slide" data-category="web">
							<div class="thumb" aria-hidden="true"></div>
							<div>
								<h3>Site vitrine minimal</h3>
								<p class="meta">Catégorie: Web · 2025</p>
								<p>Responsive, clair/sombre, bonnes pratiques d’accessibilité.</p>
							</div>
						</article>
						<article class="slide" data-category="design">
							<div class="thumb" aria-hidden="true"></div>
							<div>
								<h3>Composants UI</h3>
								<p class="meta">Catégorie: Design · 2025</p>
								<p>Bibliothèque de cartes et boutons avec variables CSS.</p>
							</div>
						</article>
						<article class="slide" data-category="autres">
							<div class="thumb" aria-hidden="true"></div>
							<div>
								<h3>Mini‑app JS</h3>
								<p class="meta">Catégorie: Autres · 2025</p>
								<p>Persistence localStorage et validations en direct.</p>
							</div>
						</article>
					</div>
					<div class="carousel-controls" id="carouselDots" aria-label="Choisir la diapositive"></div>
				</div>

				<div class="projects-grid" id="projectsGrid" style="margin-top: 12px;">
					<article class="project" data-category="web">
						<div class="cover" aria-hidden="true"></div>
						<div class="content"><h4>Portfolio perso</h4><p class="meta">Web · HTML/CSS/JS</p></div>
					</article>
					<article class="project" data-category="web">
						<div class="cover"></div>
						<div class="content"><h4>Landing Page</h4><p class="meta">Web · Conversion</p></div>
					</article>
					<article class="project" data-category="design">
						<div class="cover"></div>
						<div class="content"><h4>Styleguide</h4><p class="meta">Design · Système de styles</p></div>
					</article>
					<article class="project" data-category="autres">
						<div class="cover"></div>
						<div class="content"><h4>Widget météo</h4><p class="meta">Autres · API</p></div>
					</article>
					<article class="project" data-category="design">
						<div class="cover"></div>
						<div class="content"><h4>Wireframes</h4><p class="meta">Design · Prototype</p></div>
					</article>
					<article class="project" data-category="web">
						<div class="cover"></div>
						<div class="content"><h4>Blog minimal</h4><p class="meta">Web · Contenu</p></div>
					</article>
				</div>
			</div>
		</section>

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
						<input type="email" id="email" name="email" placeholder="vous@example.com" autocomplete="email" required />
						<span class="error">Entrez un email valide.</span>
					</div>
					<div class="field" id="f-message">
						<label for="message">Message</label>
						<textarea id="message" name="message" rows="5" placeholder="Votre message" required minlength="10"></textarea>
						<span class="error">Entrez au moins 10 caractères.</span>
					</div>
					<p class="help">La validation est en temps réel. Aucune donnée n’est envoyée (démo).</p>
					<div style="display:flex; gap:10px; align-items:center;">
						<button type="submit" class="btn btn-primary">Envoyer</button>
						<span id="formStatus" aria-live="polite"></span>
					</div>
				</form>
			</div>
		</section>
	</main>

	<footer class="container">
		<div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
			<span>© <span id="year"></span> Maxime Poujol — Tous droits réservés</span>
			<span>Visites sur cet appareil: <strong id="visitCounter">0</strong></span>
		</div>
	</footer>

	<script src="main.js"></script>
</body>
</html>









# style.css :

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

* { box-sizing: border-box; }
html, body {
	margin: 0; padding: 0;
	font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
	background: radial-gradient(1200px 800px at 80% -10%, rgba(99,102,241,0.15), transparent), var(--bg);
	color: var(--text); line-height: 1.6;
}
.container { max-width: 1100px; margin: 0 auto; padding: 24px; }

/* Header / Nav */
header {
	position: sticky; top: 0; z-index: 50;
	background: color-mix(in oklab, var(--bg-soft) 85%, transparent);
	backdrop-filter: blur(10px);
	border-bottom: 1px solid var(--border);
}
.nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 24px; }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 700; }
.brand .avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), #22c55e); box-shadow: var(--shadow); }
.nav a { color: var(--muted); text-decoration: none; padding: 8px 12px; border-radius: 10px; }
.nav a:hover, .nav a:focus { color: var(--text); background: color-mix(in oklab, var(--primary) 14%, transparent); outline: none; }
.actions { display: flex; align-items: center; gap: 10px; }
.btn {
	border: 1px solid var(--border); background: var(--bg-soft); color: var(--text);
	padding: 10px 14px; border-radius: 12px; cursor: pointer;
	transition: transform .15s ease, background .2s ease, border-color .2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-primary {
	background: linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--primary) 60%, #000));
	color: var(--primary-contrast); border-color: transparent;
	box-shadow: 0 8px 20px color-mix(in oklab, var(--primary) 25%, transparent);
}
.btn-primary:focus { box-shadow: var(--ring); outline: none; }

/* Hero */
.hero { display: grid; grid-template-columns: 1.3fr 1fr; gap: 28px; align-items: center; padding: 56px 24px; }
.hero-card {
	background: linear-gradient(0deg, color-mix(in oklab, var(--card) 86%, transparent), var(--card));
	border: 1px solid var(--border); border-radius: var(--radius);
	padding: 28px; box-shadow: var(--shadow); overflow: hidden;
}
.badge {
	display: inline-flex; align-items: center; gap: 8px; padding: 6px 10px; border-radius: 999px;
	border: 1px solid var(--border); color: var(--muted);
	background: color-mix(in oklab, var(--primary) 10%, transparent); font-size: 12px;
}
h1 { margin: 10px 0 8px; font-size: clamp(28px, 4vw, 40px); line-height: 1.2; }
.lead { color: var(--muted); font-size: 16px; }
.hero-cta { margin-top: 18px; display: flex; gap: 12px; flex-wrap: wrap; }

/* Sections / cartes */
.section { margin: 28px 0; }
.section h2 { font-size: 22px; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 18px; box-shadow: var(--shadow); overflow: hidden; }

/* Compétences */
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
	padding: 6px 10px; font-size: 13px; color: var(--muted);
	border: 1px solid var(--border); border-radius: 999px;
	background: color-mix(in oklab, var(--bg) 85%, var(--bg-soft));
}

/* Projets */
.filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
.filter-btn {
	padding: 8px 12px; border-radius: 10px; border: 1px solid var(--border);
	background: var(--bg-soft); color: var(--muted); cursor: pointer;
}
.filter-btn.active, .filter-btn:focus { color: var(--text); background: color-mix(in oklab, var(--primary) 16%, transparent); outline: none; }

.carousel { position: relative; overflow: hidden; border-radius: var(--radius-sm); border: 1px solid var(--border); background: var(--bg-soft); }
.carousel-track { display: grid; grid-auto-flow: column; grid-auto-columns: 100%; transition: transform .5s ease; }
.slide { padding: 16px; display: grid; grid-template-columns: 1fr 1.4fr; gap: 16px; align-items: center; }
.slide .thumb {
	aspect-ratio: 16/10; border-radius: 12px;
	background: linear-gradient(135deg, color-mix(in oklab, var(--primary) 40%, transparent), color-mix(in oklab, var(--bg) 80%, var(--bg-soft)));
	border: 1px solid var(--border);
}
.carousel-controls { position: absolute; inset: auto 0 8px 0; display: flex; justify-content: center; gap: 10px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: color-mix(in oklab, var(--text) 35%, transparent); border: 1px solid var(--border); cursor: pointer; }
.dot.active { background: var(--primary); border-color: transparent; }

/* Grille filtrable */
.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.project { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; background: var(--bg-soft); transition: transform .15s ease, opacity .2s ease; }
.project.hide { opacity: 0; transform: scale(.98); pointer-events: none; }
.project .cover { height: 140px; background: linear-gradient(135deg, color-mix(in oklab, var(--primary) 35%, transparent), color-mix(in oklab, var(--bg) 85%, var(--bg-soft))); }
.project .content { padding: 12px; }
.project .meta { color: var(--muted); font-size: 13px; }

/* Formulaire */
form { display: grid; gap: 12px; }
.field { display: grid; gap: 6px; }
label { font-weight: 600; }
input, textarea, select {
	background: var(--bg-soft); color: var(--text);
	border: 1px solid var(--border); border-radius: 10px; padding: 10px 12px;
	box-shadow: inset 0 -1px 0 rgba(0,0,0,0.05);
	transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
}
input:focus, textarea:focus, select:focus { outline: none; box-shadow: var(--ring); border-color: transparent; }
.help { font-size: 13px; color: var(--muted); }
.error { font-size: 13px; color: #ef4444; display: none; }
.field.invalid .error { display: block; }
.field.valid input, .field.valid textarea { border-color: #22c55e; }

/* Footer */
footer {
	margin-top: 28px; padding: 16px 24px; color: var(--muted);
	border-top: 1px solid var(--border);
	background: color-mix(in oklab, var(--bg-soft) 85%, transparent);
}

/* Animations d’entrée */
.reveal { opacity: 0; transform: translateY(12px); animation: fadeUp .7s ease forwards; }
.reveal.delay-1 { animation-delay: .1s; }
.reveal.delay-2 { animation-delay: .2s; }
.reveal.delay-3 { animation-delay: .3s; }
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

/* Responsive */
@media (max-width: 1024px) { .hero { grid-template-columns: 1fr; } .slide { grid-template-columns: 1fr; } }
@media (max-width: 860px)  { .grid { grid-template-columns: 1fr 1fr; } .projects-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px)  { .grid, .projects-grid { grid-template-columns: 1fr; } .nav { flex-wrap: wrap; } }




# main.js :

// 1) Thème sombre/clair + persistance
(function theme() {
	const root = document.documentElement;
	const btn = document.getElementById('themeToggle');
	const saved = localStorage.getItem('theme');
	if (saved) root.setAttribute('data-theme', saved);

	function updateIcon() {
		const mode = root.getAttribute('data-theme') || 'light';
		btn.textContent = mode === 'light' ? '🌙' : '☀️';
		btn.setAttribute('aria-pressed', mode === 'dark');
	}
	updateIcon();

	btn.addEventListener('click', () => {
		const next = (root.getAttribute('data-theme') === 'light') ? 'dark' : 'light';
		root.setAttribute('data-theme', next);
		localStorage.setItem('theme', next);
		updateIcon();
	});
})();

// 2) Compteur de visites + année
(function visits() {
	const key = 'visit-count';
	const count = Number(localStorage.getItem(key) || 0) + 1;
	localStorage.setItem(key, String(count));
	document.getElementById('visitCounter').textContent = count;
	document.getElementById('year').textContent = new Date().getFullYear();
})();

// 3) Animations d’entrée à l’apparition
(function revealOnScroll() {
	const els = document.querySelectorAll('.reveal');
	const io = new IntersectionObserver((entries) => {
		for (const e of entries) {
			if (e.isIntersecting) {
				e.target.style.animationPlayState = 'running';
				io.unobserve(e.target);
			}
		}
	}, { threshold: 0.12 });
	els.forEach(el => io.observe(el));
})();

// 4) Carrousel accessible
(function carousel() {
	const track = document.getElementById('carouselTrack');
	const slides = Array.from(track.children);
	const dotsWrap = document.getElementById('carouselDots');
	let index = 0;

	function goTo(i) {
		index = (i + slides.length) % slides.length;
		track.style.transform = `translateX(-${index * 100}%)`;
		updateDots();
	}
	function updateDots() {
		dotsWrap.querySelectorAll('.dot').forEach((d, i) => {
			d.classList.toggle('active', i === index);
			d.setAttribute('aria-current', i === index ? 'true' : 'false');
		});
	}

	// Crée les points de navigation
	slides.forEach((_, i) => {
		const dot = document.createElement('button');
		dot.className = 'dot';
		dot.setAttribute('aria-label', 'Aller à la diapositive ' + (i + 1));
		dot.addEventListener('click', () => goTo(i));
		dotsWrap.appendChild(dot);
	});
	updateDots();

	// Auto-play + pause au survol
	let timer = setInterval(() => goTo(index + 1), 5000);
	track.parentElement.addEventListener('mouseenter', () => clearInterval(timer));
	track.parentElement.addEventListener('mouseleave', () => timer = setInterval(() => goTo(index + 1), 5000));

	// Navigation clavier
	track.parentElement.tabIndex = 0;
	track.parentElement.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowRight') goTo(index + 1);
		if (e.key === 'ArrowLeft') goTo(index - 1);
	});
})();

// 5) Filtrage des projets
(function filtering() {
	const buttons = document.querySelectorAll('.filter-btn');
	const cards = document.querySelectorAll('.projects-grid .project');

	function apply(filter) {
		cards.forEach(card => {
			const ok = filter === 'all' || card.dataset.category === filter;
			card.classList.toggle('hide', !ok);
		});
	}
	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			buttons.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			apply(btn.dataset.filter);
		});
	});
})();

// 6) Validation du formulaire en temps réel
(function formValidation() {
	const form = document.getElementById('contactForm');
	const status = document.getElementById('formStatus');
	const fields = [
		{ el: document.getElementById('name'),    container: document.getElementById('f-name'),    min: 2,  type: 'text' },
		{ el: document.getElementById('email'),   container: document.getElementById('f-email'),  type: 'email' },
		{ el: document.getElementById('message'), container: document.getElementById('f-message'), min: 10, type: 'text' }
	];

	const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

	function validateOne(f) {
		const v = f.el.value.trim();
		let ok = true;
		if (f.type === 'text'  && f.min) ok = v.length >= f.min;
		if (f.type === 'email')          ok = isValidEmail(v);
		f.container.classList.toggle('invalid', !ok);
		f.container.classList.toggle('valid', ok);
		return ok;
	}

	fields.forEach(f => ['input','blur'].forEach(ev => f.el.addEventListener(ev, () => validateOne(f))));

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const allValid = fields.map(validateOne).every(Boolean);
		if (!allValid) {
			status.textContent = 'Veuillez corriger les champs en rouge.';
			status.style.color = '#ef4444';
			return;
		}
		// Démo: pas d’envoi réel
		status.textContent = 'Message prêt à être envoyé ! (démo)';
		status.style.color = 'var(--primary)';
		form.reset();
		fields.forEach(f => f.container.classList.remove('valid','invalid'));
	});
})();