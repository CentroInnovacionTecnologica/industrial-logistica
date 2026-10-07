import { images } from "./images";

/** Evento destacado que se muestra en el hero. */
export const featured = {
  eyebrow: "Semana Académica",
  careers: ["Ingeniería Industrial", "Ingeniería en Logística"] as const,
  motto: "Optimizando el presente, diseñando el futuro",

  dates: "24 al 27 de noviembre de 2026",
  /** Primer día, en formato legible por máquina (atributo datetime). */
  datesIso: "2026-11-24",
  place: "Instituto Tecnológico de Durango",

  /** Fecha objetivo de la cuenta regresiva (hora del centro de México). */
  startsAt: "2026-11-24T09:00:00-06:00",
  countdown: {
    /** Texto para lectores de pantalla (la barra no se anuncia cada segundo). */
    accessibleLabel:
      "El evento inicia el 24 de noviembre de 2026 a las 9:00 de la mañana.",
    finished: "¡El evento ya comenzó!",
    units: {
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
    },
  },

  actions: {
    details: { label: "Ver detalles", href: "#" },
    // Después será el enlace al formulario de Google Forms.
    register: { label: "Registrarme", href: "#" },
  },

  /** La fotografía se activa en src/data/images.ts (HERO_PHOTO). */
  image: images.heroPhoto,
  imageAlt:
    "Estudiantes y profesionistas de ingeniería industrial y logística en un centro de distribución",
};

export type Featured = typeof featured;
export type CountdownUnit = keyof Featured["countdown"]["units"];
