<script setup>
// No requiere lógica adicional, diseño puro 1:1 con CSS adaptado según distribución de color
</script>

<template>
  <section class="objetivos-section">
    <div class="title-container">
      <h2 class="section-title">Nuestros Objetivos</h2>
    </div>
    
    <p class="intro-text">
      La Red Interuniversitaria para la Gestión Integral del Riesgo de Desastres y la Adaptación al Cambio Climático (RIESGIRD-ACC Perú) es un espacio de articulación académica que agrupa a las universidades del país comprometidas con la seguridad y la resiliencia climática.
    </p>

    <div class="objetivo-general-wrapper">
      <div class="tag-flotante-general">
        <span class="t-rojo">Objetivo</span> 
        <span class="t-azul">General</span>
      </div>
      <div class="box-bicolor">
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
  padding: 60px 20px;
  text-align: center;
}

.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
}

.section-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  display: inline-block;
  position: relative;
  padding-bottom: 12px;
  margin: 0;
}

/* Subrayado con gradiente fluido unificado */
.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 5px;
  background: linear-gradient(to right, #db143c, #1e3a8a);
  border-radius: 4px;
}

.intro-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 60px;
}

/* 2. ESTILOS OBJETIVO GENERAL (Bicolor Corporativo) */
.objetivo-general-wrapper {
  position: relative;
  max-width: 900px;
  margin: 0 auto 75px;
}

.tag-flotante-general {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  padding: 8px 30px;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  z-index: 10;
  display: flex;
  gap: 6px;
  border-radius: 8px;
  
  /* Contorno con transicion de gradiente limpio */
  border: 1.5px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #db143c, #1e3a8a);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.t-rojo, .t-azul { color: #000000; }

.box-bicolor {
  position: relative;
  background: #ffffff;
  padding: 50px 45px 40px;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  
  border: 1.5px solid transparent;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #db143c, #1e3a8a);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.quote-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.15rem;
  font-style: italic;
  color: #1e293b;
  line-height: 1.7;
  position: relative;
  z-index: 5;
  margin: 0;
}

/* 3. GRID Y CONFIGURACIÓN DE OBJETIVOS ESPECÍFICOS */
.grid-objetivos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px 25px; /* Espaciado adaptativo para resguardar las pestañas superiores */
  margin-bottom: 45px;
}

.card-objetivo {
  position: relative;
  flex: 1;
  min-width: 300px;
  max-width: 340px;
}

/* Pestaña flotante individual compartida */
.tag-card {
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  background: #ffffff;
  padding: 10px 35px;
  font-family: system-ui, -apple-system, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 12px 12px 0 0;
  z-index: 4;
  white-space: nowrap;
}

/* Triángulo sutil de acople inferior */
.tag-card::after {
  content: "";
  position: absolute;
  bottom: -9px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  z-index: 5;
}

/* Caja de contenido de texto compartida */
.content-card {
  border-radius: 14px;
  padding: 35px 25px 25px;
  color: #ffffff;
  text-align: center;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.98rem;
  line-height: 1.6;
  min-height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.content-card p {
  margin: 0;
}

/* ================= COMPORTAMIENTO ESPECÍFICO DE COLOR VARIANTE (1:1 con la Imagen) ================= */

/* --- VARIANTE AZUL (Objetivos 1, 2 y 3) --- */
.azul .tag-card {
  border: 1.5px solid #1e3a8a;
  border-bottom: none;
  color: #1e3a8a;
}
.azul .tag-card::after {
  border-top: 10px solid #ffffff; /* Color acoplado al fondo blanco de la cabecera */
}
.azul .content-card {
  background-color: #1e3a8a;
}

/* --- VARIANTE ROJO/CARMESÍ (Objetivos 4 y 5) --- */
.rojo .tag-card {
  border: 1.5px solid #db143c;
  border-bottom: none;
  color: #db143c;
}
.rojo .tag-card::after {
  border-top: 10px solid #ffffff; /* Sincroniza limpiamente la apertura */
}
.rojo .content-card {
  background-color: #db143c;
}

/* 4. RESPONSILE DESIGN */
@media (max-width: 768px) {
  .grid-objetivos {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  
  .card-objetivo {
    width: 100%;
    max-width: 100%;
  }
  
  .box-bicolor {
    padding: 40px 20px;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style>