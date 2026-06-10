<script setup lang="ts">
const universidades = [
  'Universidad Nacional Mayor de San Marcos',
  'Pontificia Universidad Católica del Perú',
  'Universidad Nacional de Ingeniería',
  'Universidad Nacional Agraria La Molina',
]
</script>

<template>
  <section class="estructura-section">

    <!-- Título -->
    <div class="titulo-wrapper">
      <h2 class="titulo">Estructura de la RiesGIRD-ACC/Perú</h2>
      <div class="titulo-barra">
        <span class="barra-roja" />
        <span class="barra-azul" />
      </div>
    </div>

    <!-- Diagrama superior: columna izquierda + columna derecha -->
    <div class="diagrama-top">

      <!-- Columna izquierda: jerarquía principal -->
      <div class="col-izquierda">
        <div class="nodo nodo-md">
          <p class="nodo-titulo">Asamblea de Rectores</p>
          <p class="nodo-sub">(Rectores de las universidades miembros)</p>
        </div>
        <div class="conector-v">
          <span class="linea-v" />
          <i class="ti ti-chevron-down flecha" aria-hidden="true" />
        </div>
        <div class="nodo nodo-md">
          <p class="nodo-titulo">Consejo Directivo</p>
          <p class="nodo-sub">(3 Rectores elegidos como plancha de Gestión)</p>
        </div>
        <div class="conector-v">
          <span class="linea-v" />
          <i class="ti ti-chevron-down flecha" aria-hidden="true" />
        </div>
        <div class="nodo nodo-md" id="sec-tecnica">
          <p class="nodo-titulo">Secretaría Técnica nacional</p>
          <p class="nodo-sub">(El secretario técnico del presidente de la Red)</p>
        </div>
      </div>

      <!-- Línea horizontal que une las dos columnas -->
      <div class="conector-h-wrapper">
        <div class="conector-h-linea" />
      </div>

      <!-- Columna derecha: órganos consultivos -->
      <div class="col-derecha">
        <div class="nodo nodo-sm nodo-dashed">
          <p class="nodo-titulo">Consejo Consultivo</p>
          <p class="nodo-sub">(Expertos)</p>
          <p class="nodo-titulo">(Comité Técnico Nacional)</p>
        </div>
        <div class="conector-v-sm">
          <span class="linea-v" />
        </div>
        <div class="nodo nodo-sm">
          <p class="nodo-titulo">Comité de fortalecimiento</p>
        </div>
        <div class="conector-v-sm">
          <span class="linea-v" />
        </div>
        <div class="nodo nodo-sm">
          <p class="nodo-titulo">Comité de ética e integridad</p>
        </div>
      </div>
    </div>

    <!-- Conector hacia la fila de universidades -->
    <div class="conector-bottom">
      <span class="linea-v-bottom" />
      <div class="linea-h-bottom" />
    </div>

    <!-- Fila de universidades -->
    <div class="universidades-grid">
      <div
        v-for="(uni, i) in universidades"
        :key="i"
        class="uni-col"
      >
        <!-- Línea vertical descendente desde la barra horizontal -->
        <div class="conector-desde-barra">
          <span class="linea-v" />
        </div>

        <div class="nodo nodo-uni">
          <p class="nodo-titulo">{{ uni }}</p>
        </div>
        <div class="conector-v-sm">
          <span class="linea-v" />
          <i class="ti ti-chevron-down flecha-sm" aria-hidden="true" />
        </div>
        <div class="nodo nodo-xs">
          <p class="nodo-titulo">Rector</p>
        </div>
        <div class="conector-v-sm">
          <span class="linea-v" />
          <i class="ti ti-chevron-down flecha-sm" aria-hidden="true" />
        </div>
        <div class="nodo nodo-xs">
          <p class="nodo-titulo">Secretario técnico designado</p>
        </div>
        <div class="conector-v-sm">
          <span class="linea-v" />
          <i class="ti ti-chevron-down flecha-sm" aria-hidden="true" />
        </div>
        <div class="nodo nodo-xs">
          <p class="nodo-titulo">Comité técnico inter áreas designados</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css');

