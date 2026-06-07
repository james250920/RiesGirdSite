<script setup>
// No requiere lógica adicional, diseño puro 1:1 con CSS
</script>

<template>
  <section class="objetivos-section">
    <h2 class="section-title">Nuestros Objetivos</h2>
    
    <p class="intro-text">
      La Red Interuniversitaria para la Gestión Integral del Riesgo de Desastres y la Adaptación al Cambio Climático (RIESGIRD-ACC Perú) es un espacio de articulación académica que agrupa a las universidades del país comprometidas con la seguridad y la resiliencia climática.
    </p>

    <div class="objetivo-general-wrapper">
      <div class="tag-flotante-general">
        <span class="t-rojo">Objetivo</span> 
        <span class="t-azul">General</span>
      </div>
      <div class="box-bicolor">
        <div class="mitad-borde-rojo"></div>
        <div class="mitad-borde-azul"></div>
        <p class="quote-text">
          "Impulsar la gestión integral del riesgo de desastres y la adaptación al cambio climático en las universidades peruanas, integrándolas en la formación, investigación y responsabilidad social para contribuir al desarrollo sostenible del país."
        </p>
      </div>
    </div>

    <div class="grid-objetivos fila-superior">
      <div v-for="n in 3" :key="n" class="card-objetivo azul">
        <div class="tag-card">Objetivo {{ n }}</div>
        <div class="content-card">
          <p v-if="n === 1">Diseñar e implementar estrategias colaborativas entre universidades que contribuyan a la reducción del riesgo de desastres y los riesgos climáticos en los territorios.</p>
          <p v-if="n === 2">Fortalecer la pertinencia y calidad de las capacidades académicas en GIRD-ACC, mediante la coordinación con instituciones públicas y privadas a nivel nacional e internacional.</p>
          <p v-if="n === 3">Promover alianzas interuniversitarias y multisectoriales vinculadas a la gestión del riesgo y la adaptación al cambio climático.</p>
        </div>
      </div>
    </div>

    <div class="grid-objetivos fila-inferior">
      <div v-for="n in [4, 5]" :key="n" class="card-objetivo rojo">
        <div class="tag-card">Objetivo {{ n }}</div>
        <div class="content-card">
          <p v-if="n === 4">Poner a disposición de las autoridades competentes las capacidades técnicas especializadas en los procesos de la Gestión del Riesgo de Desastres.</p>
          <p v-if="n === 5">Promover el derecho a la asistencia humanitaria y el derecho a un ambiente saludable, manteniendo independencia y autonomía institucional.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 1. CONFIGURACIÓN GENERAL */
.objetivos-section {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  display: inline-block;
  position: relative;
  padding-bottom: 10px;
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
  line-height: 1.6;
  color: #334155;
  margin-bottom: 60px;
}

/* 2. ESTILOS OBJETIVO GENERAL (Bicolor) */
.objetivo-general-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto 70px;
}

.tag-flotante-general {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 8px 30px;
  font-weight: 700;
  font-size: 1.1rem;
  z-index: 10;
  display: flex;
  gap: 6px;
  border-left: 2px solid #cc2c2c;
  border-right: 2px solid #1e40af;
}

.t-rojo { color: #0d0c0c; }
.t-azul { color: #0d0c0c; }

.box-bicolor {
  position: relative;
  background: white;
  padding: 45px 50px;
  border-radius: 15px;
}

.mitad-borde-rojo, .mitad-borde-azul {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  border: 2.5px solid;
  pointer-events: none;
}

.mitad-borde-rojo {
  left: 0;
  border-color: #cc2c2c;
  border-right: none;
  border-radius: 15px 0 0 15px;
}

.mitad-borde-azul {
  right: 0;
  border-color: #1e40af;
  border-left: none;
  border-radius: 0 15px 15px 0;
}

.quote-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.7;
  position: relative;
  z-index: 5;
}

/* 3. GRID DE OBJETIVOS ESPECÍFICOS */
.grid-objetivos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
}

.card-objetivo {
  position: relative;
  flex: 1;
  min-width: 300px;
  max-width: 340px;
  padding-top: 25px; /* Espacio para la pestaña */
}

.tag-card {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 6px 25px;
  font-weight: 700;
  border-radius: 10px 10px 0 0;
  z-index: 2;
  font-size: 0.95rem;
}

.content-card {
  border-radius: 15px;
  padding: 30px 25px;
  color: white;
  text-align: justify;
  font-size: 0.95rem;
  line-height: 1.6;
  min-height: 180px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Colores Azul (1, 2, 3) */
.azul .tag-card { border: 2px solid #1e3a8a; border-bottom: none; color: #000; }
.azul .content-card { background-color: #1e3a8a; }

/* Colores Rojo (4, 5) */
.rojo .tag-card { border: 2px solid #cc2c2c; border-bottom: none; color: #000; }
.rojo .content-card { background-color: #cc2c2c; }

/* 4. RESPONSIVE */
@media (max-width: 768px) {
  .grid-objetivos {
    flex-direction: column;
    align-items: center;
  }
  .card-objetivo {
    width: 100%;
    max-width: 100%;
  }
  .box-bicolor {
    padding: 40px 20px;
  }
}
</style>