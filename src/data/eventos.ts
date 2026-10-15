/* ---------- Eventos con ponente (conferencias y charlas) ---------- */

/**
 * CAMPOS OPCIONALES
 * ------------------------------------------------------------------
 * Todo campo marcado con "?" se puede dejar vacío u omitir: la tarjeta no
 * muestra ni el dato ni su ícono (tampoco un "Por confirmar"). Para que
 * aparezca, basta con llenarlo; p. ej. agrega  hora: "13:00"  o
 * lugar: "Auditorio"  y se mostrará en la fila de datos.
 *
 * Si un evento no tiene descripción, puntos, fecha, hora ni lugar, la tarjeta
 * muestra "Pronto compartiremos más detalles."
 */

/** Tema de la lista con viñetas. Con `titulo` se muestra "Título: texto". */
export interface PuntoEvento {
  titulo?: string;
  texto: string;
}

export interface Evento {
  id: number;
  titulo: string;
  ponente: string;
  /** Sobrenombre del ponente. */
  alias?: string;
  /** Ej. "Conferencista y motivador". */
  cargo?: string;
  /** El texto entre **dobles asteriscos** se muestra en negritas. */
  descripcion?: string;
  /** Lista de temas, debajo de la descripción. */
  puntos?: PuntoEvento[];
  /** Frase destacada. */
  frase?: string;
  /** Formato ISO, ej. "2026-11-24". */
  fecha?: string;
  /** Formato de 24 h, ej. "13:00". */
  hora?: string;
  lugar?: string;
  /** Texto del chip, ej. "Conferencia magistral". Vacío: "Conferencia". Solo en conferencias. */
  tipo?: string;
  /** Ocupa el ancho completo de la cuadrícula y va primero. Solo en conferencias. */
  destacada?: boolean;
}

/** Valor del campo sin espacios, o `undefined` si está vacío. */
export function valor(texto: string | undefined): string | undefined {
  const limpio = texto?.trim();
  return limpio ? limpio : undefined;
}

/** Primero los que tienen fecha (del más próximo al más lejano); al final los demás. */
export function ordenarPorFecha<T extends { fecha?: string }>(eventos: T[]): T[] {
  return [...eventos].sort((a, b) => {
    const fa = valor(a.fecha);
    const fb = valor(b.fecha);
    if (fa && fb) return fa.localeCompare(fb);
    if (fa) return -1;
    if (fb) return 1;
    return 0;
  });
}

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
