import type { Carrera } from "../../data/cursos";

/** Color por carrera: franja superior, chip del tema y etiqueta de carrera. */
export const tonos: Record<Carrera, { stripe: string; chip: string; tag: string }> = {
  industrial: {
    stripe: "bg-guinda",
    chip: "bg-guinda/10 text-guinda-dark",
    tag: "bg-guinda text-white",
  },
  logistica: {
    stripe: "bg-gold-dark",
    chip: "bg-gold/30 text-navy",
    tag: "bg-gold text-navy",
  },
  ambas: {
    stripe: "bg-navy",
    chip: "bg-navy/8 text-navy",
    tag: "bg-navy text-white",
  },
};
