<script setup lang="ts">
// Ruta de la imagen institucional del foro
const fotoComunidad = '/img.png';
</script>

<template>
  <section class="fuerza-section">
    <div class="fuerza-container">
      
      <div class="title-container">
        <h2 class="section-title">
          <span class="gradient-underline">El compromiso de hoy y el horizonte del mañana. </span>
        </h2>
      </div>

      <div class="fuerza-grid">
        
        <div class="text-side">
          <p class="description-paragraph">
            Cada paso que damos como Red está guiado por un propósito claro y una mirada a largo plazo. Trabajamos en el presente para transformar la educación, con la meta de asegurar un futuro más resiliente para el Perú.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- CONTENEDOR PRINCIPAL Y ENTORNO --- */
.fuerza-section {
  width: 100%;
  background-color: #ffffff; /* Fondo blanco limpio para hacer contraste con el bloque gris anterior */
  padding: 70px 20px 90px 20px;
  display: flex;
  justify-content: center;
}

.fuerza-container {
  width: 100%;
  max-width: 1100px;
}

/* --- TRATAMIENTO DEL TÍTULO CENTRADO Y DEGRADADO --- */
.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  display: inline-block;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.4;
  margin: 0;
}

.gradient-underline {
  display: inline-block;
  position: relative;
  padding-bottom: 10px;
}

/* Barra inferior exacta solicitada con gradiente institucional */
.gradient-underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px; /* Grosor ideal para el tamaño de letra */
  background: linear-gradient(to right, #db143c, #1e3a8a);
  border-radius: 2px;
}

.fuerza-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.description-paragraph {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.25rem;
  color: #1a1a1a;
  line-height: 1.75;
  font-weight: 400;
  margin: 0;
  max-width: 850px;
}


/* --- DISEÑO RESPONSIVO COMPLETO --- */

/* Ajuste para Tablets */
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.85rem;
  }
  
  .fuerza-grid {
    gap: 40px;
  }

  .description-paragraph {
    font-size: 1.15rem;
  }
}

/* Ajuste para teléfonos móviles */
@media (max-width: 768px) {
  .fuerza-section {
    padding: 50px 15px;
  }

  .fuerza-grid {
    grid-template-columns: 1fr; /* Columna única */
    gap: 35px;
    text-align: center;
  }

  .section-title {
    font-size: 1.55rem;
  }

  .description-paragraph {
    font-size: 1.1rem;
  }
  
  .photo-wrapper {
    max-width: 550px;
    margin: 0 auto; /* Centra la imagen en móviles */
  }
}
</style>