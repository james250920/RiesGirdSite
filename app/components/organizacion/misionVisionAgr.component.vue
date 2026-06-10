<script setup>
// Código limpio corregido bajo análisis visual 1:1
</script>

<template>
  <section class="mision-vision-section">
    <div class="container">
      
      <div class="cards-row">
        <div class="info-card card-short shape-pink-right text-center">
          <div class="icon-wrapper">
            <svg class="brand-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L12 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="card-title">Nuestra Misión</h3>
          <p class="card-text text-body">
            "Promover la institucionalización de la Gestión Integral del Riesgo de Desastres (GIRD) y la Adaptación al Cambio Climático (ACC) en el sistema de educación superior peruano."
          </p>
        </div>

        <div class="info-card card-long shape-pink-left text-mixed">
          <h3 class="card-title block-center">¿Cómo lo logramos?</h3>
          <p class="card-text text-left">
            Incorporando ambos enfoques de manera transversal en los procesos de gobernanza universitaria, formación académica, investigación y responsabilidad social, respetando y considerando las particularidades de nuestros diversos territorios.
          </p>
        </div>
      </div>

      <div class="cards-row">
        <div class="info-card card-long shape-blue-right text-mixed">
          <h3 class="card-title block-center">¿Qué futuro construimos?</h3>
          <p class="card-text text-left">
            Un Perú donde las universidades lideran la articulación efectiva con el Sistema Nacional de Gestión del Riesgo de Desastres (SINAGERD) y tienen una incidencia directa en las políticas públicas vinculadas al ordenamiento territorial y la mitigación del cambio climático.
          </p>
        </div>

        <div class="info-card card-short shape-blue-left text-center">
          <div class="icon-wrapper">
            <svg class="brand-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>
            </svg>
          </div>
          <h3 class="card-title">Nuestra Visión</h3>
          <p class="card-text text-body">
            "Ser la red académica referente a nivel nacional, reconocida por su contribución fundamental al desarrollo sostenible del país."
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. CONFIGURACIÓN DEL ENTORNO GENERAL */
.mision-vision-section {
  width: 100%;
  background-color: #f3f7fe; /* Fondo celeste sutil idéntico a las láminas */
  padding: 80px 20px;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
}

/* 2. ESTRUCTURA DE FILAS */
.cards-row {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

/* 3. BASE DE LAS TARJETAS (Cajas Blancas con bordes suaves) */
.info-card {
  background-color: #ffffff;
  border-radius: 18px;
  padding: 50px 45px;
  position: relative;
  overflow: hidden; /* Obligatorio para recortar las esquinas de color */
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.015);
}

/* Proporciones Asimétricas del Grid (Misión/Visión vs Preguntas) */
.card-short {
  flex: 4; /* Ocupa el ~40% */
}

.card-long {
  flex: 6; /* Ocupa el ~60% */
}

/* 4. MODOS DE ALINEACIÓN INTERNA REGULADOS */
.text-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-mixed {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.block-center {
  text-align: center;
  align-self: center;
  margin-bottom: 20px;
}

.text-left {
  text-align: left;
  line-height: 1.65;
}

/* 5. ICONOS EN GRADIENTE CORPORATIVO */
.icon-wrapper {
  width: 68px;
  height: 68px;
  border-radius: 14px;
  background: linear-gradient(135deg, #db143c 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-bottom: 25px;
}

.brand-icon {
  width: 34px;
  height: 34px;
}

/* 6. TIPOGRAFÍAS Y DISEÑO DE TEXTOS */
.card-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #000000;
  margin: 0;
}

.card-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
}

.text-body {
  max-width: 290px; /* Evita que el texto de Misión/Visión toque los extremos */
}

/* 7. RECREACIÓN EXACTA DE ESQUINAS CIRCULARES */
/* Fila Superior: Rosa suave */
.shape-pink-right::before {
  content: "";
  position: absolute;
  top: -45px;
  right: -45px;
  width: 125px;
  height: 125px;
  background-color: #f7cbd4;
  border-radius: 50%;
  pointer-events: none;
}

.shape-pink-left::before {
  content: "";
  position: absolute;
  top: -45px;
  left: -45px;
  width: 125px;
  height: 125px;
  background-color: #f7cbd4;
  border-radius: 50%;
  pointer-events: none;
}

/* Fila Inferior: Azul pastel sutil */
.shape-blue-right::before {
  content: "";
  position: absolute;
  top: -45px;
  right: -45px;
  width: 125px;
  height: 125px;
  background-color: #d2e0f8;
  border-radius: 50%;
  pointer-events: none;
}

.shape-blue-left::before {
  content: "";
  position: absolute;
  top: -45px;
  left: -45px;
  width: 125px;
  height: 125px;
  background-color: #d2e0f8;
  border-radius: 50%;
  pointer-events: none;
}

/* 8. RESPONSIVE DESIGN PARA DISPOSITIVOS MÓVILES */
@media (max-width: 1024px) {
  .cards-row {
    gap: 20px;
  }

  .info-card {
    padding: 40px 30px;
  }

  .card-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .mision-vision-section {
    padding: 40px 15px;
  }

  .cards-row {
    flex-direction: column;
    gap: 25px;
  }

  .card-short, .card-long {
    flex: initial;
    width: 100%;
  }

  .text-mixed {
    text-align: center;
    align-items: center;
  }

  .text-left {
    text-align: center;
  }

  .text-body {
    max-width: 100%;
  }

  /* Normaliza la posición del círculo en pantallas pequeñas */
  .info-card::before {
    right: -45px !important;
    left: auto !important;
  }
}
</style>