/**
 * CÓDIGO DE VESTIMENTA Y REGLAMENTO DE LAS VISITAS INDUSTRIALES
 * ------------------------------------------------------------------
 * Cambia aquí el texto; se actualiza en /actividades/visitas.
 *
 * - destacado: fragmento exacto de `texto` que se muestra en negritas.
 */

export interface PuntoReglamento {
  texto: string;
  destacado?: string;
}

export interface SeccionReglamento {
  titulo: string;
  puntos: PuntoReglamento[];
}

export interface ReglamentoVisitas {
  titulo: string;
  salida: string;
  intro: string;
  secciones: SeccionReglamento[];
  importante: string;
}

export const reglamentoVisitas: ReglamentoVisitas = {
  titulo: "Código de vestimenta y reglamento",
  salida:
    "Todas las visitas son el viernes 27 de noviembre y salen a las 8:00 a. m. del estacionamiento del ITD – Zona Norte.",
  intro:
    "Con el propósito de garantizar la seguridad de los estudiantes durante las visitas industriales, se establecen las siguientes indicaciones:",
  secciones: [
    {
      titulo: "Vestimenta",
      puntos: [
        { texto: "Pantalón de mezclilla (sin roturas o desgastes)." },
        { texto: "Camisa de manga larga." },
        { texto: "No usar prendas holgadas." },
        { texto: "No usar prendas colgantes (prendas, bolsos, cangureras)." },
        {
          texto:
            "Zapato cerrado (no tenis, no sandalias) con suela antiderrapante (no tacones).",
        },
      ],
    },
    {
      titulo: "Seguridad e higiene",
      puntos: [
        { texto: "Cabello recogido." },
        { texto: "No usar lentes oscuros." },
        { texto: "No usar audífonos." },
        {
          texto:
            "No está permitido utilizar aretes, anillos, pulseras, relojes ni otros accesorios que puedan representar un riesgo para la seguridad de los visitantes o de la empresa durante los recorridos por las áreas industriales.",
        },
        {
          texto:
            "Utilizar el equipo de protección personal que indique la empresa (casco, lentes de seguridad, chaleco, protección auditiva, entre otros).",
        },
      ],
    },
    {
      titulo: "Restricciones",
      puntos: [
        {
          texto:
            "Prohibido el uso de teléfonos celulares durante el recorrido por las instalaciones de la empresa.",
        },
        {
          texto:
            "Está estrictamente prohibido tomar fotografías, grabar videos o realizar grabaciones de audio dentro de las instalaciones.",
          destacado: "Está estrictamente prohibido",
        },
      ],
    },
    {
      titulo: "Presentación personal y comportamiento",
      puntos: [
        {
          texto:
            "Registrarse en el transporte con el docente responsable y en la empresa visitada.",
        },
        { texto: "Mantener una presentación personal ordenada." },
        { texto: "Portar identificación institucional y oficial (INE)." },
        {
          texto:
            "Respetar las áreas restringidas y los protocolos de seguridad establecidos.",
        },
        {
          texto:
            "Atender en todo momento las indicaciones del personal responsable de la empresa y de los docentes acompañantes.",
        },
      ],
    },
  ],
  importante:
    "La participación en las visitas implica representar dignamente al Instituto Tecnológico de Durango, demostrando profesionalismo, responsabilidad y respeto por las organizaciones que nos reciben.",
};
