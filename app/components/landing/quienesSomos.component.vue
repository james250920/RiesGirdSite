<script setup>
import { ref } from 'vue'

// Referencias reactivas para controlar los estados dinámicos mediante JS (Vue)
const isHovered = ref(false)

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}
</script>

<template>
  <section class="about-section">
    <h2 class="section-title">¿Quiénes somos?</h2>
    
    <p class="section-text">
      La Red Interuniversitaria <strong>RIESGIRD-ACC Perú</strong> es un espacio de articulación académica que reúne a universidades comprometidas con la gestión integral del riesgo de desastres y la adaptación al cambio climático. Su labor se centra en promover la incorporación transversal de estos enfoques en la gobernanza, formación, investigación y responsabilidad social universitaria, considerando las particularidades territoriales.
    </p>

    <div 
      class="image-container"
      :class="{ 'container-hover': isHovered }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <img 
      src="\img.png" 
        alt="Congreso RIESGIRD-ACC Perú en ESAN"
        :style="{ filter: isHovered ? 'brightness(1.05)' : 'brightness(1)' }"
      />
    </div>
  </section>
</template>

<style scoped>
/* Estilos encapsulados para que no afecten a otros componentes */
.about-section {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  background: #ffffff;
  padding: 40px 20px;
  border-radius: 12px;
}

/* Línea inferior bicolor de la imagen original */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 25px;
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
  height: 3px;
  background: linear-gradient(to right, #cc2c2c 50%, #1e40af 50%);
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #333333;
  margin-bottom: 35px;
  text-align: justify;
}

.image-container {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

/* Estado reactivo controlado por Nuxt/Vue */
.container-hover {
  transform: translateY(-4px);
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.3s ease;
}

.image-container:hover img {
  transform: scale(1.02);
}
/* --- RESPONSIVE DESIGN --- */
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.75rem;
  }

  .section-text {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 30px 15px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .section-text {
    font-size: 0.95rem;
    text-align: left;
  }
}
</style>