<script setup lang="ts">
import initUniversidades from '~/components/universidades/initUniversidades.component.vue';
import MiembrosUniversidades from '~/components/universidades/miembrosUniversidades.component.vue';



</script>

<template>
  <initUniversidades />

  <main class="main-body">
    
    <div class="content-wrapper">
      <MiembrosUniversidades />
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