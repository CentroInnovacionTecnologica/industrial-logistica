/* ---------- Charlas ---------- */

import { ordenarPorFecha } from "./eventos";
import type { Evento } from "./eventos";

// Campos opcionales y su comportamiento: ver src/data/eventos.ts
export type Charla = Evento;

export const charlas: Charla[] = [
  {
    id: 1,
    titulo: "El talento que México va a necesitar hacia 2030",
    ponente: "Ing. Miguel Ángel Ávila Gasca",
    cargo: "Docente ITD · Depto. de Ingeniería Industrial",
    descripcion:
      "Una mirada desde la Ingeniería Industrial y la Ingeniería en Logística.",
    puntos: [
      { texto: "Industria más competitiva" },
      { texto: "Cadenas de suministro más resilientes" },
      { texto: "Desarrollo sostenible" },
      { texto: "Talento que transforma" },
    ],
    fecha: "",
    hora: "",
    lugar: "",
  },
  {
    id: 2,
    titulo: "La logística salva vidas: el viaje al paciente",
    ponente: "Ing. Alexis Lares",
    cargo: "CEO de LODIFARMA",
    descripcion:
      "El proceso que garantiza que cada dosis llegue al paciente en el momento y las condiciones correctas.",
    puntos: [
      { titulo: "Importación", texto: "El viaje comienza." },
      { titulo: "Almacenamiento", texto: "El resguardo estratégico." },
      { titulo: "Distribución", texto: "La entrega que salva vidas." },
    ],
    fecha: "",
    hora: "",
    lugar: "",
  },
  {
    id: 3,
    titulo: "CV 2.0: tu marca personal",
    ponente: "Dr. Mario Valderrama Martínez",
    cargo: "Docente ITD · Depto. de Ingeniería Industrial",
    descripcion: "",
    puntos: [
      { titulo: "Imagen profesional", texto: "Cómo proyectar confianza y credibilidad." },
      { titulo: "Marca personal", texto: "Identificar tu valor diferencial y comunicarlo." },
      { titulo: "CV", texto: "Estructura, contenido y errores que debes evitar." },
      { titulo: "LinkedIn", texto: "Optimización de perfil, redes y estrategia de búsqueda." },
    ],
    fecha: "",
    hora: "",
    lugar: "",
  },
];

/** Primero las que tienen fecha (de la más próxima a la más lejana); al final las demás. */
export const charlasOrdenadas: Charla[] = ordenarPorFecha(charlas);
