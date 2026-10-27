/* ---------- Actividades deportivas ---------- */

/** Ícono decorativo junto al nombre (ver DeportivaCard.astro). */
export type IconoDeportiva = "rally" | "futbol" | "concurso" | "ajedrez";

export interface ActividadDeportiva {
  id: string;
  nombre: string;
  icono: IconoDeportiva;
  descripcion: string;
  lugares: number;
  /** Estudiantes inscritos (los disponibles se calculan, ver cupo.ts). */
  inscritos: number;
}

export const deportivas: ActividadDeportiva[] = [
  {
    id: "rally",
    nombre: "Rally",
    icono: "rally",
    descripcion:
      "¡Pon a prueba tu agilidad, trabajo en equipo y destreza mental! Una competencia dinámica en la que formarás equipos para superar una serie de retos físicos, dinámicas de integración y acertijos a lo largo de un circuito de estaciones. Es la actividad ideal para estrechar lazos, fomentar el liderazgo y vivir el espíritu universitario al máximo.",
    lugares: 100,
    inscritos: 14,
  },
  {
    id: "futbol",
    nombre: "Futbol",
    icono: "futbol",
    descripcion:
      "¡Demuestra tu talento en la cancha! Prepárate para una jornada llena de pasión, deportividad y estrategia en nuestro torneo de futbol. Convive con tus compañeros, defiende la camiseta de tu carrera y vive la emoción del deporte en un ambiente de sana competencia y juego limpio.",
    lugares: 70,
    inscritos: 0,
  },
  {
    id: "100-ingenieros-dijeron",
    nombre: "100 Ingenieros Dijeron",
    icono: "concurso",
    descripcion:
      "Basada en el famoso formato de los concursos de televisión, esta divertida dinámica pone a competir a los estudiantes para adivinar las respuestas más populares sobre cultura general, vida institucional, ingeniería y hábitos estudiantiles. ¡Pon a prueba el ingenio, la rapidez mental y el buen humor de tu equipo!",
    lugares: 100,
    inscritos: 1,
  },
  {
    id: "ajedrez",
    nombre: "Ajedrez",
    icono: "ajedrez",
    descripcion:
      "El arte de la estrategia, la concentración y el análisis táctico en su máxima expresión. Te invitamos a participar en el torneo de ajedrez, un espacio diseñado para que pongas a prueba tus habilidades mentales, planeación y toma de decisiones partida a partida ante los mejores estrategas del instituto.",
    lugares: 20,
    inscritos: 0,
  },
];

/** Suma de los cupos de todas las actividades. */
export const totalLugaresDeportivas = deportivas.reduce(
  (total, actividad) => total + actividad.lugares,
  0,
);
