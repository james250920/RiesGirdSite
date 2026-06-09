<template>
  <div class="membresia-container">
    
    <div class="banner-certificado">
      <div class="banner-izq">
        <div class="icono-check-box">
          <svg viewBox="0 0 24 24" fill="none" class="icono-check">
            <path d="M20 6L9 17L4 12" stroke="#1d3557" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="banner-texto">
          <h2>Certificado de Membresía</h2>
          <p>Al completar el proceso de adscripción, tu universidad recibirá un certificado oficial que acredita su membresía en la RiesGrid-ACC Perú.</p>
        </div>
      </div>
      <button class="btn-informacion">
        Solicitar Información 
        <span class="flecha">→</span>
      </button>
    </div>

    <div class="contenido-grid">
      
      <div class="columna-bloque">
        <div class="columna-header">
          <div class="icono-sobre-wrapper">
            <svg viewBox="0 0 24 24" fill="none" class="icono-sobre">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-width="2"/>
              <path d="M22 6L12 13L2 6" stroke="white" stroke-width="2"/>
            </svg>
          </div>
          <h3>Requisitos</h3>
        </div>

        <div class="lista-items">
          <div v-for="(req, index) in requisitos" :key="index" class="tarjeta-blanca item-requisito">
            <div class="badge-numero">{{ index + 1 }}</div>
            <p>{{ req }}</p>
          </div>
        </div>
      </div>

      <div class="columna-bloque">
        <div class="columna-header">
          <div class="icono-sobre-wrapper">
            <svg viewBox="0 0 24 24" fill="none" class="icono-sobre">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" stroke-width="2"/>
              <path d="M22 6L12 13L2 6" stroke="white" stroke-width="2"/>
            </svg>
          </div>
          <h3>Modelos de Documentos</h3>
        </div>

        <div class="lista-items">
          <div v-for="(doc, index) in documentos" :key="index" class="tarjeta-blanca item-documento">
            <div class="documento-izq">
              <div class="badge-doc">D</div>
              <div class="documento-textos">
                <h4>{{ doc.titulo }}</h4>
                <p>{{ doc.descripcion }}</p>
              </div>
            </div>
            <button class="btn-download" aria-label="Descargar documento">
              <svg viewBox="0 0 24 24" fill="none" class="icono-download">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#e63946" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>

    <div class="footer-decoracion"></div>
    
    <button class="btn-unete">
      ¡Únete a la Red!
    </button>

  </div>
</template>

<script setup>
const requisitos = [
  'Ser una universidad licenciada por SUNEDU',
  'Carta de solicitud firmada por el Rector',
  'Compromiso formal de participación activa en la red',
  'Resolución de designación de secretario técnico',
  'Resolución de conformación de comité técnico'
]

const documentos = [
  {
    titulo: 'Modelo de Carta de Solicitud de Adscripción',
    descripcion: 'Formato oficial para solicitar la incorporación a la red.'
  },
  {
    titulo: 'Modelo de resolución de designación de secretario',
    descripcion: 'Formato de resolución rectoral para designar'
  },
  {
    titulo: 'Modelo de designación de comité técnico interáreas',
    descripcion: 'formato para conformar el equipo estratégico'
  },
  {
    titulo: 'Modelo de certificado membresía',
    descripcion: 'Diseño del certificado oficial que acredita el pase'
  }
]
</script>

<style scoped>
/* Variables locales de color basados en la paleta de la imagen */
.membresia-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

/* --- BANNER SUPERIOR --- */
.banner-certificado {
  width: 100%;
  background: linear-gradient(90deg, #de0a34 0%, #702675 45%, #1f4287 100%);
  border-radius: 12px;
  padding: 25px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 35px;
  box-sizing: border-box;
}

.banner-izq {
  display: flex;
  align-items: center;
  gap: 25px;
  flex: 1;
}

.icono-check-box {
  background-color: #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.icono-check {
  width: 30px;
  height: 30px;
}

.banner-texto {
  color: #ffffff;
  text-align: left;
}

.banner-texto h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 6px 0;
}

.banner-texto p {
  font-size: 13px;
  margin: 0;
  opacity: 0.9;
  line-height: 1.4;
  max-width: 600px;
}

.btn-informacion {
  background-color: #ffffff;
  color: #de0a34;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.btn-informacion:hover {
  transform: scale(1.03);
}

/* --- GRID DE CONTENIDO --- */
.contenido-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.columna-bloque {
  background-color: #f4f7fc;
  border-radius: 8px;
  padding: 30px 25px;
  box-sizing: border-box;
}

.columna-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.icono-sobre-wrapper {
  background: linear-gradient(135deg, #de0a34, #1f4287);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icono-sobre {
  width: 20px;
  height: 20px;
}

.columna-header h3 {
  font-size: 22px;
  font-weight: 700;
  color: #111111;
  margin: 0;
}

/* Tarjetas Blancas Internas */
.lista-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tarjeta-blanca {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.03);
  box-sizing: border-box;
}

/* Elementos columna izquierda (Requisitos) */
.item-requisito {
  gap: 15px;
}

.item-requisito p {
  font-size: 13px;
  color: #222222;
  font-weight: 500;
  margin: 0;
  text-align: left;
}

.badge-numero {
  background: linear-gradient(180deg, #de0a34 0%, #702675 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

/* Elementos columna derecha (Documentos) */
.item-documento {
  justify-content: space-between;
  gap: 15px;
}

.documento-izq {
  display: flex;
  align-items: center;
  gap: 15px;
  text-align: left;
}

.badge-doc {
  background: linear-gradient(180deg, #de0a34 0%, #702675 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.documento-textos h4 {
  font-size: 13px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 3px 0;
}

.documento-textos p {
  font-size: 11px;
  color: #666666;
  margin: 0;
}

.btn-download {
  background: none;
  border: 1px solid #e63946;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
}

.icono-download {
  width: 14px;
  height: 14px;
}

/* --- DECORACIÓN Y BOTÓN INFERIOR --- */
.footer-decoracion {
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #de0a34 0%, #1f4287 100%);
  margin-bottom: 30px;
}

.btn-unete {
  background: linear-gradient(90deg, #de0a34 0%, #2b4c8c 100%);
  color: #ffffff;
  border: none;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 60px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: opacity 0.2s ease;
}

.btn-unete:hover {
  opacity: 0.95;
}

/* --- RESPONSIVIDAD PARA MÓVILES --- */
@media (max-width: 850px) {
  .banner-certificado {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding: 20px;
  }
  
  .banner-izq {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .banner-texto {
    text-align: center;
  }

  .contenido-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>