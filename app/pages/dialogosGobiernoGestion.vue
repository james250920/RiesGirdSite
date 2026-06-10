<script setup lang="ts">
import InitDialogosGobiernoGestion from '~/components/dialogosGobiernoGestion/initDialogosGobiernoGestion.component.vue';
import ArticulacionEstado from '~/components/dialogosGobiernoGestion/articulacionEstado.component.vue';
import CienciaEstado from '~/components/dialogosGobiernoGestion/cienciaEstado.component.vue';
</script>

<template>
  <InitDialogosGobiernoGestion />
  <main class="main-body">
    
    <div class="content-wrapper">
      <ArticulacionEstado />
      <CienciaEstado />
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

/* --- Adaptación para Móviles (Responsive) --- */
@media (max-width: 1024px) {
  .content-wrapper {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .main-body {
    padding: 20px 10px;
  }

  .content-wrapper {
    padding: 20px 15px;
    border-radius: 12px;
  }
}
</style>
