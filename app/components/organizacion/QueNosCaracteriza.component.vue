<script setup lang="ts">
// Simplificamos el array quitando los colores individuales, ya que ahora todas comparten el gradiente corporativo uniforme
const ejes = [
  {
    titulo: 'Identidad Nacional y Descentralizada',
    descripcion: 'No centralizamos el conocimiento. Somos una red con verdadera representación territorial, entendiendo que las soluciones para la costa, los Andes y la Amazonía requieren enfoques distintos y locales.',
    icono: 'fa-solid fa-building-columns'
  },
  {
    titulo: 'Vocación Multidisciplinaria',
    descripcion: 'La gestión del riesgo y la crisis climática no es tarea de una sola carrera. Somos ingenieros, sociólogos, educadores, médicos, comunicadores y administradores trabajando bajo un mismo objetivo.',
    icono: 'fa-solid fa-book-open'
  },
  {
    titulo: 'Espíritu Colaborativo',
    descripcion: 'Creemos en el poder de la sinergia. Fomentamos el intercambio constante de buenas prácticas, recursos e investigaciones entre las universidades miembro, el Estado (SINAGERD) y la sociedad civil.',
    icono: 'fa-solid fa-microscope'
  }
]
</script>

<template>
  <section class="ejes-section">
    <div class="container">
      
      <div class="title-block">
        <h2 class="section-title">¿Qué nos caracteriza?</h2>
        <p class="section-intro">
          Nuestra identidad se basa en tres grandes pilares que definen quiénes somos como red:
        </p>
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

.section-intro {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.2rem;
  color: #374151;
  line-height: 1.6;
  font-weight: 500;
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