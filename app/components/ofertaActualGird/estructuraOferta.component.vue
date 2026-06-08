<template>
  <section class="oferta-section">
    <div class="container">
      
      <div class="header-block">
        <h2 class="main-title">¿Cómo estructuramos la oferta?</h2>
        <p class="section-intro">
          El camino hacia una oferta consolidada ha sido progresivo. Empezamos con esfuerzos aislados de algunos docentes y la creación de diplomados esporádicos. Hoy, gracias a la articulación de la Red, hemos logrado estandarizar competencias, compartir recursos entre universidades y alcanzar logros significativos, como la acreditación de programas conjuntos y la creación de maestrías especializadas que responden a la demanda del Estado y el sector privado.
        </p>
      </div>

      <div class="oferta-grid">
        
        <div class="oferta-card">
          <span class="nivel-tag">Nivel Pregrado</span>
          
          <div class="avatar-circle">
            <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z"/>
            </svg>
          </div>

          <h3 class="card-subtitle">Cursos Electivos y Generales</h3>
          <p class="card-description">
            La puerta de entrada. Promovemos la creación de cursos electivos transversales (ej. "Gestión del Riesgo y Cambio Climático") abiertos a estudiantes de cualquier facultad. El objetivo es brindar nociones básicas, normativa nacional y herramientas de cultura preventiva antes de que el alumno se especialice.
          </p>
        </div>

        <div class="oferta-card">
          <span class="nivel-tag">Nivel Posgrado</span>
          
          <div class="avatar-circle">
            <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z"/>
            </svg>
          </div>

          <h3 class="card-subtitle">Formación Especializada</h3>
          <p class="card-description">
            Para quienes liderarán la toma de decisiones. Desarrollamos diplomados, maestrías y doctorados enfocados en la evaluación técnica de riesgos, diseño de políticas públicas, formulación de proyectos de inversión pública (Invierte.pe) con enfoque de riesgo, y tecnologías de monitoreo.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. SECCIÓN Y CONTENEDOR ANCHO RECOGIDO */
.oferta-section {
  width: 100%;
  background-color: #ffffff;
  padding: 80px 20px;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.header-block {
  text-align: center;
  margin-bottom: 60px;
}

/* TÍTULO CON LÍNEA DE GRADIENTE */
.main-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  color: #000000;
  display: inline-block;
  position: relative;
  padding-bottom: 14px;
  margin: 0 0 25px 0;
}

.main-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #db143c, #1e3a8a);
  border-radius: 2px;
}

.section-intro {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.05rem;
  line-height: 1.63;
  color: #1a1a1a;
  max-width: 955px;
  margin: 0 auto;
}

/* ================= 2. LAS TARJETA (CARDS) EN PARALELO ================= */
.oferta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 720px; /* Ancho ajustado para que las tarjetas se mantengan centradas y estilizadas */
  margin: 0 auto;
}

.oferta-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 45px 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f2f5f9;
}

/* Texto Superior en Color Rosado Carmesí */
.nivel-tag {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #df385b;
  margin-bottom: 25px;
}

/* Círculo con degradado para la silueta del Avatar */
.avatar-circle {
  width: 110px;
  height: 110px;
  background: linear-gradient(135deg, #db143c 0%, #294699 65%, #1e3a8a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  box-shadow: 0 6px 15px rgba(41, 70, 153, 0.15);
}

.avatar-icon {
  width: 65px;
  height: 65px;
  color: #ffffff;
}

/* Títulos y Descripciones de la Tarjeta */
.card-subtitle {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 18px 0;
}

.card-description {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.92rem;
  line-height: 1.65;
  color: #444444;
  margin: 0;
}

/* ================= 3. ENFOQUE RESPONSIVO ================= */
@media (max-width: 850px) {
  .oferta-grid {
    grid-template-columns: 1fr; /* Colapsa en una sola columna en pantallas móviles */
    max-width: 450px;
    gap: 30px;
  }

  .main-title {
    font-size: 1.80rem;
  }

  .oferta-card {
    padding: 35px 20px;
  }
}
</style>