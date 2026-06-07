<script setup lang="ts">
import QuienesSomos from '~/components/landing/quienesSomos.component.vue'
import MisionVision from '~/components/landing/misionVision.component.vue'
import NuestrosObjetivos from '~/components/landing/nuestrosObjetivos.component.vue';
import LineamientosComponent from '~/components/landing/lineamientos.component.vue';
import EventosNoticiasComponent from '~/components/landing/eventosNoticias.component.vue';
import AliadosComponent from '~/components/landing/aliados.component.vue';
import DirectorioComponent from '~/components/landing/directorio.component.vue';
import BannerCallToActionComponent from '~/components/landing/bannerCallToAction.component.vue';
import InitBannerComponent from '~/components/landing/initBanner.component.vue';
import ModuloComponent from '~/components/landing/modulo.component.vue';
</script>

<template>
  <div>
    <InitBannerComponent />
    <ModuloComponent />
    <BannerCallToActionComponent />
    <main class="main-body">
      <div class="content-wrapper">
        <QuienesSomos />
        <MisionVision />
        <NuestrosObjetivos />
        <LineamientosComponent />
        <EventosNoticiasComponent />
        <AliadosComponent />
        <DirectorioComponent />
      </div>
    </main>
    <BannerCallToActionComponent />
  </div>
</template>

<style scoped>
/* --- El Cuerpo Blanco del Sitio --- */
.main-body {
  flex: 1;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

/* Contenedor central blanco donde vivirán tus secciones */
.content-wrapper {
  width: 100%;
  max-width: 1100px;
  background-color: #ffffff; /* El fondo blanco solicitado */
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

/* --- Adaptación para Móviles (Responsive) --- */
@media (max-width: 992px) {
  .content-wrapper {
    padding: 20px;
  }
}
</style>
