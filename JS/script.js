const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('.section');
const navToggler = document.querySelector('.nav-toggler');
const sectionLinks = document.querySelectorAll('a[href^="#"]');
const navMenu = document.querySelector('.nav');

// Keep the site in SPA mode by showing one section at a time.
function hideAllSections() {
	sections.forEach((section) => {
		section.classList.add('hidden');
	});
}

function showSectionById(sectionId) {
	hideAllSections();
	const target = document.querySelector(sectionId);
	if (target) {
		target.classList.remove('hidden');
	}
}

function setActiveNav(link) {
	navLinks.forEach((item) => {
		item.classList.remove('active', 'text-cyan-300', 'bg-slate-800/80');
		item.classList.add('text-slate-300');
	});

	if (!link) {
		return;
	}

	link.classList.add('active', 'text-cyan-300', 'bg-slate-800/80');
	link.classList.remove('text-slate-300');
}

function closeMobileMenu() {
	if (navMenu && window.innerWidth < 768) {
		navMenu.classList.add('hidden');
	}
}

// Central navigation handler used by nav clicks and deep-link hashes.
function navigateToSection(targetId, updateHash = true) {
	if (!targetId || targetId === '#') {
		return;
	}

	const targetSection = document.querySelector(targetId);
	if (!targetSection || !targetSection.classList.contains('section')) {
		return;
	}

	showSectionById(targetId);
	setActiveNav(document.querySelector(`.nav a[href="${targetId}"]`));
	closeMobileMenu();

	if (updateHash) {
		window.location.hash = targetId;
	}
}

navLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		navigateToSection(link.getAttribute('href'));
	});
});

sectionLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		const targetId = link.getAttribute('href');
		const targetSection = targetId ? document.querySelector(targetId) : null;
		if (!targetSection || !targetSection.classList.contains('section')) {
			return;
		}

		event.preventDefault();
		navigateToSection(targetId);
	});
});

if (navToggler && navMenu) {
	navToggler.addEventListener('click', () => {
		navMenu.classList.toggle('hidden');
	});
}

// Respect browser history navigation between section hashes.
window.addEventListener('hashchange', () => {
	const targetId = window.location.hash || '#home';
	navigateToSection(targetId, false);
});

const initialHash = window.location.hash && document.querySelector(window.location.hash)
	? window.location.hash
	: '#home';

navigateToSection(initialHash, false);
