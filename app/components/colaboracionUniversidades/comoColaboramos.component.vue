<template>
  <section class="colaboramos-section">

    <div class="header">
      <h2 class="title">
        ¿Cómo colaboramos?
        <span class="title-underline"></span>
      </h2>
    </div>

    <p class="subtitle">
      Nuestra red transforma la competencia académica en cooperación estratégica. Trabajamos bajo un esquema de apoyo mutuo que nos permite potenciar las capacidades de cada región:
    </p>

    <div class="cards-grid">

      <div class="card">
        <div class="icon-wrap">
          <i class="fa-solid fa-arrows-rotate fa-fw icon"></i>
        </div>
        <h3 class="card-title">Intercambio de Recursos y Datos</h3>
        <p class="card-text">
          Las universidades miembro comparten acceso a repositorios, resultados de investigaciones, bases de datos climáticas y metodologías de evaluación de riesgos.
        </p>
      </div>

      <div class="card">
        <div class="icon-wrap">
          <i class="fa-solid fa-users fa-fw icon"></i>
        </div>
        <h3 class="card-title">Movilidad y Equipos Mixtos</h3>
        <p class="card-text">
          Fomentamos la creación de grupos de investigación multidisciplinarios, donde docentes y estudiantes de distintas universidades (y regiones) trabajan juntos en proyectos comunes.
        </p>
      </div>

    </div>

    <div class="card card--wide">
      <div class="card-wide-inner">
        <div class="icon-wrap icon-wrap--left">
          <i class="fa-solid fa-graduation-cap fa-fw icon icon--lg"></i>
        </div>
        <div class="card-wide-body">
          <h3 class="card-title">Estandarización Académica</h3>
          <p class="card-text">
            Compartimos mallas curriculares, sílabos y buenas prácticas pedagógicas para asegurar que la enseñanza de la GIRD y la ACC tenga un alto nivel en todo el territorio nacional.
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

/* ── Efecto de Gradiente para Font Awesome ───────────── */
.icon {
  font-size: 3.5rem; /* Tamaño base del icono */
  background: linear-gradient(135deg, var(--red), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.icon--lg {
  font-size: 4.5rem; /* Tamaño mayor para el banner horizontal inferior */
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