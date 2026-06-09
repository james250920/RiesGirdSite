<template>
  <div class="proceso-container">
    <h2 class="proceso-titulo">Fases del Proceso</h2>
    
    <div class="pasos-wrapper">
      <div v-for="(paso, index) in pasos" :key="paso.id" class="paso-item">
        <div :class="['tarjeta', { 'tarjeta-destacada': paso.id === 1 }]">
          <div class="numero-box">{{ paso.id }}</div>
          <h3 class="tarjeta-titulo">{{ paso.titulo }}</h3>
          <p class="tarjeta-descripcion">{{ paso.descripcion }}</p>
          <div class="tarjeta-tiempo">{{ paso.tiempo }}</div>
        </div>

        <div v-if="index < pasos.length - 1" class="flecha-conector">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pasos = [
  {
    id: 1,
    titulo: 'Solicitud Institutional',
    descripcion: 'El Rector de la universidad envía una solicitud escrita a la Presidencia del Consejo Directivo.',
    tiempo: '1 Semana'
  },
  {
    id: 2,
    titulo: 'Evaluación del Consejo Directivo',
    descripcion: 'El Consejo Directivo de la Red evalúa la solicitud y el cumplimiento de los requisitos.',
    tiempo: '2 Semana'
  },
  {
    id: 3,
    titulo: 'Acreditación del Equipo Técnico',
    descripcion: 'Una vez considerada la incorporación, la universidad debe presentar formalmente.',
    tiempo: '1 Semana'
  },
  {
    id: 4,
    titulo: 'Inscripción en el Libro Padrón',
    descripcion: 'Tras la aprobación del Consejo Directivo se procede a la inscripción en el Libro de Registro de Asociados.',
    tiempo: 'Administrativo (Inmediato tras aprobación)'
  },
  {
    id: 5,
    titulo: 'Formalización y Bienvenida',
    descripcion: 'Notificación formal de admisión y entrega de la documentación que acredita a la universidad como miembro de la Red.',
    tiempo: '1 Semana'
  }
]
</script>

<style scoped>
/* Contenedor General */
.proceso-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

/* Título Principal con línea decorativa inferior */
.proceso-titulo {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  color: #000000;
}

.proceso-titulo::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #e63946, #1d3557);
  border-radius: 2px;
}

/* Layout de Pasos */
.pasos-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap; /* Permite que se adapte a pantallas medianas */
}

.paso-item {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 180px;
}

/* Tarjeta Base (Pasos 2 al 5) */
.tarjeta {
  background-color: #ffffff;
  border: 2px solid;
  border-image: linear-gradient(to bottom, #e63946, #1d3557) 1; /* Simula el gradiente del borde */
  border-radius: 12px; /* Nota: border-image a veces rompe border-radius en navegadores viejos. Abajo una alternativa limpia */
  border: 2px solid #1d3557; /* Fallback de color plano si se prefiere redondeado perfecto */
  border-radius: 12px;
  padding: 20px 15px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

/* Variante Tarjeta 1 (Azul Degradado) */
.tarjeta-destacada {
  background: linear-gradient(to right, #c43131 0%, #3432ac 100%);
  border: none;
  color: #ffffff;
}

/* Cuadro del Número */
.numero-box {
  border: 2px solid #e63946;
  color: #e63946;
  font-size: 18px;
  font-weight: bold;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 15px;
}

.tarjeta-destacada .numero-box {
  border-color: #ffffff;
  color: #ffffff;
}

/* Tipografías internas */
.tarjeta-titulo {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #000000;
  line-height: 1.2;
}

.tarjeta-destacada .tarjeta-titulo {
  color: #ffffff;
}

.tarjeta-descripcion {
  font-size: 11px;
  color: #333333;
  line-height: 1.4;
  margin-bottom: 15px;
  text-align: left;
}

.tarjeta-destacada .tarjeta-descripcion {
  color: #f1faee;
}

/* Tiempos (Footer de la tarjeta) */
.tarjeta-tiempo {
  font-size: 12px;
  font-weight: 700;
  color: #1d3557;
  margin-top: auto;
}

.tarjeta-destacada .tarjeta-tiempo {
  color: #ffffff;
}

/* Estilo específico para el paso 2 y 4 (Texto rojo/azul según imagen) */
.paso-item:nth-child(2) .tarjeta-tiempo,
.paso-item:nth-child(4) .tarjeta-tiempo,
.paso-item:nth-child(5) .tarjeta-tiempo {
  color: #e63946;
}

/* Flechas Conectoras */
.flecha-conector {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e63946;
  width: 30px;
  padding: 0 5px;
}

.flecha-conector svg {
  width: 24px;
  height: 24px;
}

/* Adaptación para pantallas móviles */
@media (max-width: 900px) {
  .pasos-wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .paso-item {
    width: 100%;
  }
  .flecha-conector {
    transform: rotate(90deg);
    margin: 10px 0;
    width: 100%;
  }
}
</style>