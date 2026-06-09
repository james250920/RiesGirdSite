<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-container">
      
      <div class="modal-layout">
        <div class="lateral-autoridad">
          <div class="lateral-blue-box">
            <img :src="autoridad.foto" :alt="autoridad.nombre" class="lateral-foto" @error="onImgError" />
          </div>
          <div class="lateral-info">
            <span class="lateral-cargo">{{ autoridad.cargo }} {{ autoridad.siglas }}</span>
            <h2 class="lateral-nombre">{{ autoridad.nombre }}</h2>
            
            <div class="lateral-contacto">
              <div v-if="autoridad.email" class="contacto-linea">
                <svg viewBox="0 0 20 20" fill="currentColor" class="contacto-icon"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <a :href="`mailto:${autoridad.email}`" class="contacto-link">{{ autoridad.email }}</a>
              </div>
              <div class="contacto-linea">
                <svg viewBox="0 0 20 20" fill="currentColor" class="contacto-icon"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.508 5.508l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-1C7.02 18 2 12.98 2 7V3z" /></svg>
                <span class="contacto-text">{{ autoridad.telefono || '---' }}</span>
              </div>
            </div>

            <div class="lateral-logo-box">
              <img v-if="autoridad.logo" :src="autoridad.logo" :alt="autoridad.siglas" class="institucion-logo" />
              <div v-else class="logo-placeholder">LOGO</div>
            </div>
          </div>
        </div>

        <div class="panel-soporte">
          
          <div class="bloque-grupo">
            <div class="header-barra-roja">Secretario Técnico</div>
            <div class="tarjeta-miembro-row">
              <div class="avatar-box-blue">
                <svg viewBox="0 0 24 24" fill="currentColor" class="avatar-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div class="miembro-datos">
                <h4 class="miembro-nombre">Gabriela Mallqui</h4>
                <p class="miembro-detalle"><span>✉</span> GAMALLQUI@uncp.edu.pe</p>
                <p class="miembro-detalle"><span>📞</span> ---</p>
              </div>
            </div>
          </div>

          <div class="bloque-grupo">
            <div class="header-barra-roja">Comité Técnico</div>
            <div class="comite-grid-layout">
              
              <div class="tarjeta-miembro-row mini">
                <div class="avatar-box-blue small">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="avatar-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div class="miembro-datos">
                  <span class="miembro-rol">Profesor</span>
                  <h4 class="miembro-nombre">Eddy Salvador Paredes</h4>
                  <p class="miembro-detalle"><span>✉</span> esparedes@uncp.edu.pe</p>
                  <p class="miembro-detalle"><span>📞</span> 964646674</p>
                </div>
              </div>

              <div class="tarjeta-miembro-row mini">
                <div class="avatar-box-blue small">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="avatar-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div class="miembro-datos">
                  <span class="miembro-rol">Coord. General de Maestrías</span>
                  <h4 class="miembro-nombre">Eddy Salvador Paredes</h4>
                  <p class="miembro-detalle"><span>✉</span> esparedes@uncp.edu.pe</p>
                  <p class="miembro-detalle"><span>📞</span> 964646674</p>
                </div>
              </div>

              <div class="tarjeta-miembro-row mini">
                <div class="avatar-box-blue small">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="avatar-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div class="miembro-datos">
                  <span class="miembro-rol">Profesor</span>
                  <h4 class="miembro-nombre">Eddy Salvador Paredes</h4>
                  <p class="miembro-detalle"><span>✉</span> esparedes@uncp.edu.pe</p>
                  <p class="miembro-detalle"><span>📞</span> 964646674</p>
                </div>
              </div>

              <div class="tarjeta-miembro-row mini">
                <div class="avatar-box-blue small">
                  <svg viewBox="0 0 24 24" fill="currentColor" class="avatar-svg"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div class="miembro-datos">
                  <span class="miembro-rol">Profesor</span>
                  <h4 class="miembro-nombre">Eddy Salvador Paredes</h4>
                  <p class="miembro-detalle"><span>✉</span> esparedes@uncp.edu.pe</p>
                  <p class="miembro-detalle"><span>📞</span> 964646674</p>
                </div>
              </div>

            </div>
          </div>

          <div class="footer-actions">
            <button class="btn-regresar" @click="$emit('close')">Regresar</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  autoridad: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])

