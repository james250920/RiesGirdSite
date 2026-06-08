<script setup lang="ts">
// Ruta de la imagen institucional
const fotoNaturaleza = '/img.png';
</script>

<template>
  <section class="naturaleza-section">
    <div class="naturaleza-container">
      
      <div class="title-container">
  <h2 class="section-title">La Necesidad Institucional y Social</h2>
</div>

      <div class="naturaleza-card">
        <div class="content-grid">
          
          <div class="image-block">
            <div class="photo-frame">
              <img :src="fotoNaturaleza" alt="IESGIRD-ACC Perú Naturaleza" class="photo" />
            </div>
          </div>

          <div class="text-block">
            <p class="paragraph">
            La vulnerabilidad del territorio peruano exige un cambio de paradigma educativo. La necesidad de incorporar la GIRD y la ACC en la educación superior responde a las demandas del Sistema Nacional de Gestión del Riesgo de Desastres (SINAGERD) y a la Política Nacional de Cambio Climático. Necesitamos médicos que entiendan la operatividad de hospitales seguros, arquitectos que diseñen con enfoque de riesgo, y economistas que calculen el impacto de los desastres en el presupuesto público.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- FONDO DE SECCIÓN --- */
.naturaleza-section {
  width: 100%;
  background-color: #f2f5fa; 
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  border-radius: 15px;
}

.naturaleza-container {
  width: 100%;
  max-width: 1100px;
}

/* --- TÍTULO SECCIÓN --- */
.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 50px; /* El margen inferior se lo damos al contenedor */
}

/* 2. Tu clase con el inline-block y el gradiente */
.section-title {
  display: inline-block;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  
  /* Estilos de la barra con gradiente */
  border-bottom: 5px solid; /* Subido a 6px para que tenga presencia institucional */
  border-image: linear-gradient(to right, #db143c, #1e3a8a) 1; 
  padding-bottom: 8px;
}

/* --- TARJETA BLANCA (EL CONTENEDOR) --- */
.naturaleza-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); /* Sombra suave */
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr; /* Proporción 2 columnas */
  gap: 60px;
  align-items: center;
}

/* --- BLOQUE DE IMAGEN --- */
.photo-frame {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* --- BLOQUE DE TEXTO --- */
.text-block {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.paragraph {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.15rem;
  color: #1a1a1a;
  line-height: 1.8;
  font-weight: 400;
  margin: 0;
}

/* --- RESPONSIVE DESIGN --- */

/* Tablets */
@media (max-width: 1024px) {
  .content-grid {
    gap: 40px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }

  .naturaleza-card {
    padding: 30px;
  }
}

/* Móviles (Se apila el contenido) */
@media (max-width: 768px) {
  .naturaleza-section {
    padding: 40px 15px;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .text-block {
    text-align: center;
  }

  .paragraph {
    font-size: 1.05rem;
  }
}
</style>