# Plan de Mejora: Rosa Facetada Oficial (Logo) + Animaciones de Alta Gama

Adaptación y mejora de la rosa en la landing page basada **fielmente en la geometría facetada/origami del logo oficial de Rose SEO & Ads**, transformándola en una pieza viva con facetas de cristal rubí, iluminación volumétrica interactiva, destellos dinámicos y animaciones de alta gama.

> **Regla estricta:** La carpeta `rose-prospecting/` no será tocada bajo ninguna circunstancia.

---

## 1. Concepto: La Rosa del Logo en Cristal Rubí Dinámico
- **Fidelidad Geométrica**: Vectorización y modelado de las facetas angulares del logo oficial (capas exteriores, intermedias y núcleo en espiral facetado).
- **Estética Faceted Ruby Glass**: Gradientes de profundidad por faceta (carmesí profundo `#4a1025`, rubí vibrante `#96294a`, cuarzo rosa `#e2688f`), biseles refractivos y reflejos cáusticos.
- **Interactividad y Dinamismo**:
  - **Light Sweep (Destello Especular)**: Barrido de luz que ilumina las aristas como un diamante/rubí.
  - **Mouse-Interactive Tilt**: Reacción suave al movimiento del ratón con cambio de sombras y brillos.
  - **Breathing / Flotación**: Pulsación orgánica suave y micro-destellos de partículas de luz circundantes.

---

## 2. Aplicación en Hero y CTA
- **Hero (`hero.tsx`)**: Rosa facetada con presencia central, halo ambiental, parallax reactivo al cursor y tarjetas flotantes de cristal.
- **CTA Final (`cta.tsx`)**: Rosa facetada con pulso lumínico radiante que guía visualmente a los botones de contacto (WhatsApp y llamada).

---

## 3. Animaciones Globales
- Transiciones cinemáticas con curvas Bézier premium (`[0.16, 1, 0.3, 1]`).
- Brillos y shimmers en tarjetas interactivas de toda la página.
- 60 FPS garantizados y compatibilidad con `prefers-reduced-motion`.
