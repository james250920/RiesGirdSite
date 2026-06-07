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
  max-width: 950px; /* Reducido para que la sección sea más compacta */
  margin: 40px auto; /* Espacio vertical reducido */
  padding: 10px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px; /* Espacio sutilmente menor entre cajas */
  width: 100%;
}

.stat-card {
  background-color: #db143c;
  aspect-ratio: 1 / 1;
  border-radius: 14px; /* Bordes ligeramente menos pronunciados para el tamaño nuevo */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px; /* Reducción del espacio interno */
  
  box-shadow: 0 8px 20px rgba(219, 20, 60, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(219, 20, 60, 0.3);
}


.stat-number {
  color: #ffffff;
  font-size: 2.1rem; /* Bajó de 2.8rem a 2.1rem */
  font-weight: 800;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.5px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem; /* Bajó de 1.1rem a 0.9rem */
  font-weight: 600;
  margin-top: 8px;
  line-height: 1.2;
  max-width: 120px; /* Ajustado para el nuevo tamaño de caja */
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
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
    max-width: 290px; /* Mantiene las tarjetas compactas también en móviles */
  }
  .stats-grid {
    grid-template-columns: 1fr; /* Una sola columna en pantallas muy pequeñas */
    gap: 15px;
  }
}
</style>