<script setup lang="ts">
import InitProcesoMembresia from '~/components/procesoMembresia/initProcesoMembresia.component.vue'
import CertificadoMembresia from '~/components/procesoMembresia/certificadoMembresia.component.vue'
import FasesProceso from '~/components/procesoMembresia/fasesProcesos.component.vue'
</script>

<template>
  <InitProcesoMembresia />

  <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 space-y-12 py-10">

    <div class="content-wrapper">
        <FasesProceso />
      
    </div>
    <div class="content-wrapper">
      <CertificadoMembresia />
    </div>

  </div>
</template>

<style scoped>
.balance-text {
  text-wrap: balance;
}

.content-wrapper {
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

/* Ajustes para pantallas pequeñas y móviles */
@media (max-width: 1024px) {
  .two-column-layout {
    flex-direction: column;
  }

  .right-column {
    width: 100%;
    position: static;
  }
  
  .content-wrapper {
    padding: 20px; /* Menos padding en móvil para aprovechar espacio */
  }
}
</style>