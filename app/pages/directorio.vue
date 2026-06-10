<script setup lang="ts">
import initDirectorio from '~/components/directorio/initDirectorio.component.vue';
import MiembrosDirectorio from '~/components/directorio/miembrosDirectorio.component.vue';



</script>

<template>
  <initDirectorio />

  <main class="main-body">
    
    <div class="content-wrapper">
      <MiembrosDirectorio />
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