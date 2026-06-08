<script setup lang="ts">
// Ruta de la imagen de la Jornada Científica
const infoImage = '/img.png'
</script>

<template>
  <section class="red-info-section">
    <div class="container">
      
      <h2 class="info-title">
        <span class="red-underline">La prevención en todas las profesiones</span>
      </h2>

      <div class="info-grid">
        
        <div class="text-side">
          <p class="description-text">
            La gestión del riesgo y la adaptación climática no son tareas exclusivas de ingenieros o meteorólogos; impactan en la salud, la economía, el derecho y la educación. Por ello, nuestra estrategia se basa en la transversalización: asegurar que todo profesional peruano egrese con competencias para construir un país resiliente.
            </p>
        </div>

        <div class="image-side">
          <div class="image-frame">
            <img :src="infoImage" alt="Jornada Científica RiesGIRD-ACC" class="main-photo" />
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- CONTENEDOR Y ESTRUCTURA --- */
.red-info-section {
  width: 100%;
  background-color: #ffffff;
  padding: 60px 0;
  display: flex;
  justify-content: center;
}

.container {
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
}

/* --- TÍTULO CENTRADO CON SUBRAYADO ROJO --- */
.info-title {
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.1rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.3;
  margin-bottom: 60px;
}

.red-underline {
  display: inline-block;
  border-bottom: 5px solid; 
  border-image: linear-gradient(to right, #db143c, #1e3a8a) 1; 
  padding-bottom: 8px;
  border-radius: 4px;
}

/* --- GRID DE CONTENIDO --- */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr; /* Proporción similar a la captura */
  gap: 50px;
  align-items: center;
}

/* --- BLOQUE DE TEXTO (IZQUIERDA) --- */
.description-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.35rem;
  color: #1f2937;
  line-height: 1.6;
  font-weight: 400;
}

/* --- BLOQUE DE IMAGEN (DERECHA) --- */
.image-frame {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* Sombra suave para realzar la foto */
}

.main-photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.main-photo:hover {
  transform: scale(1.02);
}

/* --- RESPONSIVE DESIGN --- */

/* Tablets */
@media (max-width: 1024px) {
  .info-title {
    font-size: 1.8rem;
  }
  
  .description-text {
    font-size: 1.15rem;
  }

  .info-grid {
    gap: 30px;
  }
}

/* Móviles (Se apilan en una sola columna) */
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .info-title {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }

  .description-text {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }

  .red-underline {
    border-bottom-width: 3px;
  }
}
</style>