<script setup lang="ts">
// Aquí puedes definir la ruta o usar un emisor si manejas eventos
const handleNavigation = () => {
  navigateTo('/lineamiento') // Redirección nativa de Nuxt 3
}
</script>

<template>
  <section class="cta-banner-section">
    <div class="cta-container">
      
      <div class="cta-content">
        <h2 class="cta-text">
          Para cumplir esta misión y alcanzar nuestra visión, nos regimos por principios claros.
        </h2>
        
        <button class="cta-button" @click="handleNavigation">
          Conoce nuestros Lineamientos
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* --- CONTENEDOR DEL BANNER (GRADIENTE FLUIDO) --- */
.cta-banner-section {
  width: 100%;
  /* Gradiente exacto que va de Rojo Carmesí a un tono Morado Central y cierra en Azul Profundo */
  background: linear-gradient(to right, #db143c 0%, #1e3a8a 100%);
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-container {
  width: 100%;
  max-width: 1100px;
}

/* --- DISTRIBUCIÓN ALINEADA (TEXTO E IZQUIERDA, BOTÓN A LA DERECHA) --- */
.cta-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

/* --- TEXTO DEL LLAMADO --- */
.cta-text {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.85rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin: 0;
  max-width: 700px; /* Evita que el texto colisione o se pegue al botón */
}

/* --- BOTÓN INTERACTIVO ESTILO OUTLINE --- */
.cta-button {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: transparent;
  padding: 14px 36px;
  border: 1.5px solid rgba(255, 255, 255, 0.85); /* Borde blanco semi-translúcido */
  border-radius: 10px; /* Esquinas ligeramente suavizadas acorde a la foto */
  cursor: pointer;
  white-space: nowrap; /* Evita que el texto del botón se rompa en dos líneas */
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

/* Efecto Hover dinámico */
.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.12); /* Sutil iluminación interna */
  border-color: #ffffff;
  transform: scale(1.03);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.15);
}

.cta-button:active {
  transform: scale(0.98);
}

/* --- RESPONSIVE DESIGN --- */

/* Tablets */
@media (max-width: 1024px) {
  .cta-text {
    font-size: 1.5rem;
  }
  
  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
  }
}

/* Móviles (Se apila verticalmente y se centra todo) */
@media (max-width: 768px) {
  .cta-banner-section {
    padding: 40px 20px;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }

  .cta-text {
    font-size: 1.3rem;
    max-width: 100%;
  }

  .cta-button {
    width: 100%; /* El botón se expande para ser pulsado fácilmente en móviles */
    max-width: 260px;
  }
}
</style>