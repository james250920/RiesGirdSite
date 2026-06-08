<template>
  <section class="colaboramos-section">

    <div class="header">
      <h2 class="title">
        Nuestra Articulación con el Estado
        <span class="title-underline"></span>
      </h2>
    </div>

    <p class="subtitle">
      Mantenemos un diálogo constante, técnico y propositivo con el Sistema Nacional de Gestión del Riesgo de Desastres (SINAGERD) y otras entidades gubernamentales. Nuestra labor se centra en:
    </p>

    <!-- SVG defs para gradientes (solo se declara una vez aquí) -->
    <svg class="svg-defs" aria-hidden="true">
      <defs>
        <linearGradient id="icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d92651" />
          <stop offset="100%" stop-color="#2b4494" />
        </linearGradient>
      </defs>
    </svg>

    <div class="cards-grid">

      <!-- Card 1: Intercambio de Recursos -->
      <div class="card">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" class="icon">
            <path stroke="url(#icon-grad)" stroke-linecap="round" stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
        <h3 class="card-title">Formulación de Políticas Públicas</h3>
        <p class="card-text">
          Participamos activamente en el diseño, actualización y revisión de leyes, reglamentos y planes nacionales y regionales (como los Planes de Prevención y Reducción del Riesgo de Desastres - PPRRD), asegurando que cuenten con evidencia científica actualizada.
        </p>
      </div>

      <!-- Card 2: Movilidad y Equipos Mixtos -->
      <div class="card">
        <div class="icon-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="icon">
            <path stroke="url(#icon-grad)" stroke-linecap="round" stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <h3 class="card-title">Proyectos de Inversión Pública (Invierte.pe)</h3>
        <p class="card-text">
          Capacitamos y asesoramos en la correcta incorporación del enfoque de gestión de riesgos en el ciclo de inversión pública, para que los hospitales, colegios y carreteras del futuro no se construyan en zonas de peligro.
        </p>
      </div>

    </div>

    <!-- Card 3: Estandarización Académica (full width) -->
    <div class="card card--wide">
      <div class="card-wide-inner">
        <div class="icon-wrap icon-wrap--left">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" class="icon icon--lg">
            <path stroke="url(#icon-grad)" stroke-linecap="round" stroke-linejoin="round"
              d="M4.26 10.174L10.72 14.27a2.25 2.25 0 002.56 0l6.46-4.096m-18 0A2.25 2.25 0 012.25 8.18V8.13a2.25 2.25 0 011.196-1.99l6.577-3.76a2.25 2.25 0 012.474 0l6.577 3.76A2.25 2.25 0 0121.75 8.13v.051a2.25 2.25 0 01-1.01 1.993l-6.48 4.113a2.25 2.25 0 01-2.51 0l-6.49-4.112zm0 0v6.59c0 .543.315 1.035.808 1.258l5.25 2.365a2.25 2.25 0 001.684 0l5.25-2.365c.493-.223.808-.715.808-1.258v-6.59" />
          </svg>
        </div>
        <div class="card-wide-body">
          <h3 class="card-title">Alianzas Público-Privadas (APP)</h3>
          <p class="card-text">
            Promovemos que el sector privado empresarial se sume a los esfuerzos de resiliencia. Fomentamos modelos de Obras por Impuestos (OxI) y fondos compartidos orientados a la mitigación del cambio climático y la innovación tecnológica.
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* ── Variables ───────────────────────────────────────── */
.colaboramos-section {
  --red:    #d92651;
  --blue:   #2b4494;
  --bg:     #f4f7fc;
  --white:  #ffffff;
  --text:   #1a1a1a;
  --body-text: #d92651;   /* texto cuerpo en rojo, como en la imagen */

  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  background: var(--bg);
  border-radius: 1rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* ── SVG defs oculto ─────────────────────────────────── */
.svg-defs {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

/* ── Header ──────────────────────────────────────────── */
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.title {
  position: relative;
  display: inline-block;
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text);
  margin: 0;
  padding-bottom: 0.75rem;
  text-align: center;
}

.title-underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 3px;
  background: linear-gradient(to right, var(--red), var(--blue));
  border-radius: 2px;
}

/* ── Subtitle ────────────────────────────────────────── */
.subtitle {
  font-size: 0.875rem;
  color: #444;
  text-align: center;
  max-width: 680px;
  margin: 0 auto 2rem;
  line-height: 1.65;
}

/* ── Grid 2 columnas ─────────────────────────────────── */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 640px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Card base ───────────────────────────────────────── */
.card {
  position: relative;
  background: var(--white);
  border-radius: 0.875rem;
  padding: 2rem 1.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  min-height: 340px;
}

/* Borde degradado sutil via pseudo-element */
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.5px;
  background: linear-gradient(135deg, var(--red), var(--blue));
  mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.55;
}

/* ── Card wide (full-width) ──────────────────────────── */
.card--wide {
  min-height: unset;
  padding: 2rem 2.5rem;
}

.card-wide-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  width: 100%;
  text-align: left;
}

@media (max-width: 640px) {
  .card-wide-inner {
    flex-direction: column;
    text-align: center;
  }
  .card--wide {
    padding: 2rem 1.5rem;
  }
}

/* ── Icon wrap ───────────────────────────────────────── */
.icon-wrap {
  width: 6rem;
  height: 6rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.icon-wrap--left {
  margin-bottom: 0;
}

.icon {
  width: 4rem;
  height: 4rem;
}

.icon--lg {
  width: 5rem;
  height: 5rem;
}

/* ── Card typography ─────────────────────────────────── */
.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--red), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem;
  line-height: 1.3;
}

.card-wide-body .card-title {
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 0.8rem;
  color: var(--body-text);
  line-height: 1.65;
  margin: 0;
  max-width: 30ch;
}

.card--wide .card-text {
  max-width: 55ch;
  color: var(--body-text);
}
</style>