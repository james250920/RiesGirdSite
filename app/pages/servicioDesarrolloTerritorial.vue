<script setup lang="ts">
import InitServicioDesarrollo from '~/components/servicioDesarrolloTerritorial/initServicioDesarrollo.component.vue';
import CienciaServicio from '~/components/servicioDesarrolloTerritorial/cienciaServicio.component.vue';
import LineasInvestigacion from '~/components/servicioDesarrolloTerritorial/lineasInvestigacion.component.vue';
</script>

<template>
  <InitServicioDesarrollo />
  <main class="main-body">
    
    <div class="content-wrapper">
      <CienciaServicio />
      <LineasInvestigacion />
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
