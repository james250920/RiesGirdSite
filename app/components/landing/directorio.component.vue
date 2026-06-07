<script setup>
// Estructura de datos dinámica con la información de la imagen de referencia
const directivos = [
  {
    id: 1,
    cargo: 'Rector UPT',
    nombre: 'Hugo Cirilo Calizaya Calizaya',
    email: 'rectorado@upt.edu.pe',
    telefono: '---',
    foto: '/img.png',       // Guardar en la carpeta /public
    logoInstitucion: '/img.png'   // Guardar en la carpeta /public
  },
  {
    id: 2,
    cargo: 'Rectora UNTELS',
    nombre: 'Gladys Marcionila Cruz Yupanqui',
    email: 'rectorado@untels.edu.pe',
    telefono: '905452206',
    foto: '/img.png',     // Guardar en la carpeta /public
    logoInstitucion: '/img.png' // Guardar en la carpeta /public
  }
]
</script>

<template>
  <section class="directorio-section">
    <h2 class="section-title">Directorio</h2>
    
    <p class="intro-text">
      Sección destinada al registro y archivo oficial de las actividades, acuerdos y reuniones sostenidas por los directivos en el marco de la red.
    </p>

    <div class="directorio-grid">
      <div v-for="persona in directivos" :key="persona.id" class="directorio-card">
        
        <div class="photo-block">
          <div class="avatar-wrapper">
            <img :src="persona.foto" :alt="persona.nombre" class="director-img" @error="(e) => e.target.style.display = 'none'" />
            <div class="placeholder-avatar"></div>
            
            <div class="institution-logo-badge">
              <img :src="persona.logoInstitucion" alt="Logo Institución" class="badge-img" />
            </div>
          </div>
        </div>

        <div class="divider-bicolor-vertical">
          <div class="sub-linea-azul"></div>
          <div class="sub-linea-roja"></div>
        </div>

        <div class="info-block">
          <span class="cargo-tag">{{ persona.cargo }}</span>
          <h3 class="director-name">{{ persona.nombre }}</h3>
          
          <div class="contact-details">
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="contact-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a :href="`mailto:${persona.email}`" class="contact-link">{{ persona.email }}</a>
            </div>

            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="contact-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.017 12.017 0 0 1-4.5-4.5c-.155-.44.01-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span class="contact-text">{{ persona.telefono }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- CONFIGURACIÓN GENERAL --- */
.directorio-section {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  padding: 90px 10px;
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
  color: #334155;
  line-height: 1.5;
  margin-bottom: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* --- REJILLA (2 COLUMNAS) --- */
.directorio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
}

/* --- TARJETA DE DIRECTIVO --- */
.directorio-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  text-align: left;
}

/* Bloque Foto y Contenedores */
.photo-block {
  flex-shrink: 0;
}

.avatar-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
}

.director-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  position: relative;
  z-index: 2;
}

/* Fondo gris de respaldo por si no encuentra la foto */
.placeholder-avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e2e8f0;
  border-radius: 14px;
  z-index: 1;
}

/* Badge del Logo Universitario Inserto */
.institution-logo-badge {
  position: absolute;
  bottom: -8px;
  left: -8px;
  width: 42px;
  height: 42px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.badge-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* --- LÍNEA DIVISORIA BICOLOR VERTICAL --- */
.divider-bicolor-vertical {
  width: 2px;
  height: 110px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.sub-linea-azul {
  flex: 1;
  background-color: #25529a; /* Color superior */
}

.sub-linea-roja {
  flex: 1;
  background-color: #db143c; /* Color inferior */
}

/* --- BLOQUE DE INFORMACIÓN --- */
.info-block {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cargo-tag {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 2px;
  width: max-content;
}

.director-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 15px;
  line-height: 1.3;
}

/* Elementos de Contacto */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-icon {
  width: 16px;
  height: 16px;
  color: #94a3b8;
  flex-shrink: 0;
}

.contact-link {
  font-size: 0.9rem;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #25529a;
}

.contact-text {
  font-size: 0.9rem;
  color: #64748b;
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .directorio-grid {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
    gap: 20px;
  }
}

@media (max-width: 520px) {
  .directorio-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 30px 20px;
  }

  .divider-bicolor-vertical {
    width: 80px;
    height: 2px;
    flex-direction: row;
    margin: 10px 0;
  }
  
  .cargo-tag {
    margin: 0 auto 6px auto;
  }
}
</style>