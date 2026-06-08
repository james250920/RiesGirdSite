<script setup>
// Datos estructurados exactamente con los textos reales de la imagen (image_13231c.png)
const documentos = [
  {
    tag: '[PDF]',
    title: 'Implementación de Sistema de Alerta Temprana Comunitario ante fenómeno El Niño',
    institution: 'Universidad Nacional de Piura y Municipalidad de Catacaos',
    desc: 'Estudiantes de ingeniería electrónica y sociología trabajaron con la comunidad para instalar sensores de nivel de río de bajo costo y capacitaron a 50 líderes vecinales en protocolos de evacuación rápida.'
  },
  {
    tag: '[PDF]',
    title: 'Reforestación y estabilización de laderas en zonas sísmicas.',
    institution: 'Universidad Nacional de San Agustín (Arequipa)',
    desc: 'Proyecto de responsabilidad social donde voluntarios universitarios plantaron más de 2000 especies nativas (queñuales) para estabilizar suelos vulnerables a deslizamientos en zonas periurbanas.'
  },
  {
    tag: '[PDF]',
    title: 'Soporte psicosocial post-emergencia por huaicos',
    institution: 'Universidad Nacional Mayor de San Marcos (Lima)',
    desc: 'Brigadas de la facultad de psicología brindaron atención y contención emocional a más de 300 familias afectadas por deslizamientos en la cuenca del río Rímac.'
  }
]
</script>

<template>
  <section class="documentacion-section">
    <div class="container">
      
      <div class="header-block">
        <h2 class="main-title">Documentación Formal y Respaldo</h2>
        <p class="section-intro">
          Toda nuestra estrategia de transversalización está respaldada por marcos normativos nacionales e internacionales. Ponemos a disposición de la comunidad universitaria los siguientes documentos base:
        </p>
      </div>

      <div class="documentos-grid">
        <div v-for="(doc, index) in documentos" :key="index" class="documento-card">
          
          <span class="pdf-tag">{{ doc.tag }}</span>

          <div class="avatar-circle">
            <svg class="avatar-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z"/>
            </svg>
          </div>

          <h3 class="doc-title">{{ doc.title }}</h3>
          <p class="doc-institution">{{ doc.institution }}</p>
          <p class="doc-desc">{{ doc.desc }}</p>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. CONFIGURACIÓN GENERAL */
.documentacion-section {
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
  margin-bottom: 55px;
}

/* TÍTULO CON LA LÍNEA DEGRADADA RECTA COMPLETA DEL ANCHO DEL TEXTO */
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
  line-height: 1.6;
  color: #1a1a1a;
  max-width: 950px;
  margin: 0 auto;
}

/* ================= 2. GRID CENTRADO DE 3 COLUMNAS ================= */
.documentos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1080px; /* Recogido para simular las proporciones de los elementos de la imagen */
  margin: 0 auto;
}

/* 3. TARJETA VERTICAL CON BORDES REDONDEADOS Y SOMBRA SUTIL */
.documento-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 40px 25px 35px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f4f8;
}

/* Etiqueta [PDF] superior con el gradiente de color corporativo */
.pdf-tag {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  background: linear-gradient(to right, #db143c 0%, #1e3a8a 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 25px;
}

/* Círculo con degradado perfecto para albergar la silueta */
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

/* 4. TIPOGRAFÍAS INTERNAS EXACTAS */
.doc-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.35;
  margin: 0 0 16px 0;
  min-height: 68px; /* Mantiene la alineación de las cajas si el título varía de tamaño */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Subrayado y color carmesí/azul para las universidades */
.doc-institution {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.4;
  color: #294699;
  text-decoration: underline;
  margin: 0 0 20px 0;
  min-height: 38px; /* Simetría visual */
  display: flex;
  align-items: center;
  justify-content: center;
}

.doc-desc {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #444444;
  margin: 0;
}

/* ================= 5. ADAPTACIÓN RESPONSIVA ================= */
@media (max-width: 990px) {
  .documentos-grid {
    grid-template-columns: repeat(2, 1fr); /* Pasa a dos columnas en tablets */
    max-width: 720px;
  }
  
  .doc-title, .doc-institution {
    min-height: auto; /* Desactiva alturas fijas en responsive */
  }
}

@media (max-width: 650px) {
  .documentos-grid {
    grid-template-columns: 1fr; /* Una sola columna en celulares */
    max-width: 360px;
  }

  .main-title {
    font-size: 1.8rem;
  }
}
</style>