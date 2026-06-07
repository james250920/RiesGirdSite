<script setup lang="ts">
import InitOrganizacion from '@/components/organizacion/initOrganizacion.component.vue';

</script>

import { defineComponent } from 'vue';
import InitOrganizacion from '@/components/organizacion/initOrganizacion.component.vue';

<template>
  <InitOrganizacion />
  <main class="main-body">
    <div class="content-wrapper">
      <h1 class="text-3xl font-bold text-blue-600 mb-6">Nuestra Organización</h1>
      <p class="text-gray-700 leading-relaxed">
        Aquí se mostrará la información sobre la organización de RiesGIRD-ACC PERÚ.
      </p>
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
