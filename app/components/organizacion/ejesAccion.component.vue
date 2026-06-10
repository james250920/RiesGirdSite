<script setup lang="ts">
// Simplificamos el array quitando los colores individuales, ya que ahora todas comparten el gradiente corporativo uniforme
const ejes = [
  {
    titulo: 'Gobernanza Universitaria:',
    descripcion: 'Impulsamos políticas, normativas y liderazgos desde las autoridades (rectores, decanos) para que la gestión de riesgos sea una prioridad institucional.',
    icono: 'fa-solid fa-building-columns'
  },
  {
    titulo: 'Formación Académica:',
    descripcion: 'Fomentamos la integración de estos temas en las mallas curriculares de todas las profesiones, formando egresados conscientes y preparados.',
    icono: 'fa-solid fa-book-open'
  },
  {
    titulo: 'Investigación Científica:',
    descripcion: 'Promovemos la generación de conocimiento aplicado y tecnología para entender nuestras vulnerabilidades territoriales y proponer soluciones innovadoras.',
    icono: 'fa-solid fa-microscope'
  },
  {
    titulo: 'Responsabilidad Social:',
    descripcion: 'Vinculamos a la universidad con su entorno, apoyando a las comunidades y gobiernos locales en la construcción de territorios seguros.',
    icono: 'fa-solid fa-hand-holding-heart'
  }
]
</script>

<template>
  <section class="ejes-section">
    <div class="container">
      
      <div class="title-block">
        <h2 class="section-title">Nuestros Ejes de Acción</h2>
        <p class="section-intro">
          Para lograr este cambio, la Red promueve que la GIRD y la ACC se incorporen de manera transversal en cuatro dimensiones clave de la vida universitaria:
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
  grid-template-columns: repeat(4, 1fr);
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
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.85rem;
  }

  .ejes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .ejes-section {
    padding: 50px 15px;
  }

  .ejes-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .eje-card {
    padding: 35px 20px;
  }
  
  .eje-icon {
    font-size: 2.8rem;
  }

  .eje-title {
    font-size: 1.2rem;
  }
}
</style>