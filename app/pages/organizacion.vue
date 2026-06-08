<script setup lang="ts">
import InitOrganizacion from '@/components/organizacion/initOrganizacion.component.vue';
import RedInteruniversitaria from '@/components/organizacion/redInteruniversitaria.component.vue';
import NuestraNaturaleza from '@/components/organizacion/nuestraNaturaleza.component.vue';
import EjesAccion from '@/components/organizacion/ejesAccion.component.vue';
import CtaCallToAction from '@/components/organizacion/ctaCallToAction.component.vue';
import FuerzaAcademicaComponent from '~/components/organizacion/fuerzaAcademica.component.vue';
import NuestraIdentidad from '~/components/organizacion/nuestraIdentidad.component.vue';
import QueNosCaracteriza from '~/components/organizacion/QueNosCaracteriza.component.vue';
import CtaCallToAction2 from '~/components/organizacion/ctaCallToAction2.component.vue';
import PropositoComponent from '~/components/organizacion/proposito.component.vue';
import NuestrosObjetivosOrg from '~/components/organizacion/nuestrosObjetivosOrg.component.vue';
import CtaCallToAction3 from '~/components/organizacion/ctaCallToAction3.component.vue';
import CompromisoComponent from '~/components/organizacion/compromiso.component.vue';
import { C } from 'vue-router/dist/index-BQLwgiyK.js';
</script>

<template>
  <InitOrganizacion />
  <main class="main-body">
    
    <div class="content-wrapper">
      <RedInteruniversitaria />
      <NuestraNaturaleza />
      <EjesAccion />
      <CtaCallToAction />
      <FuerzaAcademicaComponent />
      <NuestraIdentidad />
      <QueNosCaracteriza />
      <CtaCallToAction2 />
      <PropositoComponent />
      <NuestrosObjetivosOrg />
      <br />
      <CtaCallToAction3 />
      <CompromisoComponent />
      
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
