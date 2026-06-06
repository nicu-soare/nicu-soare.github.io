# Nicu Soare Blog

Blog personal construit cu [Astro](https://astro.build/) și publicat prin GitHub Pages.

## Dezvoltare

```sh
npm install
npm run dev
```

## Scriere

Adaugă articole ca fișiere Markdown în `src/content/blog`.

Fiecare articol are nevoie de frontmatter de forma:

```md
---
title: Articolul meu
description: Un scurt rezumat al articolului.
pubDate: 2026-05-16
draft: false
---
```

## Publicare

Site-ul este configurat pentru URL-ul GitHub Pages:

```txt
https://nicu-soare.github.io/
```

Workflow-ul din `.github/workflows/deploy.yml` construiește site-ul și publică `dist` când modificările sunt împinse pe `main`.
