import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Acasă",
    posts: "Articole",
    tags: "Etichete",
    about: "Despre",
    archives: "Arhivă",
    search: "Caută",
  },
  post: {
    publishedAt: "Publicat",
    updatedAt: "Actualizat",
    sharePostIntro: "Distribuie articolul:",
    sharePostOn: "Distribuie articolul pe {{platform}}",
    sharePostViaEmail: "Distribuie articolul prin email",
    tagLabel: "Etichete",
    backToTop: "Înapoi sus",
    goBack: "Înapoi",
    editPage: "Editează pagina",
    previousPost: "Articolul anterior",
    nextPost: "Articolul următor",
  },
  pagination: {
    prev: "Anterior",
    next: "Următor",
    page: "Pagina",
  },
  home: {
    socialLinks: "Linkuri",
    featured: "Recomandate",
    recentPosts: "Articole recente",
    allPosts: "Toate articolele",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Toate drepturile rezervate.",
  },
  pages: {
    tagTitle: "Etichetă",
    tagDesc: "Toate articolele cu eticheta",

    tagsTitle: "Etichete",
    tagsDesc: "Toate etichetele folosite în articole.",

    postsTitle: "Articole",
    postsDesc: "Toate articolele publicate.",

    archivesTitle: "Arhivă",
    archivesDesc: "Toate articolele arhivate.",

    searchTitle: "Căutare",
    searchDesc: "Caută în articole.",
  },
  a11y: {
    skipToContent: "Sari la conținut",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
    toggleTheme: "Schimbă tema",
    searchPlaceholder: "Caută articole...",
    noResults: "Niciun rezultat",
    goToPreviousPage: "Mergi la pagina anterioară",
    goToNextPage: "Mergi la pagina următoare",
  },
  notFound: {
    title: "404",
    message: "Pagina nu a fost găsită",
    goHome: "Înapoi acasă",
  },
} satisfies UIStrings;
