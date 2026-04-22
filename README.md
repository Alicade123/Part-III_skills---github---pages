# Alicade Personal Site (GitHub Pages)

A modern personal portfolio + blog built with **Jekyll** and hosted on **GitHub Pages**.

## Features

- Hero section for personal branding.
- Skills and featured projects sections.
- Blog feed from Jekyll posts.
- Testimonials and GitHub snapshot blocks.
- Responsive layout with dark/light mode toggle.
- Scroll reveal animations with reduced-motion support.
- SEO and social meta tags (Open Graph + Twitter).
- Optional Google Analytics (configure in `_config.yml`).
- Accessibility enhancements (skip link, semantic landmarks, readable contrast).

## Customize content

- Home page sections: `index.html`
- About: `pages/about.md`
- Projects: `pages/projects.md`
- Contact: `pages/contact.md`
- Styling: `assets/css/style.css`
- Interactive behavior (theme toggle + reveal): `assets/js/main.js`

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000/Part-III_skills---github---pages/`.

## Add analytics

Set your GA4 ID in `_config.yml`:

```yml
google_analytics_id: "G-XXXXXXXXXX"
```

## Add resume

Place your resume at:

`assets/docs/resume.pdf`

(Or update the resume button URL in `index.html`.)
