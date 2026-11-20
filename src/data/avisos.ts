/**
 * AVISOS IMPORTANTES (inicio, sección del kit y página de la Inauguración)
 * ------------------------------------------------------------------
 * Cambia aquí el texto de los avisos; se actualizan en todo el sitio.
 *
 * - fecha: formato ISO, ej. "2026-11-24". Si está vacía (""), no se muestra.
 * - hora:  formato de 24 h, ej. "10:00" (se muestra "10:00 a. m."). Vacía = no se muestra.
 * - lugar: texto libre. Vacío = no se muestra.
 */
import { inauguracion } from "./inauguracion";

export interface Aviso {
  /** Identificador único; se usa para los id del HTML. */
  id: string;
  etiqueta: string;
  titulo: string;
  texto: string;
  fecha: string;
  hora: string;
  lugar: string;
  enlace?: { href: string; label: string };
}

export const avisoInauguracion: Aviso = {
  id: "aviso-inauguracion",
  etiqueta: "Asistencia obligatoria",
  titulo: "La Inauguración es obligatoria para todos los participantes",
  texto:
    "Tu asistencia a la Ceremonia de Inauguración es indispensable dentro de las actividades de la Semana Académica.",
  // Se toman de src/data/inauguracion.ts para no duplicarlos.
  fecha: inauguracion.fecha,
  hora: inauguracion.hora,
  lugar: inauguracion.lugar,
  enlace: {
    href: "/actividades/inauguracion",
    label: "Ver detalles de la Inauguración",
  },
};

export const avisoKit: Aviso = {
  id: "aviso-kit",
  etiqueta: "Importante",
  titulo: "Entrega del kit del evento",
  texto: "Recoge tu kit en el edificio de Ingeniería Industrial.",
  fecha: "2026-11-23",
  hora: "10:00",
  lugar: "Edificio de Ingeniería Industrial",
};
