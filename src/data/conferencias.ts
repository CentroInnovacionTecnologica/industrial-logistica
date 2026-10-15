/* ---------- Conferencias ---------- */

import { valor } from "./eventos";
import type { Evento } from "./eventos";

// Campos opcionales y su comportamiento: ver src/data/eventos.ts
export type Conferencia = Evento;

export const conferencias: Conferencia[] = [
  {
    id: 1,
    titulo: "Gestión de operaciones en planta",
    tipo: "Conferencia magistral",
    destacada: true,
    ponente: "Carlos Luna Gallegos",
    cargo: "Gerente General de Yazaki",
    descripcion: "",
    frase: "",
    fecha: "",
    hora: "",
    lugar: "",
  },
  {
    id: 2,
    titulo: "El éxito no es para payasos",
    tipo: "Conferencia motivacional",
    ponente: "Ing. Julio César López Hernández",
    alias: "El Gabbo",
    cargo: "",
    descripcion:
      "Tema de motivación personal orientado a eliminar el ‘no puedo’, fortalecer la confianza, reconocer el valor del aprendizaje en el error y animar a las personas a arriesgarse para alcanzar sus metas.",
    frase: "",
    fecha: "2026-11-24",
    hora: "",
    lugar: "",
  },
  {
    id: 3,
    titulo: "Si no usas IA, ¿eres competitivo?",
    tipo: "Innovación y competitividad",
    ponente: "Ing. Aurora Carrales",
    cargo: "Directora Ejecutiva de EVOLSOFT",
    descripcion:
      "La inteligencia artificial ya no es una tendencia, es una herramienta clave de competitividad. Esta conferencia explora su impacto en la ingeniería industrial y responde una pregunta necesaria: **¿puede un profesionista seguir siendo competitivo sin dominarla?**",
    frase: "",
    fecha: "2026-11-24",
    hora: "",
    lugar: "",
  },
];

/** Texto del chip: el tipo de la conferencia o, si está vacío, "Conferencia". */
export function tipoDeConferencia(conferencia: Conferencia): string {
  return valor(conferencia.tipo) ?? "Conferencia";
}

/** Primero las destacadas; después las demás, en el orden del arreglo. */
export const conferenciasOrdenadas: Conferencia[] = [
  ...conferencias.filter((conferencia) => conferencia.destacada),
  ...conferencias.filter((conferencia) => !conferencia.destacada),
];
