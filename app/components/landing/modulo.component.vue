<script setup lang="ts">
const metricas = [
  { numero: '25+', label: 'Universidades' },
  { numero: '45+', label: 'Investigadores' },
  { numero: '1200+', label: 'Personas Capacitadas' },
  { numero: '8', label: 'Convenios' }
]
</script>

<template>
  <section class="stats-section">
    <div class="stats-grid">
      
      <div v-for="(item, index) in metricas" :key="index" class="stat-card">
        <h2 class="stat-number">{{ item.numero }}</h2>
        <p class="stat-label">{{ item.label }}</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.stats-section {
  width: 100%;
  max-width: 950px;
  /* Reseteamos márgenes y aplicamos la magia de superposición */
  margin: 0 auto; 
  padding: 0 80px;
  position: relative;
  
  /* SUBE LAS TARJETAS: Se monta exactamente sobre el borde del banner */
  transform: translateY(-35%); 
  
  /* CAPA SUPERIOR: Asegura ponerse por delante del renderizado del banner */
  z-index: 50; 
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* Ajustamos el espacio a 25px para que las tarjetas compactas no se dispersen */
  gap: 25px; 
  width: 100%;
}

.stat-card {
  background-color: #db143c;
  aspect-ratio: 1 / 1;
  border-radius: 14px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px; 
  
  /* Sombra sutil pero definida para el efecto flotante */
  box-shadow: 0 10px 25px rgba(219, 20, 60, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(219, 20, 60, 0.35);
}

.stat-number {
  color: #ffffff;
  font-size: 2.1rem; 
  font-weight: 800;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.5px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem; 
  font-weight: 600;
  margin-top: 8px;
  line-height: 1.2;
  max-width: 120px; 
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
  .stats-section {
    /* Suavizamos la superposición en tablets para evitar colisiones críticas */
    transform: translateY(-30px); 
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .stat-number {
    font-size: 1.9rem;
  }
}

@media (max-width: 440px) {
  .stats-section {
    max-width: 290px; 
    transform: translateY(-20px); /* Ajuste mínimo para teléfonos */
  }
  
  .stats-grid {
    grid-template-columns: 1fr; 
    gap: 15px;
  }
}
</style>