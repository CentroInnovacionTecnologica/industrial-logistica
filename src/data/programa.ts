/* ---------- Programa de la Semana Académica ---------- */

/**
 * Cada actividad del programa. Las que comparten día y hora de inicio se
 * muestran juntas como "Actividades simultáneas". Los campos con "?" se pueden
 * omitir: sin `lugar` no aparece el pin; sin `enlace` la tarjeta no es clicable.
 */
export interface ActividadPrograma {
  /** Formato ISO, ej. "2026-11-24". */
  dia: string;
  /** Formato de 24 h, ej. "09:00". */
  inicio: string;
  fin: string;
  /** Texto del chip; su color se elige en `tonoDeTipo`. */
  tipo: string;
  titulo: string;
  /** Se muestra en cursiva gris debajo del título. */
  detalle?: string;
  lugar?: string;
  /** Ruta de su página, ej. "/actividades/charlas". */
  enlace?: string;
}

const TEATRO = "Teatro Ricardo Castro";
const CIT = "Centro de Innovación Tecnológica";
const SUM = "Sala de Usos Múltiples";

export const programa: ActividadPrograma[] = [
  /* Martes 24 */
  { dia: "2026-11-24", inicio: "09:00", fin: "10:00", tipo: "Ceremonia", titulo: "Inauguración", lugar: TEATRO, enlace: "/actividades/inauguracion" },
  { dia: "2026-11-24", inicio: "10:00", fin: "11:00", tipo: "Conferencia magistral", titulo: "Gestión de operaciones en planta", lugar: TEATRO, enlace: "/actividades/conferencias" },
  { dia: "2026-11-24", inicio: "11:00", fin: "12:00", tipo: "Conferencia", titulo: "México conectado: oportunidades en logística nacional e internacional", detalle: "Conectividad", lugar: TEATRO, enlace: "/actividades/conferencias" },
  { dia: "2026-11-24", inicio: "12:00", fin: "12:30", tipo: "Receso", titulo: "Receso" },
  { dia: "2026-11-24", inicio: "12:30", fin: "13:30", tipo: "Conferencia", titulo: "El éxito no es para payasos", detalle: "Motivacional", lugar: TEATRO, enlace: "/actividades/conferencias" },
  { dia: "2026-11-24", inicio: "13:30", fin: "15:00", tipo: "Panel", titulo: "Panel de expertos", detalle: "“Conectando experiencias, optimizando el futuro”", lugar: TEATRO, enlace: "/actividades/paneles" },
  { dia: "2026-11-24", inicio: "16:00", fin: "17:00", tipo: "Conferencia", titulo: "Si no usas IA, ¿eres competitivo?", detalle: "Competitividad", lugar: CIT, enlace: "/actividades/conferencias" },
  { dia: "2026-11-24", inicio: "17:00", fin: "18:00", tipo: "Ceremonia", titulo: "Entrega de Certificaciones", lugar: CIT, enlace: "/actividades/certificaciones" },

  /* Miércoles 25 */
  { dia: "2026-11-25", inicio: "09:00", fin: "13:00", tipo: "Cursos", titulo: "Cursos y talleres", enlace: "/cursos" },
  { dia: "2026-11-25", inicio: "13:00", fin: "15:00", tipo: "Charla", titulo: "El talento que México va a necesitar hacia 2030", lugar: CIT, enlace: "/actividades/charlas" },
  { dia: "2026-11-25", inicio: "13:00", fin: "15:00", tipo: "Charla", titulo: "CV 2.0: tu marca personal", lugar: SUM, enlace: "/actividades/charlas" },
  { dia: "2026-11-25", inicio: "16:00", fin: "17:00", tipo: "Foro", titulo: "Encuentro de Ingenieras Egresadas", detalle: "“Construyendo camino en la industria”", lugar: CIT, enlace: "/actividades/foro" },
  { dia: "2026-11-25", inicio: "17:00", fin: "18:00", tipo: "Charla", titulo: "La logística salva vidas: el viaje al paciente", lugar: CIT, enlace: "/actividades/charlas" },

  /* Jueves 26 */
  { dia: "2026-11-26", inicio: "09:00", fin: "13:00", tipo: "Cursos", titulo: "Cursos y talleres", enlace: "/cursos" },
  { dia: "2026-11-26", inicio: "13:00", fin: "15:00", tipo: "Charla", titulo: "ISO versión 2026: las nuevas reglas del juego para la gestión", lugar: CIT, enlace: "/actividades/charlas" },
  { dia: "2026-11-26", inicio: "13:00", fin: "15:00", tipo: "Charla", titulo: "Del aula al mundo real: lo que nadie te dice del ingeniero industrial", lugar: SUM, enlace: "/actividades/charlas" },

  /* Viernes 27 */
  { dia: "2026-11-27", inicio: "09:00", fin: "10:00", tipo: "Visitas", titulo: "Visitas a empresas", enlace: "/actividades/visitas" },
  { dia: "2026-11-27", inicio: "10:00", fin: "12:00", tipo: "Deportivas", titulo: "Rally y 100 Ingenieros Dijeron", enlace: "/actividades/deportivas" },
  { dia: "2026-11-27", inicio: "12:00", fin: "13:00", tipo: "Convivio", titulo: "Conjunto norteño y taquiza" },
  { dia: "2026-11-27", inicio: "13:00", fin: "13:30", tipo: "Ceremonia", titulo: "Premiación" },
  { dia: "2026-11-27", inicio: "13:30", fin: "14:00", tipo: "Ceremonia", titulo: "Clausura" },
];

/* ---------- Agrupación por día y por horario ---------- */

/** Actividades que empiezan a la misma hora (una o varias simultáneas). */
export interface BloquePrograma {
  inicio: string;
  fin: string;
  actividades: ActividadPrograma[];
}

export interface DiaPrograma {
  /** Formato ISO, ej. "2026-11-24". */
  dia: string;
  bloques: BloquePrograma[];
}

/** Días en orden y, dentro de cada uno, bloques por hora de inicio. */
export const diasPrograma: DiaPrograma[] = [...new Set(programa.map((a) => a.dia))]
  .sort()
  .map((dia) => {
    const bloques: BloquePrograma[] = [];
    for (const actividad of programa
      .filter((a) => a.dia === dia)
      .sort((a, b) => a.inicio.localeCompare(b.inicio))) {
      const bloque = bloques.find((b) => b.inicio === actividad.inicio);
      if (bloque) {
        bloque.actividades.push(actividad);
        if (actividad.fin > bloque.fin) bloque.fin = actividad.fin;
      } else {
        bloques.push({ inicio: actividad.inicio, fin: actividad.fin, actividades: [actividad] });
      }
    }
    return { dia, bloques };
  });

/* ---------- Color del chip por tipo ---------- */

const tonosTipo = {
  conferencia: "bg-guinda/10 text-guinda-dark",
  charla: "bg-navy text-white",
  ambar: "bg-amber-soft text-amber-dark",
  grisAzulado: "bg-muted/12 text-muted",
  neutro: "bg-white text-muted ring-1 ring-inset ring-line",
};

/** Clases del chip según el tipo de actividad. */
export function tonoDeTipo(tipo: string): string {
  const t = tipo.toLocaleLowerCase("es-MX");
  if (t.startsWith("conferencia")) return tonosTipo.conferencia;
  if (t.startsWith("charla")) return tonosTipo.charla;
  if (t.startsWith("panel") || t.startsWith("foro")) return tonosTipo.ambar;
  if (t === "cursos" || t === "visitas" || t === "deportivas") return tonosTipo.grisAzulado;
  return tonosTipo.neutro; // ceremonias, receso, convivio
}
