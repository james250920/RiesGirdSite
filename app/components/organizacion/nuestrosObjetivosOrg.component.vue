<template>
  <section class="objetivos-section">
    <div class="container">
      
      <div class="main-card">
        <h2 class="section-title">
          <span>Nuestros Objetivos</span>
        </h2>

        <p class="section-description">
          La Red Interuniversitaria para la Gestión Integral del Riesgo de
          Desastres y la Adaptación al Cambio Climático (RIESGIRD-ACC Perú)
          es un espacio de articulación académica que agrupa a las universidades
          del país comprometidas con la seguridad y la resiliencia climática.
        </p>

        <div class="general-wrapper">
          <div class="general-title">
            Objetivo General
          </div>

          <div class="general-box">
            "Promover la institucionalización de la Gestión del Riesgo de
            Desastres (GIRD) y la Adaptación al Cambio Climático (ACC) en el
            sistema de educación superior universitario peruano, incorporándolas
            de manera transversal y con enfoque territorial para contribuir a un
            Perú más seguro y resiliente."
          </div>
        </div>
      </div>

      <div class="specific-card">
        <h2 class="section-title">
          <span>Nuestros Específicos</span>
        </h2>

        <p class="section-description">
          Para hacer realidad nuestro objetivo mayor, hemos trazado cuatro metas
          concretas de trabajo:
        </p>

        <div class="cards-grid">
          
          <div class="objective-item">
            <div class="objective-header">
              Articulación e Incidencia Pública
            </div>

            <div class="objective-body">
              Fortalecer la cooperación entre las universidades, el Estado
              (a través del SINAGERD) y la sociedad civil, incidiendo en
              políticas públicas vinculadas al ordenamiento territorial y el
              cambio climático.
            </div>
          </div>

          <div class="objective-item">
            <div class="objective-header">
              Innovación en la Formación Académica
            </div>

            <div class="objective-body">
              Impulsar la integración de los enfoques de GIRD y ACC en las
              mallas curriculares de pregrado y posgrado de todas las
              disciplinas, formando profesionales con conciencia preventiva.
            </div>
          </div>

          <div class="objective-item">
            <div class="objective-header">
              Investigación Aplicada
            </div>

            <div class="objective-body">
              Promover el desarrollo de investigaciones científicas y
              tecnológicas conjuntas que respondan a las vulnerabilidades
              específicas de cada región del Perú, brindando soluciones
              basadas en evidencia.
            </div>
          </div>

          <div class="objective-item">
            <div class="objective-header">
              Gobernanza y Responsabilidad Social
            </div>

            <div class="objective-body">
              Lograr que las propias universidades sean modelos de resiliencia,
              aplicando la gestión de riesgos en su administración interna,
              infraestructura y en sus proyectos de responsabilidad social con
              la comunidad.
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

/* =========================
   CONTENEDOR GENERAL
========================= */

.objetivos-section {
  background: #f2f5fa;
  padding: 60px 20px;
  border-radius: 6px;
}

.container {
  max-width: 1100px;
  margin: auto;
  border-radius: 16px;
}

/* =========================
   TARJETAS PRINCIPALES
========================= */

.main-card {
  background: #ffffff;
  padding: 20px 10px 50px 10px;
  margin-bottom: 50px;
}

.specific-card {
  background: #ffffff;
  padding: 55px 40px;
  border-radius: 16px;
}

/* =========================
   TÍTULOS
========================= */

.section-title {
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: #000000;
}

.section-title span {
  position: relative;
  display: inline-block;
  padding-bottom: 12px;
}

.section-title span::after {
  content: "";
  width: 100%;
  height: 5px;

  background:
    linear-gradient(
      to right,
      #db143c,
      #1e3a8a
    );

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
}

/* =========================
   DESCRIPCIÓN
========================= */

.section-description {
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;

  max-width: 850px;
  margin: 0 auto 45px;

  color: #1a1a1a;

  line-height: 1.6;
  font-size: 1.08rem;
}

/* =========================
   OBJETIVO GENERAL
========================= */

.general-wrapper {
  position: relative;
  margin-top: 40px;

  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.general-title {
  width: fit-content;
  margin: auto;

  padding: 10px 28px;

  background: #ffffff;

  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  color: #000000;

  border-radius: 10px;

  position: relative;
  z-index: 2;

  border: 1.5px solid transparent;

  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(to right, #db143c, #1e3a8a);

  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.general-box {
  margin-top: -20px;

  background: #ffffff;

  padding: 45px 35px 35px;

  text-align: center;

  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.12rem;
  font-style: italic;
  line-height: 1.7;

  color: #1a1a1a;

  border-radius: 14px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.03);

  border: 1.5px solid transparent;

  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(to right, #db143c, #1e3a8a);

  background-origin: border-box;
  background-clip: padding-box, border-box;
}

/* =========================
   OBJETIVOS ESPECÍFICOS
========================= */

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 48px 38px;

  margin-top: 25px;

  align-items: stretch;
}

.objective-item {
  position: relative;

  display: flex;
  flex-direction: column;

  height: 100%;
}

/* CABECERA SUPERIOR */
.objective-header {
  width: 84%;
  margin: auto;

  background: #ffffff;

  padding: 12px 22px;

  text-align: center;

  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.08rem;

  color: #000000;

  border-radius: 12px;

  position: relative;
  z-index: 5;

  border: 1.6px solid transparent;

  background-image:
    linear-gradient(#fff, #fff),
    linear-gradient(90deg, #db143c, #1e3a8a);

  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow:
    0 4px 12px rgba(0,0,0,0.04);

  min-height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* TRIÁNGULO */
.objective-header::after {
  content: "";

  position: absolute;

  bottom: -11px;
  left: 50%;

  transform: translateX(-50%);

  width: 0;
  height: 0;

  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 11px solid #7f3f98;

  z-index: 4;
}

/* CAJA PRINCIPAL */
.objective-body {
  margin-top: -14px;

  padding:
    36px
    28px
    30px;

  border-radius: 12px;

  background:
    linear-gradient(
      90deg,
      #e51046 0%,
      #b21f6b 40%,
      #5b3f9c 70%,
      #2148a3 100%
    );

  color: #ffffff;

  font-family: system-ui, -apple-system, sans-serif;

  line-height: 1.55;
  font-size: 1rem;

  text-align: center;

  min-height: 185px;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 10px 22px rgba(28, 58, 138, 0.12);

  position: relative;
  overflow: hidden;
}

/* ILUMINACIÓN SUAVE */
.objective-body::before {
  content: "";

  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at top left,
      rgba(255,255,255,0.18),
      transparent 45%
    );

  pointer-events: none;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1024px) {
  .section-title {
    font-size: 1.9rem;
  }

  .main-card,
  .specific-card {
    padding: 40px 25px;
  }

  .cards-grid {
    gap: 40px 30px;
  }

  .objective-header {
    width: 90%;
    font-size: 1rem;
  }

  .objective-body {
    min-height: 170px;
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .objetivos-section {
    padding: 40px 15px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .general-box {
    padding: 40px 20px 25px;
    font-size: 1.02rem;
  }

  .objective-header {
    width: 100%;
    font-size: 1rem;
    min-height: 60px;
  }

  .objective-body {
    padding: 34px 22px 26px;
    font-size: 0.95rem;
    min-height: 160px;
  }
}
</style>