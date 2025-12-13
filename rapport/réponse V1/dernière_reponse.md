# Dernière réponse et modification effectuée

# index.html :

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
			<button class="filter-btn" data-filter="design" role="tab">Design</button>
			<button class="filter-btn" data-filter="autres" role="tab">Autres</button>
		</div>

		<!-- Carrousel (facultatif, on laisse tel quel) -->
		<div class="carousel" aria-roledescription="carrousel" aria-label="Projets en vedette">
			<div class="carousel-track" id="carouselTrack">
				<article class="slide" data-status="fini" data-category="web">
					<div class="thumb" aria-hidden="true"></div>
					<div>
						<h3>Projet Red (Golang)</h3>
						<p class="meta">Statut: Fini · Catégorie: Web</p>
						<p>Implémentation en Go. Bonnes pratiques, tests de base.</p>
					</div>
				</article>
				<article class="slide" data-status="fini" data-category="web">
					<div class="thumb" aria-hidden="true"></div>
					<div>
						<h3>Power 4 (Go)</h3>
						<p class="meta">Statut: Fini · Catégorie: Web</p>
						<p>Jeu puissance 4 en Go. Gestion du plateau et des conditions de victoire.</p>
					</div>
				</article>
				<article class="slide" data-status="en-cours" data-category="autres">
					<div class="thumb" aria-hidden="true"></div>
					<div>
						<h3>Golem — Projet YDays</h3>
						<p class="meta">Statut: En cours · Catégorie: Autres</p>
						<p>Travail d’équipe, architecture modulaire, itérations rapides.</p>
					</div>
				</article>
			</div>
			<div class="carousel-controls" id="carouselDots" aria-label="Choisir la diapositive"></div>
		</div>

		<!-- Grille filtrable (statut + catégorie) -->
		<div class="projects-grid" id="projectsGrid" style="margin-top: 12px;">
			<article class="project" data-status="fini" data-category="web">
				<div class="cover" aria-hidden="true"></div>
				<div class="content">
					<h4>Projet Red</h4>
					<p class="meta">Golang · Statut: Fini · Catégorie: Web</p>
				</div>
			</article>

			<article class="project" data-status="fini" data-category="web">
				<div class="cover"></div>
				<div class="content">
					<h4>Power 4</h4>
					<p class="meta">Go · Statut: Fini · Catégorie: Web</p>
				</div>
			</article>

			<article class="project" data-status="en-cours" data-category="autres">
				<div class="cover"></div>
				<div class="content">
					<h4>Golem (YDays)</h4>
					<p class="meta">Collab · Statut: En cours · Catégorie: Autres</p>
				</div>
			</article>

			<article class="project" data-status="en-cours" data-category="web">
				<div class="cover"></div>
				<div class="content">
					<h4>Portfolio en Prompt Engineering</h4>
					<p class="meta">IA/Prompt · Statut: En cours · Catégorie: Web</p>
				</div>
			</article>

			<article class="project" data-status="fini" data-category="web">
				<div class="cover"></div>
				<div class="content">
					<h4>Projets réseau — Power 4</h4>
					<p class="meta">Réseau/Go · Statut: Fini · Catégorie: Web</p>
				</div>
			</article>
		</div>
	</div>
</section>


# main.js : 


// 5) Filtrage combiné Statut + Catégorie
(function filteringCombined() {
	const statusBar = document.getElementById('filters-status');
	const categoryBar = document.getElementById('filters-category');
	const statusBtns = statusBar.querySelectorAll('.filter-btn');
	const categoryBtns = categoryBar.querySelectorAll('.filter-btn');
	const cards = document.querySelectorAll('.projects-grid .project');

	let currentStatus = 'all';
	let currentCategory = 'all';

	function applyFilters() {
		cards.forEach(card => {
			const s = card.dataset.status;     // "fini" | "en-cours"
			const c = card.dataset.category;   // "web" | "design" | "autres"
			const okStatus = currentStatus === 'all' || s === currentStatus;
			const okCat    = currentCategory === 'all' || c === currentCategory;
			card.classList.toggle('hide', !(okStatus && okCat));
		});
	}

	function setActive(btns, clicked) {
		btns.forEach(b => {
			b.classList.toggle('active', b === clicked);
			b.setAttribute('aria-selected', b === clicked ? 'true' : 'false');
		});
	}

	statusBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			currentStatus = btn.dataset.filter;   // all | fini | en-cours
			setActive(statusBtns, btn);
			applyFilters();
		});
	});
	categoryBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			currentCategory = btn.dataset.filter; // all | web | design | autres
			setActive(categoryBtns, btn);
			applyFilters();
		});
	});

	// Application initiale
	applyFilters();
})();