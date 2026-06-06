# AGENTS.md

Ghid pentru agenții care scriu sau editează rapid blogul.

## Reguli Obligatorii

- Blogul este în română. Scrie conținutul public în română naturală, cu diacritice.
- Articolele se pun în `src/content/blog/` ca `.md` sau `.mdx`.
- Frontmatter-ul articolului trebuie să conțină `title`, `description`, `pubDate`, `createdDate`, `updatedDate`, `draft`.
- Datele folosesc formatul `YYYY-MM-DD`. Dacă utilizatorul nu cere altă dată, folosește data curentă.
- `createdDate` este data creării postării. `updatedDate` este ultima editare publică.
- `draft: true` ascunde articolul din build-ul public; `draft: false` îl publică.
- Slug-ul articolului vine din numele fișierului, deci folosește nume URL-friendly: litere mici, fără spații.
- Nu schimba layout-ul, CSS-ul sau dependențele când cerința este doar despre conținut.
- Păstrează URL-ul GitHub Pages cu `nicu-soare`.

## Articol Nou

1. Creează fișierul în `src/content/blog/`, de exemplu:

```txt
src/content/blog/titlu-articol.md
```

2. Pornește de la acest șablon:

```md
---
title: Titlul articolului
description: O propoziție clară care rezumă articolul.
pubDate: 2026-06-06
createdDate: 2026-06-06
updatedDate: 2026-06-06
draft: false
---

Primul paragraf spune direct despre ce este articolul și de ce merită citit.

## Prima idee

Dezvoltă ideea în paragrafe scurte.

## A doua idee

Adaugă exemple, detalii sau context.
```

3. Rulează:

```sh
npm run build
```

4. Verifică în output că ruta articolului a fost generată.

## Editare Articol Existent

- Păstrează frontmatter-ul valid.
- Nu schimba `pubDate` decât dacă utilizatorul cere republicarea sau actualizarea datei.
- Îmbunătățește claritatea fără să schimbi vocea personală a autorului.
- Pentru modificări mari, păstrează paragrafele scurte și folosește heading-uri `##`.

## Stil Editorial

- Titlul: scurt, concret, fără formulări clickbait.
- Descrierea: o singură propoziție, utilă pentru listă și meta description.
- Introducerea: intră direct în subiect.
- Tonul: personal, simplu, concret.
- Evită traducerile literale din engleză.
- Pentru termeni tehnici, păstrează termenul consacrat dacă româna sună forțat.

## Structură Proiect

- `src/content/blog/` articolele blogului.
- `src/pages/index.astro` lista articolelor publicate.
- `src/pages/blog/[...slug].astro` pagina de articol.
- `src/pages/about.astro` pagina Despre.
- `src/layouts/BaseLayout.astro` layout global, meta tags, header și navigație.
- `src/styles/global.css` stiluri globale.

## Comenzi

```sh
npm run dev
npm run build
npm run preview
```

Rulează `npm run build` după modificări la conținut, pagini, layout sau configurare.
