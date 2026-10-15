/** Día de registro presencial: única fuente de la tabla semanal y del resumen. */
export interface DiaRegistro {
  /** Nombre completo, p. ej. "Miércoles". */
  dia: string;
  /** Abreviatura para la tabla en celular, p. ej. "Mié". */
  abrev: string;
  /** Número de día de la semana de `Date.getDay()` (1 = lunes … 5 = viernes). */
  numero: number;
  /** Hora de inicio (formato 24 h) de cada bloque de una hora con registro. */
  horas: number[];
}

/** Tramo continuo de registro: de `inicio` a `fin` (formato 24 h). */
export interface Tramo {
  inicio: number;
  fin: number;
}

/** Contenido de la página /registro y del botón del hero que lleva a ella. */
export const registro = {
  /** Texto del botón del hero. */
  boton: "¿Cómo me registro?",

  /** Párrafo de introducción; `lugar` se resalta dentro del texto. */
  intro: {
    antes: "El registro es presencial en el",
    despues: ". Consulta los días y horarios de atención:",
  },
  /** Lugar donde se hace el registro. */
  lugar: "Departamento de Ingeniería Industrial",

  /**
   * Fechas en que está abierto el registro, p. ej. "Del 3 al 14 de noviembre".
   * Si queda vacío ("") no se muestra; con valor aparece debajo de la introducción.
   */
  periodo: "",

  /**
   * Filas de la tabla semanal: hora de inicio de la primera y de la última
   * (formato 24 h). Con 7 y 15 la tabla va de 7:00 a 16:00.
   */
  rango: { desde: 7, hasta: 15 },

  /** Días de registro (se muestran en este orden, de lunes a viernes). */
  dias: [
    { dia: "Lunes", abrev: "Lun", numero: 1, horas: [9, 11, 12, 14] },
    { dia: "Martes", abrev: "Mar", numero: 2, horas: [9, 11, 14] },
    { dia: "Miércoles", abrev: "Mié", numero: 3, horas: [9, 11, 14] },
    { dia: "Jueves", abrev: "Jue", numero: 4, horas: [9, 11, 14, 15] },
    { dia: "Viernes", abrev: "Vie", numero: 5, horas: [10, 11, 12] },
  ] satisfies DiaRegistro[],

  /**
   * Lo que debe llevar el alumno, p. ej. ["Credencial vigente", "Comprobante de pago"].
   * Si la lista está vacía no se muestra; con elementos aparece debajo del resumen.
   */
  requisitos: [] as string[],

  /**
   * URL de un formulario de registro en línea (p. ej. "https://forms.gle/…").
   * Si queda vacío ("") no se muestra; con valor, la página agrega un botón
   * "Registrarme en línea" que abre la URL en una pestaña nueva.
   */
  formularioUrl: "",

  /** Mensaje de cierre. */
  cierre: "¡Te esperamos!",

  /** Texto del botón del formulario en línea. */
  enLinea: "Registrarme en línea",
};

/* ---------- Cálculos a partir de `dias` ---------- */

/** Une las horas consecutivas en tramos: [11, 12] → 11:00 a 13:00. */
export function tramos(horas: number[]): Tramo[] {
  const resultado: Tramo[] = [];
  for (const hora of [...horas].sort((a, b) => a - b)) {
    const ultimo = resultado.at(-1);
    if (ultimo && ultimo.fin === hora) ultimo.fin = hora + 1;
    else resultado.push({ inicio: hora, fin: hora + 1 });
  }
  return resultado;
}

const periodo = (hora: number) => (hora < 12 ? "a. m." : "p. m.");
const hora12 = (hora: number) => `${hora % 12 || 12}:00`;

/** "9:00 a 10:00 a. m.", "11:00 a. m. a 1:00 p. m.", "2:00 a 4:00 p. m." */
export function formatoTramo({ inicio, fin }: Tramo): string {
  return periodo(inicio) === periodo(fin)
    ? `${hora12(inicio)} a ${hora12(fin)} ${periodo(fin)}`
    : `${hora12(inicio)} ${periodo(inicio)} a ${hora12(fin)} ${periodo(fin)}`;
}

/** "Martes", "Martes y miércoles", "Lunes, martes y miércoles". */
function unirDias(dias: string[]): string {
  const nombres = dias.map((d, i) => (i === 0 ? d : d.toLowerCase()));
  return nombres.length === 1
    ? nombres[0]
    : `${nombres.slice(0, -1).join(", ")} y ${nombres.at(-1)}`;
}

/**
 * Resumen por día: los días seguidos con exactamente los mismos horarios se
 * agrupan en una fila ("Martes y miércoles").
 */
export function resumenRegistro(dias: DiaRegistro[] = registro.dias) {
  const grupos: { dias: string[]; horarios: string[] }[] = [];
  for (const { dia, horas } of dias) {
    const horarios = tramos(horas).map(formatoTramo);
    const anterior = grupos.at(-1);
    if (anterior && anterior.horarios.join("|") === horarios.join("|")) {
      anterior.dias.push(dia);
    } else {
      grupos.push({ dias: [dia], horarios });
    }
  }
  return grupos.map((g) => ({ dia: unirDias(g.dias), horarios: g.horarios }));
}
