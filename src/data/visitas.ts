import type { ImageMetadata } from "astro";
import type { Carrera } from "./cursos";

/* ---------- Visitas a empresas ---------- */

/**
 * LOGOS DE LAS EMPRESAS
 * ------------------------------------------------------------------
 * Guarda cada archivo en la carpeta  src/assets/visitas/  con este nombre:
 *
 *   Grupo Armas ........ grupo-armas.png
 *   Yazaki ............. yazaki.png
 *   Hulmaq ............. hulmaq.jpg
 *   Arca Continental ... arca-continental.png
 *   Termoeléctrica ..... termoelectrica.png
 *   Forestal Alfa ...... forestal-alfa.png
 *   SIR ................ sir.png
 *
 * Si un archivo no existe, la tarjeta muestra las iniciales de la empresa y
 * el build NO falla. Los logos nunca se amplían por encima de su tamaño
 * original, así que conviene usar archivos de al menos ~400 px de ancho.
 */

export type CarreraVisita = Extract<Carrera, "ambas" | "logistica">;

export interface Visita {
  id: string;
  empresa: string;
  /** Nombre del archivo dentro de src/assets/visitas/. */
  logo: string;
  carrera: CarreraVisita;
  /** Si falta o está vacía, la tarjeta dice "Pronto compartiremos más detalles.". */
  descripcion?: string;
  lugares: number;
}

export const visitasInfo = {
  salida: "8:00 a. m.",
  puntoDeSalida: "estacionamiento",
  aviso: "Todas las visitas salen a las 8:00 a. m. del estacionamiento del Instituto.",
};

export const carreraVisitaLabels: Record<CarreraVisita, string> = {
  ambas: "Ambas carreras",
  logistica: "Solo Logística",
};

export const visitas: Visita[] = [
  {
    id: "grupo-armas",
    empresa: "Grupo Armas",
    logo: "grupo-armas.png",
    carrera: "ambas",
    descripcion:
      "Empresa proveedora del sector automotriz e industrial establecida en Ciudad Industrial, Durango. Está especializada en la fabricación de intercambiadores de calor, sistemas de aire acondicionado para automóviles y piezas moldeadas de polietileno. Es una excelente opción para que los estudiantes observen procesos de manufactura especializada, control de calidad y manufactura esbelta en la industria automotriz local.",
    lugares: 25,
  },
  {
    id: "yazaki",
    empresa: "Yazaki",
    logo: "yazaki.png",
    carrera: "ambas",
    descripcion:
      "Filial de una corporación global de origen japonés y líder mundial en la manufactura de componentes eléctricos para la industria automotriz, destacando en la producción de arneses y sistemas de distribución eléctrica vehicular. Su planta en Durango cuenta con una amplia infraestructura de manufactura avanzada, lo que la convierte en un escenario ideal para analizar complejos sistemas de logística internacional, control de inventarios, líneas de ensamble de alto volumen y gestión de la cadena de suministro.",
    lugares: 25,
  },
  {
    id: "hulmaq",
    empresa: "Hulmaq",
    logo: "hulmaq.jpg",
    carrera: "ambas",
    descripcion:
      "Empresa familiar duranguense fundada en 1980, con más de cuatro décadas de trayectoria en la transformación de acero y la fabricación de maquinaria para la industria forestal y de la construcción. Cuenta con tecnología de vanguardia que incluye centros de mecanizado CNC, tornos verticales, dobladoras de placas y cabinas de granallado (shot blast). Es una visita clave para conocer de cerca procesos metalmecánicos pesados y de precisión.",
    lugares: 8,
  },
  {
    id: "arca-continental",
    empresa: "Arca Continental",
    logo: "arca-continental.png",
    carrera: "ambas",
    descripcion:
      "La segunda embotelladora de productos Coca-Cola más grande de América Latina y una de las empresas líderes en la industria de bebidas y alimentos a nivel global. En su centro operativo y de distribución en Durango, gestiona procesos masivos de producción, almacenamiento, control de calidad y una compleja red de distribución y logística comercial de última milla, siendo un referente en eficiencia operativa y sustentabilidad.",
    lugares: 25,
  },
  {
    id: "termoelectrica",
    empresa: "Termoeléctrica",
    logo: "termoelectrica.png",
    carrera: "ambas",
    lugares: 25,
  },
  {
    id: "forestal-alfa",
    empresa: "Forestal Alfa",
    logo: "forestal-alfa.png",
    carrera: "ambas",
    lugares: 25,
  },
  {
    id: "sir",
    empresa: "SIR",
    logo: "sir.png",
    carrera: "ambas",
    lugares: 25,
  },
];

// Vite resuelve este patrón en el build: solo incluye los archivos que existen,
// por eso un logo ausente nunca rompe la compilación.
const logos = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/visitas/*.{png,jpg,jpeg,webp,avif,svg}",
  { eager: true },
);

/** Logo de la visita, o `null` si el archivo aún no está en src/assets/visitas/. */
export function logoDeVisita(visita: Visita): ImageMetadata | null {
  return logos[`../assets/visitas/${visita.logo}`]?.default ?? null;
}

/** Iniciales para el marcador: "Arca Continental" → "AC", "Yazaki" → "Y". */
export function iniciales(nombre: string): string {
  return nombre
    .split(/\s+/)
    .slice(0, 2)
    .map((palabra) => palabra[0]?.toUpperCase() ?? "")
    .join("");
}
