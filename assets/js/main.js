// ---------- Translations ----------
const translations = {
  fr: {
    "meta.title": "Louis T. — Data Engineer",
    "meta.description": "Portfolio et CV de Louis T., data engineer.",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.resume": "CV",
    "nav.music": "Musique",
    "nav.contact": "Contact",
    "a11y.navToggle": "Basculer la navigation",
    "a11y.themeToggle": "Basculer le mode sombre",
    "a11y.scrollNext": "Voir les projets",
    "hero.eyebrow": "Bonjour, moi c'est",
    "hero.bio": "Je suis un jeune diplômé d'école d'ingénieur informatique à la recherche d'opportunités en tant que data engineer, pour débuter dès que possible.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Télécharger mon CV",
    "projects.eyebrow": "Ce que j'ai construit",
    "projects.title": "Projets",
    "projects.demo": "Démo →",
    "projects.source": "Code →",
    "project1.desc": "Web app permettant de tracker les émissions de CO2 mondiales. Granularité à l'année, au pays et au secteur d'activité.",
    "project2.title": "[Nom du projet]",
    "project2.desc": "[Décris le projet en 2-3 phrases : le problème résolu, ta stack, ce dont tu es fier.]",
    "project3.title": "[Nom du projet]",
    "project3.desc": "[Décris le projet en 2-3 phrases : le problème résolu, ta stack, ce dont tu es fier.]",
    "project4.title": "[Nom du projet]",
    "project4.desc": "[Décris le projet en 2-3 phrases : le problème résolu, ta stack, ce dont tu es fier.]",
    "resume.eyebrow": "Parcours",
    "resume.title": "CV",
    "resume.aboutHeading": "À propos",
    "resume.aboutText": "Formation ingénieur informatique, spécialisation données. Ce qui m'intéresse : prendre des données brutes et moches, et en sortir quelque chose d'exploitable — pipelines, modèles, tableaux de bord.",
    "resume.skillsHeading": "Compétences",
    "resume.downloadBtn": "Télécharger le CV (PDF)",
    "resume.experienceHeading": "Expérience",
    "resume.educationHeading": "Formation",
    "job1.title": "[Intitulé du poste]",
    "job1.company": "[Nom de l'entreprise]",
    "job1.desc": "[Décris ici ta mission : les outils utilisés, ce que tu as construit, un résultat chiffré si possible.]",
    "edu1.degree": "Diplôme d'ingénieur — Informatique",
    "edu1.school": "[Nom de l'école]",
    "music.eyebrow": "En dehors du code",
    "music.title": "Musique",
    "music.intro": "Le reste du temps, j'écris et j'enregistre sous le nom Louis Thin.",
    "contact.eyebrow": "Contact",
    "contact.title": "On en discute ?",
    "contact.text": "Une opportunité data engineer, une question, ou juste envie de dire bonjour : mon inbox est ouverte.",
    "footer.text": "Fait main en HTML, CSS et JS.",
    "footer.backTop": "Retour en haut ↑",
  },
  en: {
    "meta.title": "Louis T. — Data Engineer",
    "meta.description": "Portfolio and résumé of Louis T., data engineer.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.resume": "Résumé",
    "nav.music": "Music",
    "nav.contact": "Contact",
    "a11y.navToggle": "Toggle navigation",
    "a11y.themeToggle": "Toggle dark mode",
    "a11y.scrollNext": "Scroll to projects",
    "hero.eyebrow": "Hi, I'm",
    "hero.bio": "I'm a recent computer engineering graduate looking for data engineer opportunities — available to start as soon as possible.",
    "hero.cta1": "View my projects",
    "hero.cta2": "Download my résumé",
    "projects.eyebrow": "Things I've built",
    "projects.title": "Projects",
    "projects.demo": "Live demo →",
    "projects.source": "Source →",
    "project1.desc": "A web app for tracking global CO2 emissions, broken down by year, country, and sector.",
    "project2.title": "[Project name]",
    "project2.desc": "[Describe the project in 2-3 sentences: the problem it solves, your stack, what you're proud of.]",
    "project3.title": "[Project name]",
    "project3.desc": "[Describe the project in 2-3 sentences: the problem it solves, your stack, what you're proud of.]",
    "project4.title": "[Project name]",
    "project4.desc": "[Describe the project in 2-3 sentences: the problem it solves, your stack, what you're proud of.]",
    "resume.eyebrow": "Background",
    "resume.title": "Résumé",
    "resume.aboutHeading": "About",
    "resume.aboutText": "Engineering degree in computer science, data specialization. What I'm into: taking raw, messy data and turning it into something usable — pipelines, models, dashboards.",
    "resume.skillsHeading": "Skills",
    "resume.downloadBtn": "Download résumé (PDF)",
    "resume.experienceHeading": "Experience",
    "resume.educationHeading": "Education",
    "job1.title": "[Job title]",
    "job1.company": "[Company name]",
    "job1.desc": "[Describe what you did here — tools used, what you built, a number if you've got one.]",
    "edu1.degree": "Engineering degree — Computer Science",
    "edu1.school": "[School name]",
    "music.eyebrow": "Outside of code",
    "music.title": "Music",
    "music.intro": "The rest of the time, I write and record under the name Louis Thin.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.text": "A data engineer opportunity, a question, or just want to say hi — my inbox is open.",
    "footer.text": "Handmade with HTML, CSS & JS.",
    "footer.backTop": "Back to top ↑",
  },
};

const langToggle = document.getElementById("langToggle");

function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value === undefined) return;
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    const value = dict[key];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  const isFr = lang === "fr";
  langToggle.textContent = isFr ? "EN" : "FR";
  langToggle.setAttribute("aria-label", isFr ? "Switch to English" : "Passer en français");

  localStorage.setItem("lang", lang);
}

const storedLang = localStorage.getItem("lang");
const initialLang = storedLang === "en" ? "en" : "fr";
applyLanguage(initialLang);

langToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("lang") === "en" ? "en" : "fr";
  applyLanguage(current === "fr" ? "en" : "fr");
});

// ---------- Theme toggle ----------
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");
if (storedTheme) root.setAttribute("data-theme", storedTheme);

themeToggle.addEventListener("click", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = root.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ---------- Mobile nav ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Scroll progress bar + header shadow ----------
const progressBar = document.getElementById("progressBar");
const siteHeader = document.getElementById("siteHeader");

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + "%";
  siteHeader.classList.toggle("scrolled", scrollTop > 8);
}
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
revealEls.forEach((el) => revealObserver.observe(el));

// ---------- Active nav link on scroll ----------
const sections = document.querySelectorAll("main section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinkEls.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => sectionObserver.observe(section));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
