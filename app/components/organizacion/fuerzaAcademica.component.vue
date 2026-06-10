<script setup lang="ts">
// Ruta de la imagen institucional del foro
const fotoComunidad = '/img.png';
</script>

<template>
  <section class="fuerza-section">
    <div class="fuerza-container">
      
      <div class="title-container">
        <h2 class="section-title">
          Somos la fuerza académica unida <br />
          <span class="gradient-underline">por un Perú más seguro y resiliente.</span>
        </h2>
      </div>

      <div class="fuerza-grid">
        
        <div class="text-side">
          <p class="description-paragraph">
            Más que una organización, somos una comunidad de universidades públicas y privadas, docentes, investigadores y autoridades, comprometidos con la protección de la vida y nuestro territorio frente a los escenarios de riesgo y el cambio climático.
          </p>
        </div>

        <div class="image-side">
          <div class="photo-wrapper">
            <img :src="fotoComunidad" alt="Comunidad RiesGIRD-ACC Perú" class="forum-photo" />
          </div>
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
  margin-bottom: 60px;
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
  padding-bottom: 12px;
}

/* Barra inferior exacta solicitada con gradiente institucional */
.gradient-underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px; /* Grosor ideal para el tamaño de letra */
  background: linear-gradient(to right, #db143c, #1e3a8a);
  border-radius: 2px;
}

/* --- MAQUETACIÓN DEL GRID --- */
.fuerza-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr; /* Mismo balance de peso visual que los bloques de arriba */
  gap: 60px;
  align-items: center;
}

/* --- BLOQUE TEXTO --- */
.description-paragraph {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.25rem;
  color: #1a1a1a;
  line-height: 1.75;
  font-weight: 400;
  margin: 0;
}

/* --- BLOQUE IMAGEN CON MARCO SUAVE --- */
.photo-wrapper {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
}

.forum-photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.photo-wrapper:hover .forum-photo {
  transform: scale(1.02);
}

/* --- DISEÑO RESPONSIVE COMPLETO --- */

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
    font-size: 1.5rem;
  }

  .description-paragraph {
    font-size: 1.05rem;
  }

  .photo-wrapper {
    max-width: 550px;
    margin: 0 auto; /* Centra la imagen en móviles */
  }
}
</style>