/** Horario de atención de un día (o grupo de días) en el registro presencial. */
export interface DiaRegistro {
  /** Día o días, p. ej. "Martes y miércoles". */
  dia: string;
  /** Bloques de atención, en orden. */
  horarios: string[];
}

/** Contenido de la ventana "¿Cómo me registro?" del hero. */
export const registro = {
  /** Texto del botón del hero que abre la ventana. */
  boton: "¿Cómo me registro?",

  /** Título de la ventana. */
  titulo: "Registro para la Semana Académica",

  /** Párrafo de introducción; `lugar` se resalta dentro del texto. */
  intro: {
    antes: "El registro es presencial en el",
    despues: ". Estos son los días y horarios de atención:",
  },
  /** Lugar donde se hace el registro. */
  lugar: "Departamento de Industrial",

  /**
   * Fechas en que está abierto el registro, p. ej. "Del 3 al 14 de noviembre".
   * Si queda vacío ("") no se muestra; con valor aparece arriba de los horarios.
   */
  periodo: "",

  /** Días y horarios de atención (se muestran en este orden). */
  horarios: [
    {
      dia: "Lunes",
      horarios: ["9:00 a 10:00 a. m.", "11:00 a. m. a 1:00 p. m.", "2:00 a 3:00 p. m."],
    },
    {
      dia: "Martes y miércoles",
      horarios: ["9:00 a 10:00 a. m.", "11:00 a. m. a 12:00 p. m.", "2:00 a 3:00 p. m."],
    },
    {
      dia: "Jueves",
      horarios: ["9:00 a 10:00 a. m.", "11:00 a. m. a 12:00 p. m.", "2:00 a 4:00 p. m."],
    },
  ] satisfies DiaRegistro[],

  /**
   * Lo que debe llevar el alumno, p. ej. ["Credencial vigente", "Comprobante de pago"].
   * Si la lista está vacía no se muestra; con elementos aparece debajo de los horarios.
   */
  requisitos: [] as string[],

  /**
   * URL de un formulario de registro en línea (p. ej. "https://forms.gle/…").
   * Si queda vacío ("") no se muestra; con valor, la ventana agrega un botón
   * principal "Registrarme en línea" que abre la URL en una pestaña nueva.
   */
  formularioUrl: "",

  /** Mensaje de cierre. */
  cierre: "¡Te esperamos!",

  /** Textos de los controles de la ventana. */
  acciones: {
    enLinea: "Registrarme en línea",
    entendido: "Entendido",
    cerrar: "Cerrar",
  },
};
