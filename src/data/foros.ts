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
    fecha: "",
    hora: "",
    lugar: "",
    participantes: [],
  },
];
