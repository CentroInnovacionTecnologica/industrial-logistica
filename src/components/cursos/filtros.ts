// Lógica pura de los filtros de cursos. La usa el servidor (para generar el
// texto de búsqueda de cada tarjeta) y el navegador (para filtrar y paginar).

export interface FiltrosCursos {
  /** "todos" o el número de semestre como texto ("1"… "10"). */
  semestre: string;
  /** "todas", "industrial" o "logistica". */
  carrera: string;
  /** "todos" o el nombre del tema. */
  tema: string;
  /** Texto libre de búsqueda. */
  busqueda: string;
}

/** Lo que cada tarjeta expone en sus atributos data-*. */
export interface DatosTarjeta {
  semestres: string[];
  carreras: string[];
  tema: string;
  /** Nombre, tema y descripción ya normalizados. */
  texto: string;
}

export const FILTROS_INICIALES: FiltrosCursos = {
  semestre: "todos",
  carrera: "todas",
  tema: "todos",
  busqueda: "",
};

/** Minúsculas y sin acentos, para comparar sin distinguirlos. */
export function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

/** Los filtros se combinan: semestre Y carrera Y tema Y búsqueda. */
export function coincide(tarjeta: DatosTarjeta, filtros: FiltrosCursos): boolean {
  if (filtros.semestre !== "todos" && !tarjeta.semestres.includes(filtros.semestre)) {
    return false;
  }
  if (filtros.carrera !== "todas" && !tarjeta.carreras.includes(filtros.carrera)) {
    return false;
  }
  if (filtros.tema !== "todos" && tarjeta.tema !== filtros.tema) {
    return false;
  }
  const palabras = normalizar(filtros.busqueda).split(/\s+/).filter(Boolean);
  return palabras.every((palabra) => tarjeta.texto.includes(palabra));
}

export function totalPaginas(resultados: number, porPagina: number): number {
  return Math.max(1, Math.ceil(resultados / porPagina));
}
