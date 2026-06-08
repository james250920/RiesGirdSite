<script setup lang="ts">
import InitInvestigacdor  from '~/components/investigadores/initInvestigadores.component.vue';
import CienciaExtremoExtremo from '~/components/investigadores/cienciaExtremoExtremo.component.vue';
import QueHacemosRedInvestigadores from '~/components/investigadores/queHacemosRedInvestigadores.component.vue';
import EncuentraEspecialista from '~/components/investigadores/encuentraEspecialista.component.vue';
</script>

<template>
  <InitInvestigacdor />
  <main class="main-body">
    
    <div class="content-wrapper">
      <CienciaExtremoExtremo />
      <QueHacemosRedInvestigadores />
      <EncuentraEspecialista />
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
