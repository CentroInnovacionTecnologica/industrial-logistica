/* ---------- Disponibilidad de lugares ---------- */

export type EstadoCupo = "normal" | "pocos" | "lleno";

/** Con esta cantidad de lugares o menos, la tarjeta avisa "¡Últimos lugares!". */
export const UMBRAL_POCOS = 5;

export interface Cupo {
  capacidad: number;
  inscritos: number;
  /** capacidad − inscritos, nunca menor que 0. */
  disponibles: number;
  /** Porcentaje ocupado (0–100) para la barra. */
  ocupado: number;
  estado: EstadoCupo;
}

/** Calcula los disponibles a partir de la capacidad y los inscritos. */
export function calcularCupo(capacidad: number, inscritos: number): Cupo {
  const disponibles = Math.max(capacidad - inscritos, 0);
  const ocupado =
    capacidad > 0 ? Math.min((capacidad - disponibles) / capacidad, 1) * 100 : 100;
  const estado: EstadoCupo =
    disponibles === 0 ? "lleno" : disponibles <= UMBRAL_POCOS ? "pocos" : "normal";
  return { capacidad, inscritos, disponibles, ocupado, estado };
}

/** "2026-10-26" → "26 de octubre de 2026" */
export function formatearFecha(iso: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
