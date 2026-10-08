/* ---------- Cursos de actualización ---------- */

export const temas = [
  "Introducción a la carrera",
  "Higiene y seguridad",
  "Excel y datos",
  "Habilidades blandas",
  "Calidad",
  "Normas y auditoría",
  "Logística",
  "Diseño y manufactura",
] as const;

export type Tema = (typeof temas)[number];

export type Carrera = "industrial" | "logistica" | "ambas";

export interface Curso {
  id: number;
  nombre: string;
  tema: Tema;
  descripcion: string;
  carrera: Carrera;
  /** El curso es de una carrera, pero admite estudiantes de la otra. */
  abiertoAOtraCarrera: boolean;
  semestres: number[];
  /** `null` = por confirmar. */
  duracionHoras: number | null;
  /** `null` = por confirmar. */
  lugares: number | null;
}

/** Cursos que se muestran por página en la cuadrícula. */
export const CURSOS_POR_PAGINA = 6;

export const SEMESTRES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export const carreraLabels: Record<Carrera, string> = {
  industrial: "Industrial",
  logistica: "Logística",
  ambas: "Ambas carreras",
};

/** Ordinal en español: 1 → "1.°" */
export const ordinal = (n: number): string => `${n}.°`;

/**
 * Rango de semestres sin la palabra "semestre":
 * [1] → "1.°" · [6, 7] → "6.° y 7.°" · [7, 8, 9] → "7.° a 9.°"
 */
export function formatSemestres(semestres: number[]): string {
  const [first] = semestres;
  const last = semestres[semestres.length - 1];
  if (semestres.length === 1) return ordinal(first);
  if (semestres.length === 2) return `${ordinal(first)} y ${ordinal(last)}`;
  return `${ordinal(first)} a ${ordinal(last)}`;
}

/** Carreras en cuyo filtro aparece el curso. */
export function carrerasDelCurso(curso: Curso): Exclude<Carrera, "ambas">[] {
  if (curso.carrera === "ambas" || curso.abiertoAOtraCarrera) {
    return ["industrial", "logistica"];
  }
  return [curso.carrera];
}

