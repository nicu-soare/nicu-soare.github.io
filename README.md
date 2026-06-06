# Nicu Soare Blog

Blog personal construit cu [Astro](https://astro.build/) pe baza temei AstroPaper și publicat prin GitHub Pages.

## Dezvoltare

```sh
npm install
npm run dev
```

## Scriere

Adaugă articole ca fișiere Markdown sau MDX în `src/content/posts`.

Fiecare articol are nevoie de frontmatter de forma:

```md
---
title: Articolul meu
description: Un scurt rezumat al articolului.
pubDatetime: 2026-05-16
tags:
  - blog
draft: false
---
```

## Publicare

Site-ul este configurat pentru URL-ul GitHub Pages:

```txt
https://nicu-soare.github.io/
```

Workflow-ul din `.github/workflows/deploy.yml` construiește site-ul și publică `dist` când modificările sunt împinse pe `main`.
