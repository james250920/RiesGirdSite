<script setup>
// Simulamos los datos que vienen para los 4 foros de la imagen
const eventos = [
  { id: 1, color: 'rojo', titulo: 'Foro N°1', subtitulo: 'Prueba de foro interuniversitario' },
  { id: 2, color: 'azul', titulo: 'Foro N°1', subtitulo: 'Prueba de foro interuniversitario' },
  { id: 3, color: 'rojo', titulo: 'Foro N°1', subtitulo: 'Prueba de foro interuniversitario' },
  { id: 4, color: 'azul', titulo: 'Foro N°1', subtitulo: 'Prueba de foro interuniversitario' }
]
</script>

<template>
  <section class="eventos-section">
    <h2 class="section-title">Eventos y Noticias Destacados</h2>

    <div class="eventos-grid">
      <div 
        v-for="evento in eventos" 
        :key="evento.id" 
        class="evento-card"
      >
        <div class="image-wrapper">
          <img src="/img.png" alt="Evento RIESGIRD" class="evento-img" />
          
          <div class="date-badge" :class="evento.color">
            <span class="day">16</span>
            <span class="month">Mayo</span>
          </div>
        </div>

        <div class="card-info">
          <h3 class="info-title">{{ evento.titulo }}</h3>
          <h4 class="info-subtitle">{{ evento.subtitulo }}</h4>

          <div class="details-list">
            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="detail-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>Modalidad: Presencial</span>
            </div>

            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="detail-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <span>Fecha: Marzo 2026</span>
            </div>

            <div class="detail-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="detail-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <span>Estado: Próximamente</span>
            </div>
          </div>

          <button class="btn-action" :class="evento.color">
            Ver más
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- CONFIGURACIÓN GENERAL --- */
.eventos-section {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
  padding: 90px 10px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 45px;
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

/* --- REJILLA (4 COLUMNAS DE LA IMAGEN) --- */
.eventos-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
}

/* --- TARJETA DE EVENTO --- */
.evento-card {
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  border: 1px solid #f1f5f9;
}

.evento-card:hover {
  transform: translateY(-5px);
}

/* Contenedor de la Imagen */
.image-wrapper {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.evento-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Badge Flotante de Fecha */
.date-badge {
  position: absolute;
  top: 0;
  right: 12px;
  width: 42px;
  padding: 6px 0;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.date-badge .day {
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1;
}

.date-badge .month {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 2px;
}

/* --- BLOQUE DE TEXTO E INFORMACIÓN --- */
.card-info {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.info-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.info-subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 20px;
  line-height: 1.3;
}

/* Detalles (Modalidad, Fecha, Estado) */
.details-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
  align-items: flex-start;
  padding-left: 10px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #64748b;
  font-size: 0.88rem;
  font-weight: 500;
}

.detail-icon {
  width: 18px;
  height: 18px;
  color: #94a3b8;
  flex-shrink: 0;
}

/* --- BOTÓN DE ACCIÓN --- */
.btn-action {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto; /* Empuja el botón al fondo si los textos varían de tamaño */
  transition: opacity 0.2s ease, transform 0.1s ease;
}

.btn-action:strong {
  transform: scale(0.98);
}

.btn-action:hover {
  opacity: 0.9;
}

/* --- VARIACIONES DE COLOR --- */
.rojo { background-color: #db143c; }
.azul { background-color: #25529a; }

/* --- DISEÑO RESPONSIVE --- */
@media (max-width: 1024px) {
  .eventos-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets */
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .eventos-grid {
    grid-template-columns: 1fr; /* 1 columna en teléfonos móviles */
  }
}
</style>