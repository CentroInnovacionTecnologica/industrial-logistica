import type { ImageMetadata } from "astro";
import { images } from "./images";

/* ---------- Sitio ---------- */

export const site = {
  lang: "es",
  title: "Semana Académica | Ingeniería Industrial y Logística ITD",
  description:
    "Eventos de la Semana Académica de Ingeniería Industrial e Ingeniería en Logística del Instituto Tecnológico de Durango: conferencias, talleres, cursos y más.",
  homeLabel: "Semana Académica, ir al inicio",
  skipLink: "Saltar al contenido",
};

/* ---------- Logos del encabezado ---------- */

export interface Logo {
  id: string;
  /** Texto del marcador cuando no hay imagen (una palabra por línea). */
  placeholder: string;
  /** Texto alternativo de la imagen real. */
  alt: string;
  /** Se activa en src/data/images.ts */
  image: ImageMetadata | null;
}

export const logos: Logo[] = [
  {
    id: "tecnm",
    placeholder: "Logo TecNM",
    alt: "Tecnológico Nacional de México",
    image: images.logoTecnm,
  },
  {
    id: "itd",
    placeholder: "Logo ITD",
    alt: "Instituto Tecnológico de Durango",
    image: images.logoItd,
  },
];

/* ---------- Navegación ---------- */

export interface NavItem {
  label: string;
  /** Ruta desde la raíz del sitio ("/cursos", "/#seccion") o ancla ("#contacto"). */
  href: string;
}

export const nav = {
  label: "Navegación principal",
  mobileLabel: "Menú",
  footerLabel: "Enlaces",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  items: [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: "Próximos eventos", href: "/#proximos-eventos" },
    { label: "Eventos pasados", href: "/#eventos-pasados" },
    // El pie de página (id="contacto") está en todas las páginas.
    { label: "Contacto", href: "#contacto" },
  ] satisfies NavItem[],
};

/** Antepone la base del sitio (astro.config `base`) a una ruta interna. */
export function withBase(href: string): string {
  if (href.startsWith("#")) return href;
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${href}`;
}

const trimSlash = (path: string): string => path.replace(/\/+$/, "");

/** Un enlace es el activo si apunta a la página actual (las anclas no cuentan). */
export function isCurrentPage(item: NavItem, pathname: string): boolean {
  if (item.href.includes("#")) return false;
  return trimSlash(withBase(item.href)) === trimSlash(pathname);
}

/* ---------- Redes sociales (pie de página) ---------- */

export interface SocialLink {
  id: "facebook" | "instagram" | "youtube";
  label: string;
  href: string;
}

// CAMBIAR AQUÍ las URL de las redes sociales: sustituye cada "#" por la
// dirección completa (por ejemplo "https://www.facebook.com/...").
export const social = {
  title: "Síguenos",
  links: [
    { id: "facebook", label: "Facebook", href: "#" },
    { id: "instagram", label: "Instagram", href: "#" },
    { id: "youtube", label: "YouTube", href: "#" },
  ] satisfies SocialLink[],
};

export const footer = {
  careers: "Ingeniería Industrial e Ingeniería en Logística",
  copyright:
    "© 2026 Instituto Tecnológico de Durango. Todos los derechos reservados.",
};

/* ---------- Secciones ---------- */

export const sections = {
  upcoming: { id: "proximos-eventos", title: "Próximos eventos" },
};

/* ---------- Filtros ---------- */

export interface FilterOption {
  value: string;
  label: string;
}

/** Nombre del evento personalizado que emite la barra de filtros en `document`. */
export const FILTER_EVENT = "eventos:filtrar";

/** `detail` del evento personalizado. */
export interface EventFilterDetail {
  /** Valor del chip activo (p. ej. "talleres"). */
  type: string;
  /** Valor del select de carrera (p. ej. "industrial"). */
  career: string;
}

export const filters = {
  type: {
    label: "Filtrar por tipo de evento:",
    options: [
      { value: "todos", label: "Todos" },
      { value: "conferencias", label: "Conferencias" },
      { value: "talleres", label: "Talleres" },
      { value: "cursos", label: "Cursos" },
      { value: "certificaciones", label: "Certificaciones" },
      { value: "paneles", label: "Paneles" },
      { value: "visitas", label: "Visitas" },
    ] satisfies FilterOption[],
  },
  career: {
    label: "Filtrar por carrera:",
    options: [
      { value: "todas", label: "Todas las carreras" },
      { value: "industrial", label: "Ingeniería Industrial" },
      { value: "logistica", label: "Ingeniería en Logística" },
    ] satisfies FilterOption[],
  },
};
