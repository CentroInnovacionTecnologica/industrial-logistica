/* ---------- Ceremonia de inauguración ---------- */

import teatroRicardoCastro from "../assets/inauguracion/teatro-ricardo-castro.jpg";

export const inauguracion = {
  titulo: "Ceremonia de Inauguración",
  /** Formato ISO, ej. "2026-11-24". */
  fecha: "2026-11-24",
  /** Formato de 24 h, ej. "09:00" (se muestra "9:00 a. m."). */
  hora: "09:00",
  lugar: "Teatro Ricardo Castro",
  imagen: teatroRicardoCastro,
  imagenAlt: "Interior del Teatro Ricardo Castro",
  mapa: "https://www.google.com/maps/search/?api=1&query=Teatro+Ricardo+Castro+Durango",
};

const formatoFechaLarga = new Intl.DateTimeFormat("es-MX", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2026-11-24" → "Martes 24 de noviembre de 2026". */
export function formatearFechaLarga(iso: string): string {
  const texto = formatoFechaLarga
    .format(new Date(`${iso}T00:00:00Z`))
    .replace(",", "");
  return texto.charAt(0).toLocaleUpperCase("es-MX") + texto.slice(1);
}

/** "2026-11-24" → "24 de noviembre". */
export function formatearDiaMes(iso: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** "09:00" → "9:00 a. m."; "13:30" → "1:30 p. m.". */
export function formatearHora(hora: string): string {
  const [h, m] = hora.split(":").map(Number);
  const sufijo = h < 12 ? "a. m." : "p. m.";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${sufijo}`;
}
