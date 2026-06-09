<template>
  <section class="registro-container">
    
    <div class="header-seccion">
      <h2 class="titulo-principal">
        Registro Audiovisual
      </h2>
    </div>

    <div class="tarjetas-grid">
      <div 
        v-for="(card, index) in cards" 
        :key="index"
        class="tarjeta-card"
      >
        <div class="imagen-contenedor">
          <img 
            :src="card.image" 
            :alt="card.title" 
            class="tarjeta-imagen"
          />
          <div class="linea-degradada"></div>
        </div>

        <div class="tarjeta-contenido">
          <span class="tarjeta-anio">{{ card.year }}</span>
          
          <h3 class="tarjeta-titulo">{{ card.title }}</h3>

          <div class="tarjeta-detalles">
            <div class="detalle-item">
              <svg class="icono" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>{{ card.location }}</span>
            </div>
            
            <div class="detalle-item">
              <svg class="icono" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-1h2a2 2 0 012 1m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
              </svg>
              <span>{{ card.documentText }}</span>
            </div>
          </div>

          <NuxtLink :to="card.link" class="boton-ver-mas">
            Ver Más
          </NuxtLink>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600', // Coloca aquí la ruta de tus imágenes
    year: '2024',
    title: 'Asamblea General 2024',
    location: 'Universidad ESAN',
    documentText: 'Acuerdos y Conclusiones',
    link: '/asamblea-2024-1'
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600',
    year: '2024',
    title: 'Asamblea General 2024',
    location: 'Universidad ESAN',
    documentText: 'Acuerdos y Conclusiones',
    link: '/asamblea-2024-2'
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600',
    year: '2024',
    title: 'Asamblea General 2024',
    location: 'Universidad ESAN',
    documentText: 'Acuerdos y Conclusiones',
    link: '/asamblea-2024-3'
  }
])
</script>

<style scoped>
/* Contenedor principal con fuente del sistema limpia */
.registro-container {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px;
}

/* Header y Título */
.header-seccion {
  text-align: center;
  margin-bottom: 48px;
}

.titulo-principal {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  display: inline-block;
  position: relative;
  padding-bottom: 12px;
  margin: 0;
}

/* Línea degradada del título */
.titulo-principal::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #df1445, #6b21a8, #1d4ed8);
}

/* Grid Responsivo (CSS Grid Puro) */
.tarjetas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  justify-items: center;
}

/* Tarjeta */
.tarjeta-card {
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #f3f4f6;
  overflow: hidden;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarjeta-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Imagen y su Línea de color inferior */
.imagen-contenedor {
  position: relative;
  width: 100%;
}

.tarjeta-imagen {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.linea-degradada {
  height: 3px;
  width: 100%;
  background: linear-gradient(to right, #df1445, #6b21a8, #1d4ed8);
}

/* Contenido interno */
.tarjeta-contenido {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}

.tarjeta-anio {
  font-size: 0.75rem;
  color: #718096;
  font-weight: 500;
  text-decoration: underline;
  margin-bottom: 4px;
}

.tarjeta-titulo {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
}

/* Iconos e Información de detalles */
.tarjeta-detalles {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 24px;
  flex-grow: 1;
}

.detalle-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.icono {
  width: 16px;
  height: 16px;
  color: #a0aec0;
}

/* Botón "Ver Más" */
.boton-ver-mas {
  display: inline-block;
  width: auto;
  padding: 10px 40px;
  background-color: #df1445; /* Rojo corporativo exacto */
  color: #ffffff;
  font-weight: 500;
  text-decoration: none;
  border-radius: 12px;
  transition: background-color 0.2s ease;
}

.boton-ver-mas:hover {
  background-color: #c0103a;
}
</style>