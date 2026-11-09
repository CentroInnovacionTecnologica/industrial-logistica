/* ---------- Formato de fechas y horas (es-MX) ---------- */

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

const partesHora = (hora: string) => {
  const [h, m] = hora.split(":").map(Number);
  return {
    texto: `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, "0")}`,
    sufijo: h < 12 ? "a. m." : "p. m.",
  };
};

/** "09:00" → "9:00 a. m."; "13:30" → "1:30 p. m.". */
export function formatearHora(hora: string): string {
  const { texto, sufijo } = partesHora(hora);
  return `${texto} ${sufijo}`;
}

/** "17:30", "18:30" → "5:30 a 6:30 p. m."; "11:00", "13:00" → "11:00 a. m. a 1:00 p. m.". */
export function formatearRangoHoras(inicio: string, fin: string): string {
  const a = partesHora(inicio);
  const b = partesHora(fin);
  return a.sufijo === b.sufijo
    ? `${a.texto} a ${b.texto} ${b.sufijo}`
    : `${a.texto} ${a.sufijo} a ${b.texto} ${b.sufijo}`;
}
