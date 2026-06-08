<template>
  <section class="caso-exito-section">
    <div class="container">
      
      <div class="header-block">
        <h2 class="main-title">Caso de Éxito y Alianzas</h2>
      </div>

      <div class="content-grid">
        
        <div class="image-wrapper">
          <img 
            src="/img.png" 
            alt="Jornada Científica de Vicerrectores y Directores"
            class="success-img"
          />
        </div>

        <div class="text-block">
          <h3 class="sub-title">
            Maestría Conjunta en Gestión de Riesgos y Sostenibilidad
          </h3>
          
          <div class="description-body">
            <strong class="highlight-label">El Modelo de Éxito:</strong>
            <p class="main-paragraph">
              Un claro ejemplo de nuestra capacidad de articulación es la alianza entre la Universidad Nacional de Ingeniería (UNI) aportando el rigor técnico, la Universidad ESAN aportando la visión en gestión pública y negocios, y el Ministerio de la Producción (PRODUCE) garantizando la aplicabilidad en el sector estatal.
            </p>
          </div>
        </div>

      </div>

      <div class="bottom-gradient-banner">
        <p class="banner-text">
          Esta sinergia demuestra que el trabajo en red permite crear programas de posgrado de altísimo nivel, formando funcionarios y especialistas con una visión completa y multidisciplinaria.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. SECCIÓN PRINCIPAL Y CONTENEDOR BASE */
.caso-exito-section {
  width: 100%;
  background-color: #ffffff;
  padding: 60px 20px 80px 20px;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.header-block {
  text-align: center;
  margin-bottom: 50px;
}

/* TÍTULO PRINCIPAL CON SUBRAYADO DE GRADIENTE CORPORATIVO RECTO */
.main-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  color: #000000;
  display: inline-block;
  position: relative;
  padding-bottom: 12px;
  margin: 0;
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

/* ================= 2. GRID DE DOS COLUMNAS ================= */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 60px;
}

/* Envoltura e Imagen redondeada de la izquierda */
.image-wrapper {
  width: 100%;
}

.success-img {
  width: 100%;
  height: auto;
  border-radius: 18px; /* Bordes redondeados pronunciados como la foto */
  object-fit: cover;
  display: block;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Contenido de la Derecha */
.text-block {
  display: flex;
  flex-direction: column;
}

/* Subtítulo con subrayado simple negro */
.sub-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.4;
  text-decoration: underline;
  margin: 0 0 25px 0;
}

/* Cuerpo de la descripción */
.description-body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.1rem;
  line-height: 1.55;
  color: #1a1a1a;
}

.highlight-label {
  display: block;
  font-weight: 700;
  margin-bottom: 4px;
}

.main-paragraph {
  margin: 0;
  text-align: justify;
}

/* ================= 3. FRANJA INFERIOR CON GRADIENTE ================= */
.bottom-gradient-banner {
  width: 100%;
  background: linear-gradient(to right, #db143c 0%, #294699 50%, #1e3a8a 100%);
  padding: 24px 40px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.15);
}

.banner-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.15rem;
  line-height: 1.5;
  color: #ffffff;
  margin: 0;
  font-weight: 400;
}

/* ================= 4. RESPONSIVE DESIGN ================= */
@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr; /* Colapsa a una columna en tabletas y móviles */
    gap: 35px;
  }

  .main-title {
    font-size: 1.95rem;
  }

  .sub-title {
    font-size: 1.25rem;
    text-align: center;
  }

  .bottom-gradient-banner {
    padding: 20px;
  }

  .banner-text {
    font-size: 1rem;
  }
}
</style>