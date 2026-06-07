<script setup lang="ts">
import QuienesSomos from '~/components/landing/quienesSomos.component.vue'
import MisionVision from '@/components/landing/misionVision.component.vue'
import NuestrosObjetivos from './landing/nuestrosObjetivos.component.vue';
import LineamientosComponent from './landing/lineamientos.component.vue';
import EventosNoticiasComponent from './landing/eventosNoticias.component.vue';
import AliadosComponent from './landing/aliados.component.vue';
import DirectorioComponent from './landing/directorio.component.vue';
import BannerCallToActionComponent from './landing/bannerCallToAction.component.vue';
import FooterComponent from './footer.component.vue';
import InitBannerComponent from './landing/initBanner.component.vue';
import ModuloComponent from './landing/modulo.component.vue';
</script>

<template>
  <div class="site-layout">
    <header class="navbar-header">
      <div class="navbar-container">
        
        <div class="logo-area">
          <img src="\img.png" alt="RiesGIRD-ACC PERÚ" class="main-logo" />
        </div>

        <nav class="nav-menu">
          <NuxtLink to="/" class="nav-item active-link">RED</NuxtLink>
          <NuxtLink to="/" class="nav-item">Organización</NuxtLink>
          <NuxtLink to="/" class="nav-item">Líneas de acción</NuxtLink>
          <NuxtLink to="/" class="nav-item">Eventos y noticias</NuxtLink>
          <NuxtLink to="/" class="nav-item">Documentos e investigaciones</NuxtLink>
        </nav>

      </div>
    </header>
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
  <FooterComponent />
</template>

<style scoped>
/* Configuración Base del Layout */
.site-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f7fc; /* Fondo general sutil del sitio */
}

/* Estilos de la Barra de Navegación (Header) */
.navbar-header {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 15px 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Área del Logo */
.logo-area {
  display: flex;
  align-items: center;
}

.main-logo {
  height: 55px; /* Ajusta el tamaño de tu logo */
  width: auto;
  object-fit: contain;
}

/* Elementos del Menú de Navegación */
.nav-menu {
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-item {
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: #737373; /* Gris de los links inactivos */
  transition: color 0.2s ease;
  padding-bottom: 4px;
}

.nav-item:hover {
  color: #3b82f6;
}

/* Enlace Activo ("RED" en tu imagen) */
.active-link {
  color: #3b82f6; /* Color azul del enlace seleccionado */
  border-bottom: 2px solid #3b82f6; /* Línea inferior idéntica a tu captura */
}

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
  .navbar-container {
    flex-direction: column;
    gap: 15px;
  }
  
  .nav-menu {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .content-wrapper {
    padding: 20px;
  }
}
</style>