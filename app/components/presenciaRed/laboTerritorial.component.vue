<script setup lang="ts">
// Ruta de la imagen institucional
const fotoNaturaleza = '/img.png';
</script>

<template>
  <section class="naturaleza-section">
    <div class="naturaleza-container">
      
      <div class="title-container">
  <h2 class="section-title">¿Qué es un Laboratorio Territorial?</h2>
</div>

      <div class="naturaleza-card">
        <div class="content-grid">

          <div class="text-block">
            <p class="paragraph">
             A diferencia de un laboratorio tradicional de cuatro paredes, un Living Lab es una zona geográfica específica (una cuenca, una ciudad, un valle agrícola) donde implementamos y validamos tecnologías y estrategias sociales junto con las personas que habitan el lugar.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- FONDO DE SECCIÓN --- */
.naturaleza-section {
  width: 100%;
  background-color: #f2f5fa; 
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
}

.naturaleza-container {
  width: 100%;
  max-width: 1100px;
}

/* --- TÍTULO SECCIÓN --- */
.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 50px; /* El margen inferior se lo damos al contenedor */
}

/* 2. Tu clase con el inline-block y el gradiente */
.section-title {
  display: inline-block;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  
  /* Estilos de la barra con gradiente */
  border-bottom: 5px solid; /* Subido a 6px para que tenga presencia institucional */
  border-image: linear-gradient(to right, #db143c, #1e3a8a) 1; 
  padding-bottom: 8px;
}

/* --- TARJETA BLANCA (EL CONTENEDOR) --- */
.naturaleza-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); /* Sombra suave */
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr ; /* Proporción 2 columnas */
  gap: 60px;
  align-items: center;
}

/* --- BLOQUE DE TEXTO --- */
.text-block {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.paragraph {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.15rem;
  color: #1a1a1a;
  line-height: 1.8;
  font-weight: 400;
  margin: 0;
}

/* --- RESPONSIVE DESIGN --- */

/* Tablets */
@media (max-width: 1024px) {
  .content-grid {
    gap: 40px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }

  .naturaleza-card {
    padding: 30px;
  }
}

/* Móviles (Se apila el contenido) */
@media (max-width: 768px) {
  .naturaleza-section {
    padding: 40px 15px;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .text-block {
    text-align: center;
  }

  .paragraph {
    font-size: 1.05rem;
  }
}
</style>