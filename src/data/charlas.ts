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
  {
    id: 4,
    titulo: "Del aula al mundo real: lo que nadie te dice del ingeniero industrial",
    ponente: "Dr. Juan Manuel Esquivel Rueda",
    cargo: "CEO de CRECE Consultor, auditor de sistemas de gestión y capacitador",
    descripcion:
      "Una charla directa, sin rodeos. Casos reales, retos actuales y una ruta clara para convertirte en el ingeniero que las empresas quieren contratar. Liderazgo y resultados: lo que se vive en el piso de producción, no en los libros.",
    frase: "Tu título dice lo que estudiaste. Lo que resuelves dice quién eres.",
    fecha: "",
    hora: "",
    lugar: "",
  },
  {
    id: 5,
    titulo: "ISO versión 2026: las nuevas reglas del juego para la gestión",
    ponente: "Mtro. Oscar Alfredo Lara Rodríguez",
    cargo: "Docente ITD · Auditor",
    descripcion:
      "Las normas cambian porque el mundo cambia, y con ellas el perfil que buscan las empresas. Calidad, ambiente, seguridad y auditoría ya no son lo que eran. Aquí entenderás qué viene, cómo te afecta y cómo sacarle ventaja desde ahora. ¿Estás listo para las nuevas reglas?",
    fecha: "",
    hora: "",
    lugar: "",
  },
];

/** Primero las que tienen fecha (de la más próxima a la más lejana); al final las demás. */
export const charlasOrdenadas: Charla[] = ordenarPorFecha(charlas);
