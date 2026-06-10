<script setup lang="ts">
const fotoNaturaleza = '/img.png';
</script>

<template>
  <section class="naturaleza-section">
    <div class="naturaleza-container">
      
      <div class="title-container">
  <h2 class="section-title">Nuestra Identidad</h2>
</div>



      <div class="naturaleza-card">

        <div class="top-content">
        <p class="intro-paragraph">La RIESGIRD-ACC Perú está conformada por instituciones de educación superior de diversa
          s regiones del país que han decidido dejar de trabajar de forma aislada para construir un frente común.
        </p>
      </div>
      
        <div class="content-grid">
          
          <div class="image-block">
            <div class="photo-frame">
              <img :src="fotoNaturaleza" alt="IESGIRD-ACC Perú Naturaleza" class="photo" />
            </div>
          </div>

          <div class="text-block">
            <p class="paragraph">
              Entendemos que los desastres no son naturales, sino el resultado de vulnerabilidades que podemos reducir. Por ello, desde nuestras aulas, laboratorios y oficinas administrativas, unimos esfuerzos para transformar la cultura de prevención en el Perú. Actuamos como un puente estratégico entre la ciencia, la toma de decisiones políticas y las necesidades urgentes de nuestras comunidades.
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.top-content {
  margin-bottom: 50px;
  text-align: center;
  text-align: justify;
  color: #1a1a1a;
}

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

.title-container {
  width: 100%;
  text-align: center;
  margin-bottom: 50px; 
}


.section-title {
  display: inline-block;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  

  border-bottom: 5px solid; 
  border-image: linear-gradient(to right, #db143c, #1e3a8a) 1; 
  padding-bottom: 8px;
}


.naturaleza-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 50px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05); 
}
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr; 
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
    font-size: 1.85rem;
  }

  .naturaleza-card {
    padding: 30px;
  }

  .paragraph {
    font-size: 1.1rem;
  }
}

/* Móviles (Se apila el contenido) */
@media (max-width: 768px) {
  .naturaleza-section {
    padding: 40px 15px;
  }

  .title-container {
    margin-bottom: 30px;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .text-block {
    text-align: center;
  }

  .paragraph {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>