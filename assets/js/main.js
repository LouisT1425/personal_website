// ---------- Translations ----------
const translations = {
  fr: {
    "meta.title": "Louis Thin — Data Engineer",
    "meta.description": "Portfolio et CV de Louis Thin, jeune data engineer en recherche d'opportunités.",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.resume": "CV",
    "nav.music": "Musique",
    "nav.contact": "Contact",
    "a11y.navToggle": "Basculer la navigation",
    "a11y.themeToggle": "Basculer le mode sombre",
    "a11y.scrollNext": "Voir les projets",
    "hero.eyebrow": "Bonjour, moi c'est",
    "hero.bio": "Jeune ingénieur fraîchement diplômé, spécialisé en intelligence artificielle et génie logiciel. Je recherche une opportunité de data engineer, avec une prise de poste envisagée en septembre 2026.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Télécharger mon CV",
    "projects.eyebrow": "Ce que j'ai construit",
    "projects.title": "Projets",
    "projects.demo": "Démo →",
    "projects.source": "Code →",
    "project1.desc": "Application web permettant de suivre les émissions mondiales de CO2, avec une granularité par année, par pays et par secteur d'activité.",
    "resume.eyebrow": "Parcours",
    "resume.title": "CV",
    "resume.aboutHeading": "À propos",
    "resume.aboutText": "Ingénieur diplômé de Polytech Dijon, spécialisation Intelligence Artificielle et Génie Logiciel. Ce qui m'intéresse : prendre des données brutes et en sortir quelque chose d'exploitable — pipelines ETL, modèles de machine learning, tableaux de bord.",
    "resume.skillsHeading": "Compétences",
    "resume.downloadBtn": "Télécharger le CV (PDF)",
    "resume.experienceHeading": "Expérience",
    "resume.educationHeading": "Formation",
    "skill1": "Python (pandas, scikit-learn, FastAPI)",
    "skill2": "SQL (SQLite, PostgreSQL)",
    "skill3": "Data Engineering (Airflow, dbt)",
    "skill4": "IA (Machine Learning, NLP)",
    "skill5": "Power BI / DAX",
    "skill6": "Git / GitHub",
    "job1.title": "Data Engineer — Stage de fin d'études",
    "job1.company": "Safran Aircraft Engines",
    "job1.dates": "Février 2026 - Août 2026",
    "job1.desc": [
      "Construction de pipelines ETL (sources NAS et API REST : fichiers .csv, .txt, .xlsx, bases SQLite) en Python, avec nettoyage et transformation des données.",
      "Réalisation de dashboards Power BI (modèle en étoile, mesures DAX) à destination du management, utilisés lors des comités de pilotage (COPIL).",
      "Fine-tuning d'un modèle XLM-RoBERTa (recherche par grille, validation croisée k-fold) pour la classification NLP de documentation technique.",
      "Résultat : amélioration d'un KPI majeur de 33 % à 50 %.",
    ],
    "job2.title": "Stage NLP / Machine Learning",
    "job2.company": "Institut Agro Dijon",
    "job2.dates": "Octobre 2025 - Janvier 2026",
    "job2.desc": "Étude de faisabilité en NLP et Machine Learning.",
    "job3.title": "Stage Computer Vision",
    "job3.company": "King Mongkut's University of Technology North Bangkok, Thaïlande",
    "job3.dates": "Avril 2025 - Août 2025",
    "job3.desc": "Développement d'un système de détection d'objets par vision par ordinateur, à l'aide du modèle YOLO.",
    "edu1.degree": "Diplôme d'ingénieur — Intelligence Artificielle et Génie Logiciel",
    "edu1.school": "Polytech Dijon",
    "music.eyebrow": "En dehors du code",
    "music.title": "Musique",
    "music.intro": "Le reste du temps, j'écris et j'enregistre sous le nom Louis Thin.",
    "contact.eyebrow": "Contact",
    "contact.title": "On en discute ?",
    "contact.text": "Une opportunité de data engineer, une question, ou simplement l'envie de dire bonjour : ma boîte mail est ouverte.",
    "footer.text": "Fait main en HTML, CSS et JS.",
    "footer.backTop": "Retour en haut ↑",
  },
  en: {
    "meta.title": "Louis Thin — Data Engineer",
    "meta.description": "Portfolio and résumé of Louis Thin, a data engineer looking for new opportunities.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.resume": "Résumé",
    "nav.music": "Music",
    "nav.contact": "Contact",
    "a11y.navToggle": "Toggle navigation",
    "a11y.themeToggle": "Toggle dark mode",
    "a11y.scrollNext": "Scroll to projects",
    "hero.eyebrow": "Hi, I'm",
    "hero.bio": "Recent engineering graduate specialized in artificial intelligence and software engineering. I'm looking for a data engineer role, with a target start date around September 2026.",
    "hero.cta1": "View my projects",
    "hero.cta2": "Download my résumé",
    "projects.eyebrow": "Things I've built",
    "projects.title": "Projects",
    "projects.demo": "Live demo →",
    "projects.source": "Source →",
    "project1.desc": "A web app for tracking global CO2 emissions, broken down by year, country, and sector.",
    "resume.eyebrow": "Background",
    "resume.title": "Résumé",
    "resume.aboutHeading": "About",
    "resume.aboutText": "Engineering graduate from Polytech Dijon, specialized in AI and Software Engineering. What I'm into: taking raw data and turning it into something usable — ETL pipelines, machine learning models, dashboards.",
    "resume.skillsHeading": "Skills",
    "resume.downloadBtn": "Download résumé (PDF)",
    "resume.experienceHeading": "Experience",
    "resume.educationHeading": "Education",
    "skill1": "Python (pandas, scikit-learn, FastAPI)",
    "skill2": "SQL (SQLite, PostgreSQL)",
    "skill3": "Data Engineering (Airflow, dbt)",
    "skill4": "AI (Machine Learning, NLP)",
    "skill5": "Power BI / DAX",
    "skill6": "Git / GitHub",
    "job1.title": "Data Engineer — Final-Year Internship",
    "job1.company": "Safran Aircraft Engines",
    "job1.dates": "February 2026 - August 2026",
    "job1.desc": [
      "Built ETL pipelines (NAS shares and REST APIs: .csv, .txt, .xlsx files, SQLite databases) in Python, including data cleaning and transformation.",
      "Built Power BI dashboards (star schema, DAX measures) for management, used in steering committee meetings.",
      "Fine-tuned an XLM-RoBERTa model (grid search, k-fold cross-validation) for NLP classification of technical documentation.",
      "Result: a key KPI improved from 33% to 50%.",
    ],
    "job2.title": "NLP / Machine Learning Internship",
    "job2.company": "Institut Agro Dijon",
    "job2.dates": "October 2025 - January 2026",
    "job2.desc": "Feasibility study in NLP and Machine Learning.",
    "job3.title": "Computer Vision Internship",
    "job3.company": "King Mongkut's University of Technology North Bangkok, Thailand",
    "job3.dates": "April 2025 - August 2025",
    "job3.desc": "Built an object detection system using computer vision, based on the YOLO model.",
    "edu1.degree": "Engineering Degree — Artificial Intelligence and Software Engineering",
    "edu1.school": "Polytech Dijon",
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
    } else if (Array.isArray(value)) {
      el.replaceChildren(
        ...value.map((item) => {
          const li = document.createElement("li");
          li.textContent = item;
          return li;
        })
      );
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
