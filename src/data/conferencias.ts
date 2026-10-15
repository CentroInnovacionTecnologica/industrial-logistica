/* ---------- Conferencias ---------- */

import { ordenarPorFecha } from "./eventos";
import type { Evento } from "./eventos";

// Campos opcionales y su comportamiento: ver src/data/eventos.ts
export type Conferencia = Evento;

export const conferencias: Conferencia[] = [
  {
    id: 1,
    titulo: "El éxito no es para payasos",
    ponente: "Ing. Julio César López Hernández",
    alias: "El Gabbo",
    cargo: "Conferencista y motivador",
    descripcion:
      "Tema de motivación personal orientado a eliminar el ‘no puedo’, fortalecer la confianza, reconocer el valor del aprendizaje en el error y animar a las personas a arriesgarse para alcanzar sus metas.",
    frase: "Una experiencia inspiradora, dinámica y de alto impacto.",
    fecha: "2026-11-24",
    hora: "",
    lugar: "",
  },
  {
    id: 2,
    titulo: "Si no usas IA, ¿eres competitivo?",
    ponente: "Aurora Carrales",
    descripcion:
      "Análisis estratégico sobre el impacto de la inteligencia artificial en el entorno profesional actual, explorando cómo la automatización, las herramientas inteligentes y la transformación digital se han convertido en elementos clave para la competitividad, la innovación y el desarrollo de ventajas en el mercado laboral y empresarial.",
    frase: "Una conferencia visionaria, práctica y de alto impacto.",
    fecha: "2026-11-24",
    hora: "",
    lugar: "",
  },
];

/** Primero las que tienen fecha (de la más próxima a la más lejana); al final las demás. */
export const conferenciasOrdenadas: Conferencia[] = ordenarPorFecha(conferencias);
