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

export interface NavLink {
  label: string;
  /** Ruta desde la raíz del sitio ("/cursos", "/#seccion"). */
  href: string;
}

export interface NavItem extends NavLink {
  /**
   * Opciones del submenú. Con hijos, el encabezado muestra un botón que lo
   * despliega; `href` solo se usa en el pie de página (un único enlace).
   */
  children?: NavLink[];
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
    {
      label: "Actividades",
      href: "/#actividades",
      // Rutas reales: cuando existan las páginas, sustituye cada "#" por su
      // ruta (p. ej. "/conferencias"). El encabezado marcará "Actividades"
      // como activo al estar en cualquiera de ellas.
      children: [
        { label: "Conferencias", href: "#" },
        { label: "Certificaciones", href: "#" },
        { label: "Paneles", href: "#" },
        { label: "Visitas", href: "#" },
        { label: "Charlas", href: "#" },
      ],
    },
    { label: "Galería", href: "/#galeria" },
  ] satisfies NavItem[],
};

/** Antepone la base del sitio (astro.config `base`) a una ruta interna. */
export function withBase(href: string): string {
  if (href === "#") return href; // destino provisional
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${href}`;
}

const trimSlash = (path: string): string => path.replace(/\/+$/, "");

/** Un enlace es el activo si apunta a la página actual (las anclas no cuentan). */
export function isCurrentPage(item: NavLink, pathname: string): boolean {
  if (item.href.includes("#")) return false;
  return trimSlash(withBase(item.href)) === trimSlash(pathname);
}

/* ---------- Pie de página ---------- */

export const footer = {
  careers: "Ingeniería Industrial e Ingeniería en Logística",
  copyright:
    "© 2026 Instituto Tecnológico de Durango. Todos los derechos reservados.",
};

/* ---------- Secciones ---------- */

export const sections = {
  activities: { id: "actividades", title: "Actividades" },
};
