<script setup lang="ts">
// Estructura de imágenes dinámicas para el collage del lado derecho
const collageImagenes = {
  superior: '/img.png', // Colocar en public/hero/
  izquierda: '/img.png',
  centroAbajo: '/img.png',
  derecha: '/img.png'
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      
      <div class="hero-text-block">
        <h1 class="hero-title">
          RED PERUANA DE INSTITUCIONES DE EDUCACIÓN SUPERIOR UNIVERSITARIA PARA LA GESTIÓN INTEGRAL DEL RIESGO DE DESASTRES Y LA ADAPTACIÓN AL CAMBIO CLIMÁTICO
        </h1>
        
        <div class="hero-logo-wrapper">
          <img src="/img.png" alt="RiesGIRD-ACC PERÚ" class="hero-brand-logo" />
        </div>
      </div>

      <div class="hero-collage-block">
        
        <div class="collage-item clip-top">
          <img :src="collageImagenes.superior" alt="Autoridades Red" class="collage-img" />
          <div class="overlay-tint"></div>
        </div>

        <div class="collage-item clip-left">
          <img :src="collageImagenes.izquierda" alt="Exposición" class="collage-img" />
          <div class="overlay-tint"></div>
        </div>

        <div class="collage-item clip-center">
          <img :src="collageImagenes.centroAbajo" alt="Reunión de Trabajo" class="collage-img" />
          <div class="overlay-tint"></div>
        </div>

        <div class="collage-item clip-right">
          <img :src="collageImagenes.derecha" alt="Directivo RiesGIRD" class="collage-img" />
          <div class="overlay-tint"></div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- ESTILOS ESTRUCTURALES --- */
.hero-section {
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
}

.hero-container {
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
  min-height: 480px;
}

/* --- BLOQUE DE TEXTO (IZQUIERDA) --- */
.hero-text-block {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0c0a09;
  line-height: 1.6;
  margin-bottom: 35px;
  letter-spacing: 0.3px;
}

.hero-logo-wrapper {
  width: 100%;
  max-width: 360px;
  display: flex;
  justify-content: center;
}

.hero-brand-logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* --- COLLAGE DIAGONAL CON MÁSCARAS (DERECHA) --- */
.hero-collage-block {
  position: relative;
  width: 100%;
  height: 480px;
  background-color: #ffffff;
}

.collage-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.collage-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) brightness(0.95);
}

/* Capa translúcida sutil para emular el acabado de la fotografía original */
.overlay-tint {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(37, 82, 154, 0.08) 0%, rgba(219, 20, 60, 0.05) 100%);
  mix-blend-mode: multiply;
  pointer-events: none;
}

/* --- CORTES ASIMÉTRICOS EXACTOS (CLIP-PATH) --- */

/* Bloque Superior Completo */
.clip-top {
  clip-path: polygon(0 0, 100% 0, 100% 30%, 46% 67%, 0 32%);
  z-index: 4;
}

/* Bloque Inferior Izquierdo */
.clip-left {
  clip-path: polygon(0 35%, 44% 70%, 25% 100%, 0 100%);
  z-index: 3;
}

/* Bloque Central Abajo */
.clip-center {
  clip-path: polygon(46% 73%, 76% 51%, 89% 100%, 27% 100%);
  z-index: 2;
}

/* Bloque Lateral Derecho */
.clip-right {
  clip-path: polygon(100% 33%, 100% 100%, 91% 100%, 78% 50%);
  z-index: 5;
}

/* --- EFECTO INTERACTIVO SUTIL --- */
.collage-item:hover {
  transform: scale(1.015);
  z-index: 10;
}

/* --- RESPONSIVE ADAPTATION --- */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-text-block {
    padding: 20px;
  }

  .hero-title {
    font-size: 1.1rem;
  }

  .hero-collage-block {
    height: 400px;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 1rem;
  }

  .hero-collage-block {
    height: 300px;
  }
}
</style>