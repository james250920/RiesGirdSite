<script setup lang="ts">
import ImpactoTeritorio from '~/components/presenciaRed/impactoTeritorio.component.vue';
import InitPresenciaRed from '~/components/presenciaRed/initPresenciaRed.component.vue';
import LaboratorioTerritoriales from '~/components/presenciaRed/laboratorioTerritoriales.component.vue';
import LaboTerritorial from '~/components/presenciaRed/laboTerritorial.component.vue';
</script>

<template>
  <InitPresenciaRed />
  <main class="main-body">
    
    <div class="content-wrapper">
      <LaboratorioTerritoriales />
      <LaboTerritorial />
      <ImpactoTeritorio />
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
</style>
