<script setup>
// Datos exactos de los 4 principios de la imagen
const principios = [
  {
    title: 'Transversalidad en el Conocimiento',
    desc: 'La prevención de desastres y la adaptación climática no son tareas exclusivas de una sola carrera. Promovemos que la GIRD y la ACC se integren en todas las áreas del conocimiento: desde las ingenierías y ciencias exactas, hasta las ciencias sociales, la salud y las humanidades.',
    // Libros académicos lineales
    icon: 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z'
  },
  {
    title: 'Enfoque Territorial y Descentralizado',
    desc: 'El Perú es un país megadiverso. Entendemos que las estrategias frente al cambio climático y los riesgos no pueden ser uniformes. Nuestras soluciones y propuestas de investigación nacen desde y para cada territorio, respetando las realidades geográficas, sociales y culturales de la costa, la sierra y la amazonía.',
    // Ubicación territorial
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
  },
  {
    title: 'Gobernanza y Compromiso Institucional',
    desc: 'El cambio empieza desde adentro. Impulsamos que el compromiso con la resiliencia sea asumido por las más altas autoridades de cada universidad, integrando estas políticas en los planes de desarrollo institucional, presupuestos y gestión de campus.',
    // Estrechón de manos institucional
    icon: 'M19 11H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 8H5v-6h14v6zm-7-15c-1.93 0-3.5 1.57-3.5 3.5S10.07 11 12 11s3.5-1.57 3.5-3.5S13.93 4 12 4z'
  },
  {
    title: 'Responsabilidad Social con Impacto',
    desc: 'El conocimiento universitario debe estar al servicio de la sociedad. Orientamos nuestros esfuerzos hacia la protección de las poblaciones más vulnerables, colaborando activamente con los gobiernos locales, regionales y la sociedad civil para construir comunidades preparadas.',
    // Escudo protector
    icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z'
  }
]
</script>

<template>
  <section class="principios-section">
    <div class="container">
      
      <div class="header-block">
        <h2 class="main-title">Los principios que guían nuestro trabajo</h2>
        <p class="section-intro">
          Para que nuestras acciones tengan un impacto real y sostenible en el país, todas las universidades que conformamos la RIESGIRD-ACC Perú alineamos nuestros esfuerzos bajo cuatro enfoques fundamentales.
        </p>
      </div>

      <div class="principios-grid">
        <div v-for="(item, index) in principios" :key="index" class="principio-card">
          
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
/* 1. SECCIÓN PRINCIPAL */
.principios-section {
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
  margin-bottom: 50px;
}

/* 2. DISEÑO DEL TÍTULO CON LA BARRA DEGRADADA RECTA CONTRAÍDA (image_14f4b6.png) */
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
  width: 100%; /* Sigue fiel a la anchura dinámica del texto del título */
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

/* ================= CORRECCIÓN: CONTENEDOR AGRUPADO EN EL MEDIO ================= */
.principios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;        /* Gap equilibrado e idéntico a las láminas de investigación */
  max-width: 730px; /* <--- No permite que las cartas toquen los costados de la pantalla */
  margin: 0 auto;  /* Centra horizontalmente todo el bloque de las 4 tarjetas */
}

/* 3. DISEÑO DE TARJETAS CON DEGRADADO CORPORATIVO CRUZADO DIAGONAL */
.principio-card {
  background: linear-gradient(to right, #db143c 0%, #294699 65%, #1e3a8a 100%);
  border-radius: 16px;
  padding: 40px 30px;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* 4. ELEMENTOS INTERNOS DEL CONTENIDO */
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
  min-height: 54px; /* Asegura la simetría si un título es más largo */
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

/* 5. RESPONSIVE DESIGN PARA DISPOSITIVOS MÓVILES */
@media (max-width: 1024px) {
  .main-title {
    font-size: 1.85rem;
  }

  .principios-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    gap: 25px;
  }

  .principio-card {
    padding: 35px 25px;
  }
}

@media (max-width: 768px) {
  .principios-section {
    padding: 40px 15px;
  }

  .principios-grid {
    grid-template-columns: 1fr; /* Colapsa verticalmente de manera ordenada */
    max-width: 460px; /* Mantiene proporciones estéticas en pantallas verticales */
    gap: 20px;
  }

  .main-title {
    font-size: 1.6rem;
  }

  .section-intro {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .card-title {
    font-size: 1.2rem;
    min-height: auto;
    margin-bottom: 12px;
  }

  .card-desc {
    font-size: 0.9rem;
  }
}
</style>