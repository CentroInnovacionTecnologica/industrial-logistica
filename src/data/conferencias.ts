/* ---------- Conferencias ---------- */

/**
 * CAMPOS OPCIONALES
 * ------------------------------------------------------------------
 * Todo campo marcado con "?" se puede dejar vacío u omitir: la tarjeta no
 * muestra ni el dato ni su ícono (tampoco un "Por confirmar"). Para que
 * aparezca, basta con llenarlo; p. ej. agrega  hora: "13:00"  o
 * lugar: "Auditorio"  y se mostrará en la fila de datos.
 *
 * Si una conferencia no tiene descripción, fecha, hora ni lugar, la tarjeta
 * muestra "Pronto compartiremos más detalles."
 */

export interface Conferencia {
  id: number;
  titulo: string;
  ponente: string;
  /** Sobrenombre del ponente. */
  alias?: string;
  /** Ej. "Conferencista y motivador". */
  cargo?: string;
  descripcion?: string;
  /** Frase destacada. */
  frase?: string;
  /** Formato ISO, ej. "2026-11-24". */
  fecha?: string;
  /** Formato de 24 h, ej. "13:00". */
  hora?: string;
  lugar?: string;
}

export const conferencias: Conferencia[] = [
  {
    id: 1,
    titulo: "El éxito no es para payasos",
    ponente: "Ing. Julio César López Hernández",
    alias: "El Gabbo",
    cargo: "Conferencista y motivador",
    descripcion:
      "Tema de motivación personal orientado a eliminar el ‘no puedo’, fortalecer la confianza, reconocer el valor del aprendizaje en el error y animar a las personas a arriesgarse para alcanzar sus metas.",
    frase: "Una experiencia inspiradora, dinámica y de alto impacto.",
    fecha: "2026-11-24",
    hora: "",
    lugar: "",
  },
  {
    id: 2,
    titulo: "Si no usas IA, ¿eres competitivo?",
    ponente: "Aurora Carrales",
    descripcion:
      "Análisis estratégico sobre el impacto de la inteligencia artificial en el entorno profesional actual, explorando cómo la automatización, las herramientas inteligentes y la transformación digital se han convertido en elementos clave para la competitividad, la innovación y el desarrollo de ventajas en el mercado laboral y empresarial.",
    frase: "Una conferencia visionaria, práctica y de alto impacto.",
    fecha: "2026-11-24",
    hora: "",
    lugar: "",
  },
];

/** Valor del campo sin espacios, o `undefined` si está vacío. */
export function valor(texto: string | undefined): string | undefined {
  const limpio = texto?.trim();
  return limpio ? limpio : undefined;
}

/** Primero las que tienen fecha (de la más próxima a la más lejana); al final las demás. */
export const conferenciasOrdenadas: Conferencia[] = [...conferencias].sort((a, b) => {
  const fa = valor(a.fecha);
  const fb = valor(b.fecha);
  if (fa && fb) return fa.localeCompare(fb);
  if (fa) return -1;
  if (fb) return 1;
  return 0;
});

const formatoFecha = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-11-24" → "24 de noviembre de 2026". */
export function formatearFecha(iso: string): string {
  return formatoFecha.format(new Date(`${iso}T00:00:00Z`));
}
