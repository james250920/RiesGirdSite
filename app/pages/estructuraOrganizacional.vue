<script setup lang="ts">
import InitEstructuraOrganizacional from '~/components/estructuraOrganizacional/initEstructuraOrganizacional.component.vue';
import AsambleaGeneral from '~/components/estructuraOrganizacional/asambleasGenerales.component.vue';
import EstructuraRiesGird from '~/components/estructuraOrganizacional/estructuraRiesGird.component.vue';
import AsambleaRectores from '~/components/estructuraOrganizacional/asambleaRectores.component.vue';
import ConsejoDirectivo from '~/components/estructuraOrganizacional/consejoDirectivo.component.vue';
import SecretariaTecnica from '~/components/estructuraOrganizacional/secretariaTecnica.component.vue';
import Directorio from '~/components/estructuraOrganizacional/directorio.component.vue';
import DirectorioMiembros from '~/components/estructuraOrganizacional/directorioMiembros.component.vue';
import BusquedaAliados from '~/components/estructuraOrganizacional/busquedaAliado.component.vue';
import Estatutos from '~/components/estructuraOrganizacional/estatuto.component.vue';
</script>

<template>
  <InitEstructuraOrganizacional />

  <div class="w-full max-w-[1200px] mx-auto px-4 md:px-8 space-y-12 py-10">

    <div class="content-wrapper">
      <AsambleaGeneral />
      <br />
      <EstructuraRiesGird />
      <br />
      <AsambleaRectores />
    </div>

    <div class="content-wrapper ">
      <ConsejoDirectivo />
      <br />
      <SecretariaTecnica />
      <Directorio />
      <DirectorioMiembros />
      <BusquedaAliados />
    </div>
    <div class="content-wrapper">
      <Estatutos />
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