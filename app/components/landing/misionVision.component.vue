<script setup>
// No se requiere lógica compleja de JS, Nuxt maneja todo de forma nativa
</script>

<template>
  <div class="mision-vision-container">
    
    <section class="card vision-card">
      <div class="corner-decoration top-right-blue"></div>
      
      <div class="card-content">
        <div class="text-side">
          <div class="icon-wrapper blue-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <h2 class="card-title">Nuestra Visión</h2>
          <p class="card-text">
            Ser la red líder en América Latina en la promoción de la gestión integral del riesgo de desastres y la adaptación al cambio climático desde la educación superior, formando profesionales comprometidos con la resiliencia territorial.
          </p>
        </div>
        
        <div class="image-side">
          <img src="\img.png" alt="Reunión Visión RIESGIRD" />
        </div>
      </div>
    </section>

    <section class="card mision-card">
      <div class="corner-decoration top-left-pink"></div>
      
      <div class="card-content reverse-layout">
        <div class="image-side">
          <img src="\img.png" alt="Grupo Misión RIESGIRD" />
        </div>

        <div class="text-side">
          <div class="icon-wrapper red-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a4.859 4.859 0 0 0 3.714-4.717V5.618a4.859 4.859 0 0 0-3.626-4.707l-3.244-.763a9 9 0 0 0-6.19.664l-.107.054a9 9 0 0 1-6.086.71L3 1.5M3 15V1.5" />
            </svg>
          </div>
          <h2 class="card-title">Nuestra Misión</h2>
          <p class="card-text">
            Articular las capacidades de las universidades peruanas para integrar la gestión del riesgo de desastres y la adaptación al cambio climático en la formación académica, investigación y proyección social, contribuyendo al desarrollo sostenible del país.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Contenedor Principal (Fondo gris claro) */
.mision-vision-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #f4f7fc;
  border-radius:15px;
}

/* Tarjetas Blancas Básicas */
.card {
  background-color: #ffffff;
  border-radius: 20px;
  position: relative;
  overflow: hidden; /* Corta los círculos decorativos de las esquinas */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  padding: 50px 40px;
}

/* Flexbox para alinear Texto e Imagen */
.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

/* El bloque inverso para la Misión */
.reverse-layout {
  flex-direction: row;
}

/* Lados del contenido */
.text-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.image-side {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-side img {
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

/* Estilos de los Iconos */
.icon-wrapper {
  width: 65px;
  height: 65px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.icon {
  width: 32px;
  height: 32px;
  color: #ffffff;
}

.blue-icon { background-color: #2b529a; }
.red-icon { background-color: #e31b46; }

/* Títulos y Textos */
.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 15px;
}

.card-text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333333;
  text-align: justify;
}

/* Detalles decorativos de las esquinas (Bordes de color) */
.corner-decoration {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.top-right-blue {
  top: -20px;
  right: -20px;
  background-color: #b9cbe7;
}

.top-left-pink {
  top: -20px;
  left: -20px;
  background-color: #e8b3c3;
}

/* --- RESPONSIVE / DISEÑO ADAPTATIVO MÓVIL --- */
@media (max-width: 768px) {
  .card {
    padding: 30px 20px;
  }
  
  .card-content, .reverse-layout {
    flex-direction: column !important; /* Fuerza a todo a ir en vertical en móviles */
    gap: 30px;
  }
  
  .image-side img {
    max-width: 100%; /* La imagen ocupa todo el ancho disponible en móvil */
  }
}
</style>