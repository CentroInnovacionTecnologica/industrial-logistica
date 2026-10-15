/* ---------- Paneles ---------- */

/**
 * Cada panel es una sección completa con su lista de panelistas. Para agregar
 * otro, basta con sumar un objeto al arreglo `paneles`.
 *
 * Los campos marcados con "?" se pueden dejar vacíos u omitir: no se muestran
 * (ni el dato ni su ícono). Al llenar fecha, hora o lugar aparece la fila de
 * datos debajo del lema.
 */

export interface Panelista {
  nombre: string;
  cargo: string;
}

export interface Panel {
  id: string;
  /** Texto del chip, p. ej. "Panel de expertos". */
  tipo: string;
  titulo: string;
  /** Frase destacada, en cursiva guinda. */
  lema?: string;
  /** Formato ISO, ej. "2026-11-24". */
  fecha?: string;
  /** Formato de 24 h, ej. "13:00". */
  hora?: string;
  lugar?: string;
  panelistas: Panelista[];
}

export const paneles: Panel[] = [
  {
    id: "panel-expertos",
    tipo: "Panel de expertos",
    titulo: "Panel de expertos",
    lema: "Conectando experiencias, optimizando el futuro",
    fecha: "",
    hora: "",
    lugar: "",
    panelistas: [
      {
        nombre: "Nalley Talamantes",
        cargo:
          "Directora de SHITSU / Presidenta del Clúster de Innovación y Tecnología XIXIM",
      },
      {
        nombre: "Alfredo Herrera Deras",
        cargo: "Gerente General Industrial, Hulmaq",
      },
      {
        nombre: "Roberto Macias",
        cargo: "Operations Manager, Johnson Controls BE Operations México",
      },
      {
        nombre: "Gerardo Mar Rodríguez",
        cargo: "Materials Manager, Yazaki Componentes de México",
      },
    ],
  },
];

export const totalPanelistas = paneles.reduce(
  (total, panel) => total + panel.panelistas.length,
  0,
);

/** Iniciales del nombre y el primer apellido: "Gerardo Mar Rodríguez" → "GM". */
export function iniciales(nombre: string): string {
  return nombre
    .split(/\s+/)
    .filter((palabra) => palabra && !palabra.endsWith(".")) // omite "Ing.", "Dr."
    .slice(0, 2)
    .map((palabra) => palabra[0].toLocaleUpperCase("es-MX"))
    .join("");
}