.estructura-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;
  font-family: inherit;
  background: #f7f8fc;
  border-radius: 16px;
}

/* ── Título ── */
.titulo-wrapper {
  text-align: center;
  margin-bottom: 40px;
}

.titulo {
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
  display: inline-block;
  margin-bottom: 6px;
}

.titulo-barra {
  display: flex;
  height: 3px;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
}

.barra-roja {
  flex: 55;
  background: #D9043D;
}

.barra-azul {
  flex: 45;
  background: #254C9E;
}

/* ── Diagrama superior ── */
.diagrama-top {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  margin-bottom: 0;
}

/* Columna izquierda */
.col-izquierda {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  flex-shrink: 0;
}

/* Conector horizontal entre columnas */
.conector-h-wrapper {
  display: flex;
  align-items: flex-start;
  padding-top: 80px;
  width: 40px;
  flex-shrink: 0;
}

.conector-h-linea {
  width: 100%;
  height: 1.5px;
  background: #f4afc8;
}

/* Columna derecha */
.col-derecha {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  flex-shrink: 0;
  border: 1.5px dashed #D9043D;
  border-radius: 10px;
  padding: 12px;
  gap: 0;
}

/* ── Nodos ── */
.nodo {
  background: #fff;
  border-radius: 10px;
  border: 1.5px solid transparent;
  background-clip: padding-box;
  position: relative;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0,0,0,0.06);
}

/* Borde gradiente via outline trick */
.nodo::before {
  content: '';
  position: absolute;
  inset: -1.5px;
  border-radius: 11px;
  background: linear-gradient(to right, #D9043D, #254C9E);
  z-index: -1;
}

.nodo-dashed::before {
  background: none;
}
.nodo-dashed {
  border: 1.5px solid #D9043D;
  box-shadow: none;
}

.nodo-md {
  width: 240px;
  padding: 12px 16px;
}

.nodo-sm {
  width: 100%;
  padding: 10px 12px;
}

.nodo-xs {
  width: 160px;
  padding: 8px 10px;
}

.nodo-uni {
  width: 160px;
  padding: 10px 12px;
}

.nodo-titulo {
  font-size: 0.82rem;
  font-weight: 700;
  color: #111;
  margin: 0;
  line-height: 1.3;
}

.nodo-sub {
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
  margin: 4px 0 0;
  line-height: 1.3;
}

/* ── Conectores ── */
.conector-v {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  height: 40px;
}

.conector-v-sm {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 28px;
}

.linea-v {
  display: block;
  width: 1.5px;
  flex: 1;
  background: #f4afc8;
}

.flecha {
  font-size: 14px;
  color: #D9043D;
  line-height: 1;
}

.flecha-sm {
  font-size: 11px;
  color: #D9043D;
  line-height: 1;
}

/* ── Conector hacia universidades ── */
.conector-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
}

.linea-v-bottom {
  display: block;
  width: 1.5px;
  height: 24px;
  background: #f4afc8;
}

.linea-h-bottom {
  width: 76%;
  height: 1.5px;
  background: linear-gradient(to right, #f4afc8, #93c5fd);
}

/* ── Fila de universidades ── */
.universidades-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 0;
}

.uni-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.conector-desde-barra {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20px;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .universidades-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .linea-h-bottom {
    width: 66%;
  }
}

@media (max-width: 768px) {
  .diagrama-top {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .conector-h-wrapper {
    display: none;
  }

  .col-derecha {
    width: 280px;
    align-items: center;
  }
  
  .col-izquierda {
    width: 100%;
  }

  .universidades-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .linea-h-bottom {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .universidades-grid {
    grid-template-columns: 1fr;
  }
  
  .linea-h-bottom {
    display: none;
  }
  
  .conector-desde-barra {
    display: none;
  }
  
  .conector-bottom {
    margin-bottom: 20px;
  }
}
</style>