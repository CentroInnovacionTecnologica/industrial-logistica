import type { EventFilterDetail } from "./data/site";

declare global {
  // Tipos para document.addEventListener("eventos:filtrar", (e) => e.detail…).
  // El nombre debe coincidir con FILTER_EVENT en src/data/site.ts.
  interface DocumentEventMap {
    "eventos:filtrar": CustomEvent<EventFilterDetail>;
  }
}
