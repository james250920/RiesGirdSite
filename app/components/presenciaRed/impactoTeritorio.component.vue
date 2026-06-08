<script setup lang="ts">
// Simplificamos el array quitando los colores individuales, ya que ahora todas comparten el gradiente corporativo uniforme
const ejes = [
  {
    titulo: 'Concreción Comunitaria:',
    descripcion: 'Las soluciones (como sistemas de alerta temprana comunitarios o técnicas agrícolas resilientes) se diseñan escuchando los saberes locales y las necesidades reales de la población.',
    icono: 'fa-solid fa-hand'
  },
  {
    titulo: 'Validación en Escenarios Reales:',
    descripcion: 'Probamos la eficacia de los planes de evacuación o la infraestructura sostenible enfrentándolos a las condiciones climáticas y sociales reales de la costa, sierra o selva.',
    icono: 'fa-solid fa-tree-city fa-fw'
  },
  {
    titulo: 'Nodos Descentralizados:',
    descripcion: 'Cada macro-región de la Red lidera laboratorios enfocados en sus propias amenazas: sismos y tsunamis en el litoral, heladas en los Andes, o inundaciones y dengue en la Amazonía.',
    icono: 'fa-solid fa-building' 
  }
]
</script>

<template>
  <section class="ejes-section">
    <div class="container">
      
      <div class="title-block">
        <h2 class="section-title">El Impacto en el Territorio</h2>
      </div>

      <div class="ejes-grid">
        <div 
          v-for="(eje, index) in ejes" 
          :key="index" 
          class="eje-card"
        >
          <i :class="[eje.icono, 'eje-icon']"></i>
          
          <h3 class="eje-title">{{ eje.titulo }}</h3>
          <p class="eje-description">{{ eje.descripcion }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- ESTRUCTURA GENERAL --- */
.ejes-section {
  width: 100%;
  padding: 80px 20px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1200px;
}

/* --- CABECERA DE SECCIÓN --- */
.title-block {
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  display: inline-block;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.3rem;
  font-weight: 800;
  color: #000000;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 30px;
  
  border-bottom: 6px solid;
  border-image: linear-gradient(to right, #db143c, #1e3a8a) 1;
}


/* --- REJILLA DE TARJETAS (GRID) --- */
.ejes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* --- NUEVO ESTILO DE TARJETA CON GRADIENTE (image_214d86.png) --- */
.eje-card {
  /* Gradiente idéntico de Rojo Carmesí a Azul Oscuro */
  background: linear-gradient(to right, #db143c 0%, #1e3a8a 100%);
  border-radius: 16px; /* Redondeado suavizado según la captura */
  padding: 45px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ffffff;
  box-shadow: 0 8px 24px rgba(30, 58, 138, 0.15); /* Sombra con matiz azulado */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.eje-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(219, 20, 60, 0.25);
}

/* --- ICONOS NATIVOS (SIN CÍRCULO) --- */
.eje-icon {
  font-size: 3.5rem; /* Tamaño aumentado al no tener contenedor circular */
  color: #ffffff;
  margin-bottom: 25px;
  display: block;
  opacity: 0.95;
}

/* --- TEXTOS INTERNOS --- */
.eje-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  line-height: 1.3;
}

.eje-description {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 400;
  opacity: 0.9;
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 1100px) {
  .ejes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 640px) {
  .ejes-grid {
    grid-template-columns: 1fr;
  }
  
  .eje-card {
    padding: 35px 20px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .eje-icon {
    font-size: 3rem;
  }
}
</style>