function onImgError(e) {
  e.target.src = 'https://ui-avatars.com/api/?background=dce3ef&color=3a5490&size=128'
}
</script>

<style scoped>
/* Capa oscurecida */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 24px;
}

/* Caja contenedora */
.modal-container {
  background: #ffffff;
  width: 100%;
  max-width: 1050px;
  max-height: 90vh;
  border-radius: 14px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow-y: auto;
  animation: smoothUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes smoothUp {
  from { transform: translateY(15px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Layout en dos columnas principales */
.modal-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 550px;
}

/* COLUMNA IZQUIERDA: DISEÑO DE LA AUTORIDAD */
.lateral-autoridad {
  background: #ffffff;
  border-right: 2px solid #1a3a6e;
  padding: 32px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.lateral-blue-box {
  background-color: #1a3a6e;
  padding: 14px 14px 0px 14px;
  border-radius: 12px 12px 0 0;
  width: 100%;
  max-width: 200px;
  box-sizing: border-box;
}

.lateral-foto {
  width: 100%;
  height: 190px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

.lateral-info {
  margin-top: 16px;
  width: 100%;
}

.lateral-cargo {
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
  display: block;
}

.lateral-nombre {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f172a;
  margin: 6px 0 20px;
  line-height: 1.25;
}

.lateral-contacto {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 24px;
}

.contacto-linea {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  color: #334155;
  max-width: 100%;
}

.contacto-icon {
  width: 15px;
  height: 15px;
  color: #0f172a;
  flex-shrink: 0;
}

.contacto-link {
  color: #0284c7;
  text-decoration: none;
  word-break: break-all;
}
.contacto-link:hover { text-decoration: underline; }

.lateral-logo-box {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.institucion-logo {
  max-width: 110px;
  max-height: 110px;
  object-fit: contain;
}

.logo-placeholder {
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  border: 2px dashed #cbd5e1;
  padding: 12px 24px;
  border-radius: 8px;
}

/* COLUMNA DERECHA: LOS COMITÉS */
.panel-soporte {
  background: #f8fafc;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.bloque-grupo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Encabezados rojos idénticos a los de la imagen */
.header-barra-roja {
  background: #df1445;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Fila de Miembro (Estructura interna) */
.tarjeta-miembro-row {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  max-width: 450px;
}

.tarjeta-miembro-row.mini {
  max-width: 100%;
  padding: 12px;
}

.avatar-box-blue {
  background: #2b579a;
  color: #ffffff;
  width: 56px;
  height: 62px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-box-blue.small {
  width: 46px;
  height: 52px;
  border-radius: 6px;
}

.avatar-svg {
  width: 55%;
  height: 55%;
}

.miembro-datos {
  min-width: 0;
}

.miembro-rol {
  font-size: 0.72rem;
  color: #64748b;
  text-decoration: underline;
  display: block;
  margin-bottom: 2px;
}

.miembro-nombre {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px 0;
}

.miembro-detalle {
  font-size: 0.78rem;
  color: #475569;
  margin: 2px 0 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.miembro-detalle span {
  color: #94a3b8;
}

/* Grid del Comité Técnico */
.comite-grid-layout {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

/* Botón Regresar inferior */
.footer-actions {
  margin-top: auto;
  display: flex;
  justify-content: center;
}

.btn-regresar {
  background-color: #df1445;
  color: #ffffff;
  border: none;
  padding: 10px 48px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-regresar:hover {
  background-color: #c0103a;
}

/* Adaptabilidad Móvil */
@media (max-width: 820px) {
  .modal-layout {
    grid-template-columns: 1fr;
  }
  .lateral-autoridad {
    border-right: none;
    border-bottom: 2px solid #1a3a6e;
  }
  .comite-grid-layout {
    grid-template-columns: 1fr;
  }
}
</style>