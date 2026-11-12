import type { ImageMetadata } from "astro";

/* ---------- Patrocinadores y empresas participantes ---------- */

/**
 * LOGOS DEL CARRUSEL DEL INICIO
 * ------------------------------------------------------------------
 * Se muestran en este mismo orden. Las rutas son relativas a src/assets/:
 *
 *   - Patrocinadores ........ src/assets/patrocinadores/
 *   - Empresas de visitas ... src/assets/visitas/  (se reutilizan, no se duplican)
 *
 * Si un archivo no existe, ese logo se omite del carrusel y el build NO falla.
 */

export interface Patrocinador {
  empresa: string;
  /** Ruta dentro de src/assets/, p. ej. "patrocinadores/logmine.png". */
  logo: string;
}

export const patrocinadoresInfo = {
  titulo: "Patrocinadores y empresas participantes",
  texto: "Empresas que hacen posible la Semana Académica NEXUS 2026.",
};

export const patrocinadores: Patrocinador[] = [
  { empresa: "Logmine", logo: "patrocinadores/logmine.png" },
  { empresa: "Naturgy", logo: "patrocinadores/naturgy.png" },
  { empresa: "Mónica Gutiérrez", logo: "patrocinadores/monica-gutierrez.png" },
  { empresa: "Smart Kaisen", logo: "patrocinadores/smart-kaisen.png" },
  { empresa: "Solving Services Inc.", logo: "patrocinadores/solving.png" },
  { empresa: "Ing. Claudia Hilda Campos Mendoza", logo: "patrocinadores/claudia-hilda.png" },
  { empresa: "Lobmaq Metalmecánica", logo: "patrocinadores/lobmaq.png" },
  { empresa: "Kaf Koala", logo: "patrocinadores/kaf-koala.png" },
  { empresa: "Tim Hortons", logo: "patrocinadores/tim-hortons.png" },
  { empresa: "Arca Continental", logo: "visitas/arca-continental.jpeg" },
  { empresa: "Forestal Alfa", logo: "visitas/forestal-alfa.png" },
  { empresa: "Grupo Armas", logo: "visitas/grupo-armas.png" },
  { empresa: "Hulmaq", logo: "visitas/hulmaq.jpg" },
  { empresa: "SIR", logo: "visitas/sir.png" },
  { empresa: "Yazaki", logo: "visitas/yazaki.png" },
  { empresa: "Arauco", logo: "visitas/arauco.png" },
];

// Vite resuelve este patrón en el build: solo incluye los archivos que existen,
// por eso un logo ausente nunca rompe la compilación.
const logos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/{patrocinadores,visitas}/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true },
);

/** Patrocinadores cuyo archivo de logo existe, en el orden de la lista. */
export function patrocinadoresConLogo(): { empresa: string; imagen: ImageMetadata }[] {
  return patrocinadores.flatMap(({ empresa, logo }) => {
    const imagen = logos[`../assets/${logo}`]?.default;
    return imagen ? [{ empresa, imagen }] : [];
  });
}
