<script setup lang="ts">
// Ruta de la imagen de fondo (puedes cambiarla por tu asset final)
const bgImage = '/img.png'
</script>

<template>
  <section class="about-banner-section" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="banner-overlay"></div>

    <div class="banner-content">
      <h1 class="banner-title">Eventos / Noticias / Convocatoria</h1>
      <p class="banner-subtitle">Marzo 2024</p>
    </div>

    <div class="wave-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
/* --- CONTENEDOR PRINCIPAL CON IMAGEN DE FONDO --- */
.about-banner-section {
  position: relative;
  width: 100%;
  height: 480px; /* Altura perfecta según la proporción de la captura */
  background-position: center 35%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/* --- CAPA OSCURA (OVERLAY) --- */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65); /* Controla la opacidad del oscurecido */
  z-index: 1;
}

/* --- CONTENIDO DE TEXTO --- */
.banner-content {
  position: relative;
  z-index: 2; /* Por encima del overlay */
  text-align: center;
  color: #f4f7fc;
  padding: 0 20px;
  margin-top: -30px; /* Desfase sutil hacia arriba para equilibrar la curva inferior */
}

.banner-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
}

.banner-subtitle {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;
  text-decoration: underline; /* Subrayado sutil que se aprecia en tu referencia */
  text-underline-offset: 5px;
}

/* --- DIVISOR EN OLA (SVG SHAPE) --- */
.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg); /* Voltea el SVG para que la curva mire hacia arriba */
  z-index: 3;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 65px; /* Controla qué tan pronunciada es la curva */
}

.wave-divider .shape-fill {
  fill: #f4f7fc; /* Color idéntico al fondo de tu página para acoplar secciones */
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
  .about-banner-section {
    height: 380px;
  }
  
  .banner-title {
    font-size: 2.4rem;
  }

  .banner-subtitle {
    font-size: 1rem;
  }

  .wave-divider svg {
    height: 45px;
  }
}

@media (max-width: 480px) {
  .about-banner-section {
    height: 320px;
  }

  .banner-title {
    font-size: 2rem;
  }
}
</style>