// Los id no son consecutivos (no existe el 3). El arreglo va ordenado por id.
export const cursos: Curso[] = [
  {
    id: 1,
    nombre:
      "Ingeniería Industrial en la Práctica: Procesos, Productividad y Campo Profesional",
    tema: "Introducción a la carrera",
    descripcion:
      "Simulación de una línea de producción por rondas (tiempos, cuellos de botella y mejora), perfil de egreso, especialidades del ITD y testimonio de un egresado.",
    carrera: "industrial",
    abiertoAOtraCarrera: false,
    semestres: [1],
    duracionHoras: 8,
    lugares: 25,
  },
  {
    id: 2,
    nombre: "Logística en Movimiento: El Viaje de un Producto",
    tema: "Introducción a la carrera",
    descripcion:
      "Recorrido de un producto del proveedor al cliente, Juego de la Cerveza (efecto látigo), campos laborales e invitado de una empresa logística.",
    carrera: "logistica",
    abiertoAOtraCarrera: false,
    semestres: [1],
    duracionHoras: 8,
    lugares: 25,
  },
  {
    id: 4,
    nombre: "Zona Segura: Bienvenido a la Planta",
    tema: "Higiene y seguridad",
    descripcion:
      "Cultura de seguridad, equipo de protección personal (NOM-017-STPS), señalización (NOM-026-STPS) y actos y condiciones inseguras.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [1],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 5,
    nombre: "Excel Básico para la Productividad",
    tema: "Excel y datos",
    descripcion:
      "Interfaz, formatos, fórmulas básicas, referencias y gráficos sencillos.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [1, 2, 3],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 6,
    nombre:
      "Comunicación Efectiva para Ingenieros: Expresión Oral, Escrita y Trabajo en Equipo",
    tema: "Habilidades blandas",
    descripcion:
      "Comunicación asertiva, escucha activa, presentaciones orales, redacción de correos y reportes técnicos, y retroalimentación en equipos de trabajo.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [2, 3, 4],
    duracionHoras: 8,
    lugares: 25,
  },
  {
    id: 7,
    nombre: "Metodología 5S y Gestión Visual: Bases de la Excelencia Operativa",
    tema: "Calidad",
    descripcion:
      "Las 5S paso a paso, auditoría 5S, controles visuales y aplicación práctica en un área del instituto.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [3, 4],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 8,
    nombre: "Excel Intermedio: Mejora tu Gestión de Datos",
    tema: "Excel y datos",
    descripcion:
      "BUSCARX, SI anidados, filtros, validación de datos y formato condicional.",
    carrera: "industrial",
    abiertoAOtraCarrera: true,
    semestres: [4, 5, 6],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 9,
    nombre:
      "Manufactura Esbelta: Identificación de Desperdicios y Mapeo de la Cadena de Valor",
    tema: "Calidad",
    descripcion:
      "Los 8 desperdicios, principios Lean, elaboración de un VSM actual y futuro, y propuesta de mejora.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [4, 5],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 10,
    nombre: "Riesgo Bajo Control: Seguridad con Normas STPS",
    tema: "Higiene y seguridad",
    descripcion:
      "Análisis de riesgos, NOM-002, NOM-030, NOM-035 y comisiones de seguridad e higiene.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [5, 6],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 11,
    nombre: "Gestión Logística Integral: Del Almacén al Cliente",
    tema: "Logística",
    descripcion:
      "Gestión de inventarios, layout de almacenes, picking y KPI logísticos.",
    carrera: "logistica",
    abiertoAOtraCarrera: true,
    semestres: [5, 6],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 12,
    nombre: "Fundamentos de Diseño en SolidWorks: Modelado de Piezas y Planos",
    tema: "Diseño y manufactura",
    descripcion:
      "Croquis, extrusiones, operaciones básicas, ensambles sencillos y planos.",
    carrera: "industrial",
    abiertoAOtraCarrera: false,
    semestres: [6, 7],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 13,
    nombre: "Normas que Abren Puertas: ISO 9001, 14001 y 45001",
    tema: "Normas y auditoría",
    descripcion:
      "Estructura de alto nivel, requisitos clave y sistemas integrados de gestión. Incluye DC-3.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [6, 7],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 14,
    nombre: "Rutas sin Fronteras: Comercio Exterior e Incoterms 2020",
    tema: "Logística",
    descripcion:
      "Incoterms, documentación aduanal, modos de transporte y costeo logístico.",
    carrera: "logistica",
    abiertoAOtraCarrera: false,
    semestres: [6, 7],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 15,
    nombre: "Core Tools: El Pasaporte Automotriz (APQP y PPAP)",
    tema: "Calidad",
    descripcion:
      "Fases de APQP, los 18 elementos del PPAP y casos de la industria automotriz.",
    carrera: "industrial",
    abiertoAOtraCarrera: false,
    semestres: [7, 8, 9],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 16,
    nombre: "Impresión 3D Aplicada: Del Modelo CAD a la Pieza Física",
    tema: "Diseño y manufactura",
    descripcion:
      "Fundamentos de la impresión 3D como tecnología de manufactura aditiva: diseño, preparación, fabricación y evaluación de piezas.",
    carrera: "industrial",
    abiertoAOtraCarrera: false,
    semestres: [7, 8],
    duracionHoras: 8,
    lugares: 30,
  },
  {
    id: 17,
    nombre:
      "Liderazgo Disruptivo: Innovación y Gestión del Cambio en la Industria",
    tema: "Habilidades blandas",
    descripcion:
      "Estilos de liderazgo, pensamiento disruptivo, gestión del cambio, toma de decisiones bajo incertidumbre y liderazgo de equipos de alto desempeño.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [7, 8, 9],
    duracionHoras: 8,
    lugares: 25,
  },
  {
    id: 18,
    nombre: "Auditor en Formación: Auditorías Internas ISO 19011",
    tema: "Normas y auditoría",
    descripcion:
      "Planeación, ejecución, hallazgos, no conformidades e informe de auditoría.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [7, 8, 9],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 19,
    nombre: "Logística Inteligente: KPI y Power BI para la Cadena de Suministro",
    tema: "Logística",
    descripcion:
      "Indicadores de desempeño, modelado de datos y tableros en Power BI.",
    carrera: "logistica",
    abiertoAOtraCarrera: true,
    semestres: [7, 8, 9],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 20,
    nombre:
      "Listo para la Industria: IATF 16949:2016, primera edición y estado de revisión de la segunda edición",
    tema: "Normas y auditoría",
    descripcion:
      "Fundamentos de la norma IATF 16949:2016 y su aplicación en los sistemas de gestión de calidad de la industria automotriz.",
    carrera: "industrial",
    abiertoAOtraCarrera: false,
    semestres: [8, 9, 10],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 21,
    nombre: "Introducción al Maquinado con CAM",
    tema: "Diseño y manufactura",
    descripcion:
      "Fundamentos del maquinado asistido por computadora (CAM): flujo básico de programación, generación de trayectorias y preparación de procesos para máquinas CNC.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [8, 9, 10],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 22,
    nombre:
      "Excel Avanzado para la Toma de Decisiones: Tablas Dinámicas, Power Query y Tableros",
    tema: "Excel y datos",
    descripcion:
      "Tablas dinámicas, Power Query, tableros e introducción a macros.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [7, 8, 9, 10],
    duracionHoras: 8,
    lugares: 20,
  },
  {
    id: 23,
    nombre: "FlexSim: Modelado de Procesos",
    tema: "Diseño y manufactura",
    descripcion:
      "Simulación de sistemas de eventos discretos en un entorno visual 3D para analizar, optimizar y tomar decisiones sobre operaciones de manufactura, logística o servicios.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [7, 8, 9, 10],
    duracionHoras: null,
    lugares: null,
  },
  {
    id: 24,
    nombre:
      "Estadística Aplicada con Inteligencia Artificial para la Toma de Decisiones",
    tema: "Excel y datos",
    descripcion:
      "Técnicas estadísticas descriptivas e inferenciales apoyadas con herramientas de inteligencia artificial para el análisis de datos y la mejora de la productividad en procesos organizacionales.",
    carrera: "ambas",
    abiertoAOtraCarrera: false,
    semestres: [7, 8],
    duracionHoras: 8,
    lugares: 20,
  },
];
