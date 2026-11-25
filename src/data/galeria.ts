/* ---------- Galería de fotos ---------- */

import type { ImageMetadata } from "astro";

/**
 * Fotos de src/assets/galeria/<AAAA-MM-DD>/dia-N-NNN.jpg. Para agregar fotos
 * basta con copiarlas a la carpeta del día (ya reducidas: máx. 2000 px, JPEG,
 * sin metadatos). Una carpeta nueva con otra fecha crea otro día.
 */
const archivos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/galeria/*/*.{jpg,jpeg}",
  { eager: true },
);

export interface FotoGaleria {
  src: ImageMetadata;
  /** Posición dentro de su día, desde 1. */
  numero: number;
}

export interface DiaGaleria {
  /** Formato ISO, ej. "2026-11-24". */
  dia: string;
  fotos: FotoGaleria[];
}

const porDia = new Map<string, { ruta: string; src: ImageMetadata }[]>();
for (const [ruta, modulo] of Object.entries(archivos)) {
  const dia = ruta.split("/").at(-2) ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dia)) continue;
  porDia.set(dia, [...(porDia.get(dia) ?? []), { ruta, src: modulo.default }]);
}

/** Días con fotos, del más reciente al más antiguo; fotos en orden de archivo. */
export const diasGaleria: DiaGaleria[] = [...porDia.entries()]
  .sort(([a], [b]) => b.localeCompare(a))
  .map(([dia, fotos]) => ({
    dia,
    fotos: fotos
      .sort((a, b) => a.ruta.localeCompare(b.ruta))
      .map((foto, i) => ({ src: foto.src, numero: i + 1 })),
  }));

export const totalFotos = diasGaleria.reduce((suma, d) => suma + d.fotos.length, 0);
