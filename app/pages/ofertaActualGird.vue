<script setup lang="ts">
import InitOfertaGird from '~/components/ofertaActualGird/initOfertaActualGird.component.vue';
import CienciaEnfocadaSoluciones from '~/components/ofertaActualGird/cienciaEnfocadaSoluciones.component.vue';
import LineasPrioritarias from '~/components/ofertaActualGird/lineasPrioritarias.component.vue';
import EstructuraOferta from '~/components/ofertaActualGird/estructuraOferta.component.vue';
import CasoExitoAlianza from '~/components/ofertaActualGird/casoExitoAlianzas.component.vue';
</script>

<template>
  <InitOfertaGird />
  <main class="main-body">
    
    <div class="content-wrapper">
      <CienciaEnfocadaSoluciones />
      <LineasPrioritarias />
      <EstructuraOferta />
      <CasoExitoAlianza />
      
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
