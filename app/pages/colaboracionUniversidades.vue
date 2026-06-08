<script setup lang="ts">
import InitColaboracionUniversidades from '~/components/colaboracionUniversidades/initColaboracionUniversidades.component.vue';
import FuertePreparado from '~/components/colaboracionUniversidades/fuertePreparado.component.vue';
import ComoColaboramos from '~/components/colaboracionUniversidades/comoColaboramos.component.vue';
</script>

<template>
  <InitColaboracionUniversidades />
  <main class="main-body">
    
    <div class="content-wrapper">
      <FuertePreparado />
      <ComoColaboramos />
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
