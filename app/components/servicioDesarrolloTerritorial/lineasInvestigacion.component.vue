<script setup>
// Datos estructurados 1:1 basados en tu imagen de líneas de investigación
const lineas = [
  {
    title: 'Asistencia Técnica a Gobiernos Locales:',
    desc: 'Acompañamiento a municipalidades distritales y provinciales en la elaboración de sus Planes de Prevención y Reducción del Riesgo de Desastres (PPRRD), mapas de peligro y ordenamiento territorial.',
    // Gráfico de barras exacto
    icon: 'M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z'
  },
  {
    title: 'Capacitación y Sensibilización Comunitaria',
    desc: 'Acompañamiento a municipalidades distritales y provinciales en la elaboración de sus Planes de Prevención y Reducción del Riesgo de Desastres (PPRRD), mapas de peligro y ordenamiento territorial.',
    // Planta / Brote orgánico
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.25c0-.41.34-.75.75-.75s.75.34.75.75-.34.75-.75.75-.75-.34-.75-.75zm1.5-3.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3.75z'
  },
  {
    title: 'Voluntariado Universitario Especializado',
    desc: 'Despliegue de brigadas de estudiantes y docentes (de ingeniería, salud, psicología, trabajo social, etc.) para labores de apoyo pre y post desastre, evaluación de daños y reconstrucción comunitaria.',
    // Complejo de edificios urbanos
    icon: 'M12 7V3H2v18h20V7H12zm-6 12H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm8 12h-6v-2h2v-2h-2v-2h2v-2h-2V9h6v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
  },
  {
    title: 'Proyectos de Intervención Ecológica',
    desc: 'Iniciativas conjuntas para la protección de ecosistemas, como campañas de reforestación en laderas para evitar deslizamientos, o limpieza de cuencas de ríos para mitigar inundaciones.',
    // Antena Parabólica / Radar
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
  }
]
</script>

<template>
  <section class="lineas-section">
    <div class="container">
      
      <div class="header-block">
        <h2 class="main-title">Nuestras Líneas Prioritarias de Investigación</h2>
        <p class="section-intro">
          Todas las investigaciones respaldadas por la Red se enmarcan en las siguientes áreas clave:
        </p>
      </div>

      <div class="lineas-grid">
        <div v-for="(item, index) in lineas" :key="index" class="linea-card">
          
          <div class="icon-box">
            <svg class="lineal-svg" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path :d="item.icon" />
            </svg>
          </div>

          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-desc">{{ item.desc }}</p>
          
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. SECCIÓN DE FONDO GRISÁCEO/AZULADO CLARO */
.lineas-section {
  width: 100%;
  background-color: #f4f7fc; /* Fondo sutil de la diapositiva */
  padding: 80px 20px;
}

/* Contenedor padre general */
.container {
  width: 100%;
  margin: 0 auto;
}

.header-block {
  text-align: center;
  margin-bottom: 50px;
}

/* TÍTULO CON GRADIENTE FLUIDO COMPLETO ABAJO */
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
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1a1a1a;
  max-width: 900px;
  margin: 0 auto;
}

/* ================= SOLUCIÓN AQUÍ: CONTENEDOR RECOGIDO HACIA EL CENTRO ================= */
.lineas-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 845px; /* <--- Limita el ancho del bloque para que no toque las esquinas de la pantalla */
  margin: 0 auto;  /* Centra horizontalmente todo el bloque de 4 tarjetas */
}

/* TARJETAS CON GRADIENTE CORPORATIVO CRUZADO (1:1 CON IMAGEN) */
.linea-card {
  background: linear-gradient(to right, #db143c 0%, #294699 65%, #1e3a8a 100%);
  border-radius: 16px;
  padding: 10px 70px;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* ICONOS Y CONTENIDOS */
.icon-box {
  width: 65px;
  height: 65px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.lineal-svg {
  width: 55px;
  height: 55px;
}

.card-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 16px 0;
  min-height: 54px; /* Mantiene alineación vertical idéntica */
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-desc {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.95;
  text-align: center;
  margin: 0;
}

/* CONTROL RESPONSIVO */
@media (max-width: 850px) {
  .lineas-grid {
    grid-template-columns: 1fr; /* Una columna fluida en móviles */
    max-width: 460px; /* Evita que en pantallas medianas la tarjeta única se vuelva gigante */
    gap: 25px;
  }

  .main-title {
    font-size: 1.8rem;
  }
}
</style>