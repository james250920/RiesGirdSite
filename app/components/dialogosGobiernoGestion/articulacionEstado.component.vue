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

    <div class="cards-grid">

      <div class="card">
        <div class="icon-wrap">
          <i class="fa-solid fa-chart-line fa-fw icon"></i>
        </div>
        <h3 class="card-title">Asesoría Técnica Especializada</h3>
        <p class="card-text">
          Brindamos respaldo científico a ministerios, gobiernos regionales y municipalidades para la toma de decisiones críticas ante escenarios de riesgo inminente.
        </p>
      </div>

      <div class="card">
        <div class="icon-wrap">
          <i class="fa-solid fa-file-invoice fa-fw icon"></i>
        </div>
        <h3 class="card-title">Traducción del Conocimiento</h3>
        <p class="card-text">
          Transformamos tesis complejas y papers en Policy Briefs (resúmenes de política) y documentos ejecutivos que los alcaldes y funcionarios pueden usar fácilmente en su gestión diaria.
        </p>
      </div>

    </div>

    <div class="card card--wide">
      <div class="card-wide-inner">
        <div class="icon-wrap icon-wrap--left">
          <i class="fa-solid fa-users-rectangle fa-fw icon icon--lg"></i>
        </div>
        <div class="card-wide-body">
          <h3 class="card-title">Mesas de Trabajo Conjuntas</h3>
          <p class="card-text">
            Participamos en comités multisectoriales, asegurando que la voz de la academia esté presente en la planificación del desarrollo nacional.
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
  --body-text: #d92651;

  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  background: var(--bg);
  border-radius: 1rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* ── Truco CSS para meter Gradiente a los Iconos de Font Awesome ── */
.icon {
  font-size: 3.5rem; /* Tamaño del icono */
  background: linear-gradient(135deg, var(--red), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.icon--lg {
  font-size: 4.5rem; /* Tamaño mayor para el banner inferior */
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

@media (max-width: 1024px) {
  .colaboramos-section {
    padding: 2.5rem 1.25rem;
  }
  .title {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
  .title {
    font-size: 1.4rem;
  }
  .subtitle {
    font-size: 0.825rem;
    margin-bottom: 1.5rem;
  }
  .card {
    min-height: auto;
    padding: 1.5rem;
  }
  .icon {
    font-size: 2.8rem;
  }
  .icon--lg {
    font-size: 3.5rem;
  }
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