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
    descripcion: "En una industria automotriz caracterizada por altos estándares de calidad, competitividad e innovación tecnológica, la integración de las áreas funcionales constituye un factor estratégico para alcanzar los objetivos del negocio. En esta conferencia se explorará la importancia de la colaboración interfuncional, la mejora de procesos, la innovación y la gestión eficiente de los recursos como elementos clave para fortalecer el desempeño organizacional y afrontar los retos de la manufactura moderna en el mercado global.",
    frase: "",
    fecha: "2026-11-24",
    hora: "10:00",
    lugar: "Teatro Ricardo Castro",
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
    hora: "12:30",
    lugar: "Teatro Ricardo Castro",
  },
  {
    id: 4,
    titulo: "México conectado: oportunidades en logística nacional e internacional",
    tipo: "Conectividad",
    ponente: "Víctor Eduardo Casillas Ríos",
    cargo: "",
    descripcion:
      "México tiene todo para convertirse en una potencia logística global. Esta conferencia analiza las oportunidades del sector en el ámbito nacional e internacional, y ofrece una visión estratégica sobre el futuro de la logística en nuestro país.",
    frase: "",
    fecha: "2026-11-24",
    hora: "11:00",
    lugar: "Teatro Ricardo Castro",
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
    hora: "16:00",
    lugar: "Centro de Innovación Tecnológica",
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
