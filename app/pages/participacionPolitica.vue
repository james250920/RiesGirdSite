<script setup lang="ts">
import InitParticipacionPolitica from '~/components/participacionPolitica/initParticipacionPolitica.component.vue';
import IncidenciaTerritorial from '~/components/participacionPolitica/incidenciaTerritorial.component.vue';
import ArticulacionEstado from '~/components/participacionPolitica/articulacionEstado.component.vue';
</script>

<template>
  <InitParticipacionPolitica />
  <main class="main-body">
    
    <div class="content-wrapper">
      <IncidenciaTerritorial />
      <ArticulacionEstado />
    </div>
  </main>
</template>

<style scoped>
.main-body {
  flex: 1;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  width: 100%;
  max-width: 1100px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

@media (max-width: 1024px) {
  .main-body {
    padding: 20px 10px;
  }
  .content-wrapper {
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 20px 15px;
    border-radius: 8px;
  }
}
</style>
