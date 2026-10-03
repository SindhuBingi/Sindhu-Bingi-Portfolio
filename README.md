# Bingi Sindhu — Personal Portfolio

A responsive and accessible personal portfolio built for the Full Stack Development (SPC0701CS) course assignment at Stanley College of Engineering & Technology for Women, Hyderabad.

- **Name:** Bingi Sindhu
- **Roll No.:** 160623733008
- **Semester / Section:** VII / A
- **Course:** B.E. Computer Science Engineering

## Live site

https://bingisindhu.github.io/Bingi-Sindhu-Portfolio/

> Replace this link with your actual GitHub Pages URL after you deploy the repo.

## Tech stack

| Layer | Choices |
|-------|---------|
| Markup | HTML5 semantic elements (`header`, `nav`, `main`, `section`, `footer`) |
| Styling | CSS3 (custom properties, Flexbox, Grid, media queries), Bootstrap 5 |
| Interactivity | JavaScript ES6+, DOM manipulation, event listeners |
| Fonts | Google Fonts (Inter, Fraunces) |
| Hosting | GitHub Pages |

## Features

- Home / Hero section with name, role, and quick links
- About, Education, Skills, Projects, Experience, Achievements, and Contact sections
- Dark / light theme switcher with preference persisted in `localStorage`
- Project filter (All / AI-ML / Web / Research) with keyboard-accessible buttons
- Client-side contact form validation with inline error messages and a live status region
- Mobile-first responsive layout; passes basic accessibility checks (semantic structure, labelled form controls, visible focus, skip link)

## Local development

No build step is required. Clone the repo and open `index.html` in a browser, or serve it:

```bash
# any static server works, e.g.
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
.
├── index.html      # all page sections
├── styles.css      # custom styles (theme variables, layout)
├── script.js       # theme toggle, project filter, form validation
├── assets/         # images and icons used in the site
└── README.md
```

## Deployment

The site is a plain static page. To publish on GitHub Pages:

1. Push the repo to GitHub.
2. In the repo settings, open **Pages**.
3. Set the source to the `main` branch, root folder, and save.
4. Wait a minute, then visit the published URL.

## License

Educational use. Content and images belong to Bingi Sindhu.
