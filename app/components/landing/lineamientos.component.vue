<script setup>
// Mapeamos los datos de los lineamientos en un array para mantener el código limpio y mantenible
const lineamientos = [
  {
    id: 1,
    color: 'azul',
    texto: 'Promoción de alianzas estratégicas con el Estado, la empresa privada, la sociedad civil y la cooperación internacional.'
  },
  {
    id: 2,
    color: 'rojo',
    texto: 'Desarrollo de programas académicos conjuntos y redes de formación en GIRD-ACC.'
  },
  {
    id: 3,
    color: 'rojo',
    texto: 'Vinculación con la comunidad y fortalecimiento de la responsabilidad social universitaria con enfoque territorial.'
  },
  {
    id: 4,
    color: 'azul',
    texto: 'Gestión del conocimiento y difusión de buenas prácticas.'
  },
  {
    id: 5,
    color: 'azul',
    texto: 'Impulso de la investigación colaborativa y las redes de conocimiento.'
  },
  {
    id: 6,
    color: 'rojo',
    texto: 'Fortalecimiento de capacidades para la reducción del riesgo de desastres y la adaptación al cambio climático.'
  }
]
</script>

<template>
  <section class="lineamientos-section">
    <NuxtLink to="/lineamiento">
    <h2 class="section-title">Lineamientos</h2>
    </NuxtLink>
    <p class="intro-text">
      La RIESGIRD-ACC Perú orienta su accionar bajo los siguientes lineamientos:
    </p>

    <div class="lineamientos-grid">
      <div 
        v-for="item in lineamientos" 
        :key="item.id" 
        class="lineamiento-card" 
        :class="item.color"
      >
        <div class="card-icon-block">
          <div class="circle-check">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="check-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
        </div>

        <div class="card-text-block">
          <p>{{ item.texto }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- CONFIGURACIÓN GENERAL --- */
.lineamientos-section {
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  text-align: center;
  padding: 20px 20px;
  background-color: #f3f6fb;
  border-radius: 12px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #cc2c2c 50%, #1e40af 50%);
}

.intro-text {
  font-size: 1.1rem;
  color: #1f2937;
  margin-bottom: 45px;
}

/* --- REJILLA (GRID) --- */
.lineamientos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
}

/* --- DISEÑO DE LAS TARJETA (CARDS) --- */
.lineamiento-card {
  display: flex;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden; /* Corta el bloque de color para que herede el border-radius */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  min-height: 120px;
}

/* Bloque del Icono */
.card-icon-block {
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; /* Evita que el bloque se deforme si el texto es muy largo */
}

.circle-check {
  width: 45px;
  height: 45px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-icon {
  width: 22px;
  height: 22px;
  color: #ffffff;
}

/* Bloque del Texto */
.card-text-block {
  flex: 1;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0 16px 16px 0;
}

.card-text-block p {
  font-size: 1rem;
  line-height: 1.5;
  color: #1f2937;
  text-align: left;
  font-weight: 500;
}

/* --- VARIACIONES DE COLOR COMPORTAMIENTO 1:1 --- */

/* Estilos para Tarjeta Azul */
.azul {
  border: 1.5px solid #25529a;
}
.azul .card-icon-block {
  background-color: #25529a;
}

/* Estilos para Tarjeta Roja */
.rojo {
  border: 1.5px solid #db143c;
}
.rojo .card-icon-block {
  background-color: #db143c;
}

/* --- RESPONSIVE DESIGN (MÓVILES Y TABLETS) --- */
@media (max-width: 1024px) {
  .section-title {
    font-size: 1.8rem;
  }

  .lineamientos-grid {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .lineamientos-section {
    padding: 30px 15px;
  }

  .lineamientos-grid {
    grid-template-columns: 1fr; /* Pasa a una sola columna */
    gap: 15px;
  }

  .lineamiento-card {
    min-height: auto;
  }

  .card-icon-block {
    width: 80px; 
  }

  .circle-check {
    width: 35px;
    height: 35px;
  }

  .card-text-block {
    padding: 15px 20px;
  }

  .card-text-block p {
    font-size: 0.95rem;
  }
}
</style>