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