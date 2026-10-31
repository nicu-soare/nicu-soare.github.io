# AGENTS.md

Ghid pentru agenții care scriu sau editează rapid blogul.

## Reguli Obligatorii

- Blogul este în română. Scrie conținutul public în română naturală, cu diacritice.
- Articolele se pun în `src/content/posts/` ca `.md` sau `.mdx`.
- Frontmatter-ul articolului trebuie să conțină `title`, `description`, `pubDatetime`, `draft`.
- Datele folosesc formatul `YYYY-MM-DD`. Dacă utilizatorul nu cere altă dată, folosește data curentă.
- `pubDatetime` este data publicării. `modDatetime` este ultima editare publică și este opțională.
- `draft: true` ascunde articolul din build-ul public; `draft: false` îl publică.
- Slug-ul articolului vine din numele fișierului, deci folosește nume URL-friendly: litere mici, fără spații.
- Nu schimba layout-ul, CSS-ul sau dependențele când cerința este doar despre conținut.
- Păstrează URL-ul GitHub Pages cu `nicu-soare`.

## Articol Nou

1. Creează fișierul în `src/content/posts/`, de exemplu:

```txt
src/content/posts/titlu-articol.md
```

2. Pornește de la acest șablon:

```md
---
title: Titlul articolului
description: O propoziție clară care rezumă articolul.
pubDatetime: 2026-06-06
modDatetime: 2026-06-06
tags:
  - blog
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
- Nu schimba `pubDatetime` decât dacă utilizatorul cere republicarea sau actualizarea datei.
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

- `src/content/posts/` articolele blogului.
- `src/content/pages/` pagini de conținut, cum ar fi Despre.
- `src/pages/index.astro` lista articolelor publicate.
- `src/pages/posts/[...page].astro` lista paginată de articole.
- `src/pages/about.astro` pagina Despre.
- `src/layouts/Layout.astro` layout global, meta tags, header și navigație.
- `astro-paper.config.ts` configurarea titlului, descrierii, limbii și funcțiilor AstroPaper.
- `src/styles/global.css` stiluri globale.

## Comenzi

```sh
npm run dev
npm run build
npm run preview
```

Rulează `npm run build` după modificări la conținut, pagini, layout sau configurare.

## Eurovision Spotify

- Pagina interactivă este `src/pages/top-moldova-eurovision-songs.astro`.
- Datele vin din `src/data/moldova-eurovision-spotify.json`.
- Sursa canonică este fluxul Spotify-first din `~/perso/projects/spotify_stats`.
- Pentru o regenerare completă, folosește wrapper-ul:

```sh
cd ~/perso/projects/spotify_stats && .venv/bin/python refresh_moldova_eurovision_blog.py --date YYYY-MM-DD
```

- `refresh_moldova_eurovision_blog.py` pornește din `spotify_playcounts.py --input-csv` pe `Moldova Eurovision Spotify tracks.csv`, apoi rulează discover, aggregate, snapshot și export.
- Folosește data curentă la `--date`, cu excepția cazului în care utilizatorul cere explicit altă dată.
- Exportul include seria `history` pentru fiecare piesă, construită din snapshot-uri Spotify; `track_history.json` rămâne doar un fallback vechi.
- După regenerare, rulează `npm run build` în blog și verifică ruta `/top-moldova-eurovision-songs/` în output.

## Design („Soare”, cyberpunk)

- Identitatea vizuală: un soare Outrun (disc cu dungi, apus în spatele unui orizont cu grilă în perspectivă). Pe pagina principală răsare o dată la încărcare (`src/components/HeroSun.astro`); pe celelalte pagini apare mic lângă nume, în header (`src/components/SunMark.astro`).
- Tema implicită este cea întunecată (neon): fundal bleumarin aproape negru cu grilă cyan discretă, titluri cyan, linkuri magenta, soare galben-magenta cu halou. Tema deschisă (hârtie bătută de soare, cerneală marin, soare galben-portocaliu) rămâne la comutatorul din header și se ține minte în `localStorage`. Culorile sunt în `src/styles/theme.css`; `--glow` și `--grid` sunt transparente pe tema deschisă.
- Fonturi self-hosted (fontsource): Bricolage Grotesque pentru titluri și navigație (`font-display`), Literata pentru text.
- Utilitare proprii în `src/styles/global.css`: `wave-rule` (linie-val în culoarea `--sea`, cu strălucire noaptea), `sun-link` (link subliniat, evidențiat la hover), `neon` (text cu halou), `active-nav`.
- Pagina principală este o singură componentă, `src/components/HomePage.astro`, folosită de `src/pages/index.astro` și `src/pages/en/index.astro`.
- Imaginea OG (`public/default-og.jpg`, 1200×630) și `public/favicon.svg` folosesc același soare. Dacă se schimbă sloganul, regenerează imaginea OG.
