<script setup>
// Lista de tus marcas aliadas de la imagen
const logos = [
  { id: 1, name: 'Pacifico', src: '/img.png' },
  { id: 2, name: 'Colegio de Ingenieros del Perú', src: '/img.png' },
  { id: 3, name: 'BID', src: '/img.png' },
  { id: 4, name: 'Pacifico Seguro', src: '/img.png' }
]
</script>

<template>
  <section class="aliados-section">
    <h2 class="section-title">Aliados</h2>

    <div class="slider-container">
      <div class="slider-track">
        
        <div v-for="logo in logos" :key="'first-' + logo.id" class="slide">
          <img :src="logo.src" :alt="logo.name" class="logo-img" />
        </div>

        <div v-for="logo in logos" :key="'second-' + logo.id" class="slide">
          <img :src="logo.src" :alt="logo.name" class="logo-img" />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- CONFIGURACIÓN GENERAL --- */
.aliados-section {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 10px;
  background: #f3f6fb;
  border-radius: 8px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 50px;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #cc2c2c 50%, #1e40af 50%);
}

/* --- MÁSCARA DEL CARRUSEL (Oculta lo que se sale) --- */
.slider-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  background: #f3f6fb;
  padding: 20px 0;
}

/* Difuminado suave opcional a los lados del carrusel para verse más pro */
.slider-container::before,
.slider-container::after {
  content: "";
  height: 100%;
  position: absolute;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}
.slider-container::before {
  top: 0;
  left: 0;
  background: linear-gradient(to right, #f3f6fb 0%, rgba(243, 246, 251, 0) 100%);
}
.slider-container::after {
  top: 0;
  right: 0;
  background: linear-gradient(to left, #f3f6fb 0%, rgba(243, 246, 251, 0) 100%);
}

/* --- RUTA DE ANIMACIÓN (TRACK) --- */
.slider-track {
  display: flex;
  width: max-content; /* Se expande automáticamente según el número de hijos */
  align-items: center;
  animation: scroll-loop 20s linear infinite;
}

/* Pausar carrusel cuando el usuario pasa el mouse por encima */
.slider-track:hover {
  animation-play-state: paused;
}

/* --- ITEMS INDIVIDUALE DE CADA LOGO --- */
.slide {
  width: 240px; /* Espaciado fijo para calcular bien la transición */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}

.logo-img {
  max-width: 100%;
  max-height: 75px; /* Ajusta la altura máxima para que se vean homogéneos */
  object-fit: contain;
  filter: grayscale(100%); /* Efecto elegante en escala de grises como tu captura */
  opacity: 0.7;
  transition: all 0.3s ease;
}

/* Recupera el color e intensidad original al pasar el mouse */
.slide:hover .logo-img {
  filter: grayscale(0%);
  opacity: 1;
}

/* --- ANIMACIÓN CSS INFINITA --- */
@keyframes scroll-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Mueve exactamente la mitad del ancho total del track (el set de logos clonado) */
    transform: translateX(-50%);
  }
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }
}

@media (max-width: 768px) {
  .aliados-section {
    padding: 30px 10px;
  }
  .slide {
    width: 180px;
    padding: 0 20px;
  }
  .logo-img {
    max-height: 55px;
  }
}
</style>