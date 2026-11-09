# Site personnel

Mon portfolio : présentation, projets, CV, musique et contact. Le site est écrit en HTML, CSS et JavaScript, sans framework ni étape de build. Il est en français par défaut, avec une version anglaise.

## Arborescence

```
index.html               contenu de la page
assets/css/style.css     styles, thèmes clair et sombre, mode dyslexie
assets/js/main.js        textes FR/EN, bascules (langue, thème, dyslexie), menu mobile
assets/pictures/         visuels des projets
assets/resume/           CV en PDF
```

## Textes FR/EN

Les textes sont dans l'objet `translations` en haut de `main.js`. Dans `index.html`, chaque élément traduisible porte un attribut `data-i18n` qui renvoie à une clé de ce dictionnaire.

`applyLanguage()` s'exécute à chaque chargement et remplace le texte de ces éléments par la valeur du dictionnaire. Si je modifie un texte dans le HTML sans toucher au dictionnaire, il s'affiche une fraction de seconde puis revient à l'ancienne valeur. Je change donc toujours les deux, en français et en anglais.

## Ce que fait le site

- thème clair ou sombre, qui suit le réglage du système et se mémorise
- mode dyslexie (police OpenDyslexic, interlignage et espacement des mots élargis)
- choix de la langue mémorisé dans le navigateur
- adresse e-mail copiable en un clic

## Modifier le contenu

- **Projets** : dupliquer un bloc `.project-card` dans `#projects`.
- **ATMOSFER** : le site n'est plus en ligne, la carte renvoie seulement vers le code sur GitHub.
- **CV** : remplacer le PDF dans `assets/resume/` et mettre à jour les deux liens de téléchargement dans `index.html`.
- **Musique** : changer l'URL de l'iframe Spotify dans `#music`.
- **Couleurs et polices** : variables en haut de `style.css`.

## Lancer en local

```
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déploiement

Le site est statique et hébergé sur Vercel, relié à ce dépôt : un push sur la branche principale le redéploie. Aucune commande de build n'est nécessaire.
