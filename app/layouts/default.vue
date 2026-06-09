<script setup lang="ts">
import FooterComponent from '~/components/footer.component.vue';
import AppShell from '~/components/app/AppShell.vue';
</script>

<template>
  <AppShell>
    <div class="site-layout">
      <header class="navbar-header">
        <div class="navbar-container">
          
          <div class="logo-area">
            <img src="/img.png" alt="RiesGIRD-ACC PERÚ" class="main-logo" />
          </div>

          <nav class="nav-menu">
            <NuxtLink to="/" class="nav-item" active-class="active-link">RED</NuxtLink>
            <NuxtLink to="/organizacion" class="nav-item" active-class="active-link">Organización</NuxtLink>
            <NuxtLink to="/redInvestigadores" class="nav-item" active-class="active-link">Líneas de acción</NuxtLink>
            <NuxtLink to="/materialesFormacion" class="nav-item" active-class="active-link">Materiales de Formación</NuxtLink>
            <NuxtLink to="/memoriasCongreso" class="nav-item" active-class="active-link">Memorias de Congreso</NuxtLink>
          </nav>

        </div>
      </header>
      
      <!-- Slot for page content -->
      <slot />

      <FooterComponent />
    </div>
  </AppShell>
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

/* Enlace Activo */
.active-link {
  color: #3b82f6; /* Color azul del enlace seleccionado */
  border-bottom: 2px solid #3b82f6; /* Línea inferior idéntica a tu captura */
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
}
</style>
