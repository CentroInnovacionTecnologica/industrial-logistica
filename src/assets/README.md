# Imágenes del sitio

Guarda aquí los logos y la fotografía del hero. Astro las optimiza en el build
(componente `Image` de `astro:assets`).

| Imagen             | Nombre sugerido   | Recomendación                                   |
| ------------------ | ----------------- | ----------------------------------------------- |
| Logo TecNM         | `logo-tecnm.png`  | PNG o SVG, fondo transparente, ~360 px de ancho |
| Logo ITD           | `logo-itd.png`    | PNG o SVG, fondo transparente, ~360 px de ancho |
| Fotografía de hero | `hero.jpg`        | JPG horizontal, al menos 1600 px de ancho       |

## Cómo activarlas

1. Copia el archivo a esta carpeta.
2. Abre `src/data/images.ts` y cambia el `null` de la constante
   correspondiente (`LOGO_TECNM`, `LOGO_ITD` o `HERO_PHOTO`) por el nombre del
   archivo entre comillas, por ejemplo `"hero.jpg"`.

Si el valor es `null` o el archivo no existe, se muestra un marcador de
posición y el build no falla.
