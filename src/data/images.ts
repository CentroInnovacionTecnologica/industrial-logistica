/**
 * IMÁGENES REALES (opcionales)
 * ------------------------------------------------------------------
 * Este es el ÚNICO archivo que hay que tocar para activar una imagen.
 *
 * Cómo activar una imagen:
 *   1. Guarda el archivo en  src/assets/  (png, jpg, jpeg, webp, avif o svg).
 *   2. Cambia abajo el `null` correspondiente por el nombre del archivo,
 *      entre comillas. Ejemplo:  const LOGO_TECNM: ImageFile = "logo-tecnm.png";
 *
 * Mientras el valor sea `null` (o el archivo no exista en src/assets/),
 * el sitio muestra un marcador de posición y el build NO falla.
 */
import type { ImageMetadata } from "astro";

type ImageFile = string | null;

// Logo izquierdo del encabezado (TecNM). Recomendado: PNG/SVG con fondo transparente, ~360 px de ancho.
const LOGO_TECNM: ImageFile = "logo-tecnm.png";

// Logo derecho del encabezado (ITD). Recomendado: PNG/SVG con fondo transparente, ~360 px de ancho.
const LOGO_ITD: ImageFile = "logo-itd.png";

// Fotografía del hero. Recomendado: JPG horizontal de al menos 1600 px de ancho.
const HERO_PHOTO: ImageFile = "hero-nexus.png";

/* ------------------------------------------------------------------
   No es necesario modificar nada de aquí hacia abajo.
   ------------------------------------------------------------------ */

// Vite resuelve este patrón en el build: solo incluye los archivos que existen,
// por eso una imagen ausente nunca rompe la compilación.
const assets = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true },
);

function resolveImage(file: ImageFile): ImageMetadata | null {
  if (!file) return null;
  const found = assets[`../assets/${file}`];
  if (!found) {
    console.warn(
      `[images] No se encontró "src/assets/${file}". Se mostrará el marcador de posición.`,
    );
    return null;
  }
  return found.default;
}

export const images = {
  logoTecnm: resolveImage(LOGO_TECNM),
  logoItd: resolveImage(LOGO_ITD),
  heroPhoto: resolveImage(HERO_PHOTO),
};
