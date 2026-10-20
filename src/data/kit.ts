/**
 * KIT DEL EVENTO (sección de la página de inicio)
 * ------------------------------------------------------------------
 * Imágenes: guárdalas en  src/assets/kit/  con estos nombres exactos
 * (extensión .jpg, .png o .webp):
 *
 *   pluma.jpg · playera.jpg · libreta.jpg · termo.jpg
 *
 * Se detectan solas: no hay que tocar código. Si falta alguna, la tarjeta
 * muestra un marcador con un ícono y el build NO falla.
 * Recomendado: imagen cuadrada de al menos 800 px, fondo blanco o transparente.
 */
import type { ImageMetadata } from "astro";

export type KitIcon = "pluma" | "playera" | "libreta" | "termo";

export interface KitItem {
  /** Nombre del archivo en src/assets/kit/ (sin extensión) y del ícono del marcador. */
  id: KitIcon;
  nombre: string;
  cantidad: number;
  alt: string;
  image: ImageMetadata | null;
}

// Vite solo incluye los archivos que existen; una imagen ausente no rompe el build.
const assets = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/kit/*.{jpg,jpeg,png,webp}",
  { eager: true },
);

function findImage(id: string): ImageMetadata | null {
  for (const ext of ["webp", "png", "jpg", "jpeg"]) {
    const found = assets[`../assets/kit/${id}.${ext}`];
    if (found) return found.default;
  }
  return null;
}

const item = (id: KitIcon, nombre: string): KitItem => ({
  id,
  nombre,
  cantidad: 1,
  alt: `${nombre} del kit de la Semana Académica NEXUS 2026`,
  image: findImage(id),
});

export const kit = {
  id: "kit",
  etiqueta: "Semana Académica NEXUS 2026",
  titulo: "Kit del evento",
  texto:
    "Al registrarte, tienes derecho al kit oficial de la Semana Académica, que se entrega durante el evento. Esto es lo que incluye:",
  boton: { label: "¿Cómo me registro?", href: "/registro" },
  articulos: [
    item("pluma", "Pluma"),
    item("playera", "Playera"),
    item("libreta", "Libreta"),
    item("termo", "Termo"),
  ] satisfies KitItem[],
};

/** "1 pieza", "2 piezas"… */
export const cantidadLabel = (n: number): string =>
  `${n} ${n === 1 ? "pieza" : "piezas"}`;
