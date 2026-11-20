/* ---------- Charlas ---------- */

import { ordenarPorFecha, valor } from "./eventos";
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
    fecha: "2026-11-25",
    hora: "13:00",
    lugar: "Centro de Innovación Tecnológica · Sala de Videoconferencias",
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
    fecha: "2026-11-25",
    hora: "17:00",
    lugar: "Centro de Innovación Tecnológica · Sala de Videoconferencias",
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
    fecha: "2026-11-25",
    hora: "13:00",
    lugar: "Sala de Usos Múltiples",
  },
  {
    id: 4,
    titulo: "Del aula al mundo real: lo que nadie te dice del ingeniero industrial",
    ponente: "Dr. Juan Manuel Esquivel Rueda",
    cargo: "CEO de CRECE Consultor, auditor de sistemas de gestión y capacitador",
    descripcion:
      "Una charla directa, sin rodeos. Casos reales, retos actuales y una ruta clara para convertirte en el ingeniero que las empresas quieren contratar. Liderazgo y resultados: lo que se vive en el piso de producción, no en los libros.",
    frase: "Tu título dice lo que estudiaste. Lo que resuelves dice quién eres.",
    fecha: "2026-11-26",
    hora: "13:00",
    lugar: "Sala de Usos Múltiples",
  },
  {
    id: 5,
    titulo: "ISO versión 2026: las nuevas reglas del juego para la gestión",
    ponente: "Mtro. Oscar Alfredo Lara Rodríguez",
    cargo: "Docente ITD · Auditor",
    descripcion:
      "Las normas cambian porque el mundo cambia, y con ellas el perfil que buscan las empresas. Calidad, ambiente, seguridad y auditoría ya no son lo que eran. Aquí entenderás qué viene, cómo te afecta y cómo sacarle ventaja desde ahora. ¿Estás listo para las nuevas reglas?",
    fecha: "2026-11-26",
    hora: "13:00",
    lugar: "Centro de Innovación Tecnológica · Sala de Videoconferencias",
  },
  {
    id: 6,
    titulo: "Ingenieros que inspiran: comunicación, liderazgo e influencia",
    tipo: "Charla transformacional",
    ponente: "Alejandra Ruiz",
    descripcion:
      "Fomentar en los participantes el desarrollo de habilidades de comunicación, liderazgo e influencia, destacando la importancia de saber comunicar soluciones, coordinar equipos de trabajo y transmitir decisiones técnicas de manera clara, efectiva y estratégica.",
    fecha: "2026-11-26",
    hora: "16:00",
    lugar: "Sala de Usos Múltiples",
  },
  {
    id: 7,
    titulo: "Líderes que inspiran, equipos que transforman",
    tipo: "Charla motivacional",
    ponente: "Isaac Cisneros",
    descripcion:
      "Fortalecer las habilidades personales y profesionales de los estudiantes para formar líderes capaces de impulsar equipos de alto rendimiento y contribuir al éxito de las organizaciones.",
    fecha: "2026-11-26",
    hora: "17:00",
    lugar: "Sala de Usos Múltiples",
  },
];

/** Texto del chip: el campo `tipo` o, si está vacío, "Charla". */
export function tipoDeCharla(charla: Charla): string {
  return valor(charla.tipo) ?? "Charla";
}

/** Primero las que tienen fecha (de la más próxima a la más lejana); al final las demás. */
export const charlasOrdenadas: Charla[] = ordenarPorFecha(charlas);