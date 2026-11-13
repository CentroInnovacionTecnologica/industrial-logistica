/* ---------- Foros ---------- */

/**
 * Cada foro es una sección completa (mismo diseño que los paneles). Para
 * agregar otro, basta con sumar un objeto al arreglo `foros`.
 *
 * Los campos marcados con "?" se pueden dejar vacíos u omitir: no se muestran.
 * Mientras `participantes` esté vacío, la sección muestra
 * "Pronto compartiremos quiénes participan."
 */

import type { Panelista, SeccionActividad } from "./paneles";

export interface Foro extends SeccionActividad {
  participantes: Panelista[];
}

export const foros: Foro[] = [
  {
    id: "foro-ingenieras-egresadas",
    tipo: "Foro",
    titulo: "Encuentro de Ingenieras Egresadas",
    lema: "Construyendo camino en la industria",
    fecha: "2026-11-25",
    hora: "16:00",
    lugar: "Centro de Innovación Tecnológica",
    participantes: [
      {
        nombre: "Alma Julissa García Almanza",
        cargo: "Gerente de Operaciones, Solving Services Durango – Current",
      },
      {
        nombre: "Luz Elena De León Estala",
        cargo:
          "Especialista en Manufactura Digital y Supervisora de Producción, Hulmaq",
      },
      {
        nombre: "Imelda Elisa Rubio Valles",
        cargo: "Especialista en Manufactura Digital, Essex Weld Solutions",
      },
      {
        nombre: "María Antonia Rivera López",
        cargo: "Gerenta de Recursos Humanos, SIR",
      },
    ],
  },
];

export const totalParticipantes = foros.reduce(
  (total, foro) => total + foro.participantes.length,
  0,
);
