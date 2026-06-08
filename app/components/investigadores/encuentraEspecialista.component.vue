<script setup>
// Datos simulados basados exactamente en tu imagen para renderizar las tarjetas (image_140fe0.png)
const especialistas = [
  {
    name: 'Hugo Cirilo Calizaya Calizaya',
    category: 'Sismología',
    email: 'Ejemplo@gmail.com',
    phone: '---'
  },
  {
    name: 'Gladys Marcionila Cruz Yupanqui',
    category: 'Hidrología',
    email: 'Ejemplo@gmail.com',
    phone: '---'
  },
  {
    name: 'Edgardo Leoncio Braul Gomero',
    category: 'Ciencias Sociales',
    email: 'Ejemplo@gmail.com',
    phone: '---'
  },
  {
    name: 'Enrique Edison Benites Juárez',
    category: 'Sismología',
    email: 'Ejemplo@gmail.com',
    phone: '---'
  }
]
</script>

<template>
  <section class="especialistas-section">
    <div class="container">
      
      <div class="header-block">
        <h2 class="main-title">Encuentra a un Especialista</h2>
      </div>

      <div class="filters-row">
        <div class="filter-select">
          <span class="placeholder">Universidad</span>
          <div class="select-divider indicator-crimson"></div>
          <svg class="arrow-icon icon-crimson" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>

        <div class="filter-select">
          <span class="placeholder">Región</span>
          <div class="select-divider indicator-blue"></div>
          <svg class="arrow-icon icon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>

        <div class="filter-select">
          <span class="placeholder">Especialidad</span>
          <div class="select-divider indicator-crimson"></div>
          <svg class="arrow-icon icon-crimson" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>

      <div class="especialistas-grid">
        <div v-for="(esp, index) in especialistas" :key="index" class="especialista-card">
          
          <div class="avatar-gradient-box">
            <svg class="avatar-silhouette" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z"/>
            </svg>
          </div>

          <div class="info-box">
            <span class="specialty-tag">{{ esp.category }}</span>
            <h3 class="expert-name">{{ esp.name }}</h3>
            
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              <span>{{ esp.email }}</span>
            </div>

            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>{{ esp.phone }}</span>
            </div>
          </div>

        </div>
      </div>

      <div class="action-row">
        <button class="btn-ver-mas">Ver Más</button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* 1. SECCIÓN BASE */
.especialistas-section {
  width: 100%;
  background-color: #ffffff;
  padding: 60px 20px;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.header-block {
  text-align: center;
  margin-bottom: 40px;
}

/* TÍTULO CON LA LÍNEA ELÁSTICA */
.main-title {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 2.2rem;
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

/* 2. FILTROS ESTILIZADOS EXACTOS A LA IMAGEN */
.filters-row {
  display: flex;
  justify-content: center;
  gap: 25px;
  max-width: 880px;
  margin: 0 auto 45px auto;
}

.filter-select {
  background: #ffffff;
  border-radius: 10px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
}

.placeholder {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  color: #7a7a7a;
}

/* Barras verticales e iconos de color en los filtros */
.select-divider {
  width: 2px;
  height: 22px;
  margin-left: auto;
  margin-right: 14px;
}

.indicator-crimson { background-color: #db143c; }
.indicator-blue { background-color: #1e3a8a; }

.arrow-icon {
  width: 16px;
  height: 16px;
}
.icon-crimson { color: #db143c; }
.icon-blue { color: #1e3a8a; }


/* ================= 3. GRID RECOGIDO AL CENTRO ================= */
.especificas-grid, .especialistas-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 880px; /* <--- No toca los bordes laterales de la pantalla */
  margin: 0 auto 40px auto;
}

/* TARJETA BLANCA CON SOMBRA */
.especialista-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
  border: 1px solid #f0f4f8;
}

/* CUADRANTE DE AVATAR CON GRADIENTE CORPORATIVO DIAGONAL */
.avatar-gradient-box {
  width: 125px;
  height: 125px;
  background: linear-gradient(135deg, #db143c 0%, #294699 65%, #1e3a8a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-silhouette {
  width: 80px;
  height: 80px;
  color: #ffffff;
}

/* INFORMACIÓN DEL TEXTO */
.info-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.specialty-tag {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.75rem;
  color: #555555;
  text-decoration: underline;
  margin-bottom: 5px;
}

.expert-name {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #000000;
  line-height: 1.25;
  margin: 0 0 10px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.8rem;
  color: #888888;
  margin-bottom: 4px;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-icon {
  width: 13px;
  height: 13px;
}


/* ================= 4. BOTÓN VER MÁS CON GRADIENTE ================= */
.action-row {
  display: flex;
  justify-content: center;
}

.btn-ver-mas {
  background: linear-gradient(to right, #db143c 0%, #294699 60%, #1e3a8a 100%);
  color: #ffffff;
  border: none;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 12px 55px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(30, 58, 138, 0.2);
  transition: transform 0.2s ease;
}

.btn-ver-mas:hover {
  transform: translateY(-1px);
}


/* ================= REGLAS RESPONSIVAS ================= */
@media (max-width: 880px) {
  .filters-row {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .filter-select {
    width: 100%;
    max-width: 400px;
  }

  .especialistas-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
}

@media (max-width: 480px) {
  .especialista-card {
    flex-direction: column;
    text-align: center;
    padding: 25px 15px;
  }

  .info-box {
    align-items: center;
  }
  
  .contact-item {
    justify-content: center;
  }
}
</style>