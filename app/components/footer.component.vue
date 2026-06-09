<script setup>
// Año dinámico por si deseas mantenerlo siempre actualizado, 
// aunque en la imagen se especifica estático el año 2026.
const currentYear = 2026 
</script>

<template>
  <footer class="main-footer">
    <div class="footer-container">
      
      <div class="footer-brand-column">
        <img src="/img.png" alt="RiesGIRD-ACC Perú Logo" class="footer-logo" />
      </div>

      <div class="footer-links-grid">
        
        <div class="links-column">
          <h3 class="column-title">Organización</h3>
          <ul class="links-list">
            <li><NuxtLink to="/">RED</NuxtLink></li>
            <li><NuxtLink to="/organizacion">¿Qué es la Red?</NuxtLink></li>
            <li><NuxtLink to="/estructuraOrganizacional">Estructura organizacional</NuxtLink></li>
            <li><NuxtLink to="/procesoMembresia">Proceso y requisito de membresía</NuxtLink></li>
          </ul>
        </div>

        <div class="links-column">
          <h3 class="column-title">Líneas de acción</h3>
          <ul class="links-list">
            <li><NuxtLink to="/investigacionesProducidas">Investigación</NuxtLink></li>
            <li><NuxtLink to="/estrategiaTransversalizacion">Formación</NuxtLink></li>
            <li><NuxtLink to="/servicioDesarrolloTerritorial">Responsabilidad socio ambiental</NuxtLink></li>
          </ul>
        </div>

        <div class="links-column">
          <h3 class="column-title">Eventos y noticias</h3>
          <ul class="links-list">
            <li><NuxtLink to="/eventosNoticias">Noticias</NuxtLink></li>
            <li><NuxtLink to="/noticiasConvocatorias">Convocatorias</NuxtLink></li>
            <div class="links-column">
          <h3 class="column-title">Miembros</h3>
          <ul class="links-list">
            <li><NuxtLink to="/directorio">Directorio</NuxtLink></li>
            <li><NuxtLink to="/universidades">Universidades</NuxtLink></li>
            
          </ul>
        </div>
          </ul>
        </div>

        <div class="links-column">
          <h3 class="column-title">Documentos e investigaciones</h3>
          <ul class="links-list">
            <li><NuxtLink to="/memoriasCongreso">Memorias</NuxtLink></li>
            <li><NuxtLink to="/gestionConocimiento">Documentos y Gestión</NuxtLink></li>
            <li><NuxtLink to="/investigacionesProducidas">Investigaciones</NuxtLink></li>
            <li><NuxtLink to="/presenciaRed">Presencia Riesgird</NuxtLink></li>
          </ul>
        </div>
        <div class="links-column">
          <h3 class="column-title">Asambleas</h3>
          <ul class="links-list">
            <li><NuxtLink to="/asamblea">Asamblea</NuxtLink></li>
            <li><NuxtLink to="/ofertaActualGird">Oferta Actual Riesgird</NuxtLink></li>
            <li><NuxtLink to="/estrategiaTransversalizacion">Estrategia</NuxtLink></li>
            <li><NuxtLink to="/dialogosGobiernoGestion">Gobierno y Gestión</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom-bar">
      <p class="copyright-text">
        © Copyright {{ currentYear }} - Riesgird - ACC | Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<style scoped>
/* --- ESTILO ESTRUCTURAL DEL FOOTER --- */
.main-footer {
  /* Color azul corporativo exacto de fondo */
  background-color: #1e40af; 
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  padding-top: 50px;
  margin-top: 60px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* --- COLUMNA DE LOGOTIPO --- */
.footer-brand-column {
  flex-shrink: 0;
  max-width: 320px;
}

.footer-logo {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

/* --- REJILLA DE ENLACES --- */
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  flex: 1;
}

.main-footer {
  background-color: #1e40af; 
  width: 100%;
  
  /* 1. Evita que los márgenes de los hijos "salten" hacia afuera */
  overflow: hidden; 
  
  /* 2. Asegúrate de usar padding para dar espacio arriba y abajo */
  padding-top: 50px;
  margin-top: 60px; /* Separación con la sección anterior */
}

/* Asegúrate de que la barra de abajo no tenga márgenes que empujen hacia el lienzo negro */
.footer-bottom-bar {
  background-color: #173287; 
  width: 100%;
  padding: 15px 20px;
  margin: 0; /* Forza a eliminar desfases */
}

.links-column {
  display: flex;
  flex-direction: column;
}

.column-title {
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Viñetas cuadradas o puntos antes de los elementos según captura */
.links-list li {
  position: relative;
  padding-left: 14px;
}

.links-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #93c5fd; /* Azul claro para los puntos */
  font-size: 0.9rem;
  top: -1px;
}

/* Links interactivos */
.links-list a {
  color: #e0f2fe;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.2s ease;
  line-height: 1.3;
}

.links-list a:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* --- FRANJA DE COPYRIGHT INFERIOR --- */
.footer-bottom-bar {
  background-color: #173287; /* Azul más oscuro para la base */
  width: 100%;
  padding: 15px 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.copyright-text {
  color: #93c5fd;
  font-size: 0.88rem;
  margin: 0;
  font-weight: 500;
}

/* --- DISEÑO RESPONSIVE --- */
@media (max-width: 1024px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }

  .footer-brand-column {
    max-width: 260px;
  }

  .footer-links-grid {
    width: 100%;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets */
    gap: 30px;
  }

  .links-list {
    align-items: center;
  }
}

@media (max-width: 540px) {
  .footer-links-grid {
    grid-template-columns: 1fr; /* 1 sola columna en dispositivos móviles */
    gap: 25px;
  }
  
  .column-title {
    margin-bottom: 12px;
  }
}
</style>