<script setup lang="ts">
interface Aliado {
  id: number
  categoria: string
  nombre: string
  email: string
  telefono: string
  logo: string
}

const categorias = [
  { label: 'Empresa',      value: 'empresa',      activo: false },
  { label: 'Institución',  value: 'institucion',  activo: false },
  { label: 'Cooperación',  value: 'cooperacion',  activo: false },
  { label: 'ETC',          value: 'etc',          activo: false },
]

const categoriaActiva = ref<string | null>(null)

const aliados: Aliado[] = [
  {
    id: 1,
    categoria: 'Empresa',
    nombre: 'Pacífico Seguros',
    email: 'rectorado@upl.edu.pe',
    telefono: '—',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Pac%C3%ADfico_Seguros_logo.svg/320px-Pac%C3%ADfico_Seguros_logo.svg.png',
  },
  {
    id: 2,
    categoria: 'Cooperación',
    nombre: 'RiesGird - ACC',
    email: 'rectorado@untels.edu.pe',
    telefono: '905452095',
    logo: 'https://riesgird.org/logo.png',
  },
  {
    id: 3,
    categoria: 'Institución',
    nombre: 'Colegio de Ingenieros del Perú',
    email: 'rectorado@unjuu.edu.pe',
    telefono: '936 759 046',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Colegio_de_Ingenieros_del_Per%C3%BA.svg/200px-Colegio_de_Ingenieros_del_Per%C3%BA.svg.png',
  },
  {
    id: 4,
    categoria: 'Institución',
    nombre: 'BID Mejorando Vidas',
    email: 'rectorado@untumbes.edu.pe',
    telefono: '—',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Logo_BID_%28Inter-American_Development_Bank%29.svg/320px-Logo_BID_%28Inter-American_Development_Bank%29.svg.png',
  },
]

const aliadosFiltrados = computed(() => {
  if (!categoriaActiva.value) return aliados
  return aliados.filter(
    a => a.categoria.toLowerCase() === categoriaActiva.value
  )
})

function toggleCategoria(value: string) {
  categoriaActiva.value = categoriaActiva.value === value ? null : value
}
</script>

<template>
  <section class="aliados-section">

    <!-- Título -->
    <div class="header">
      <h2 class="titulo">Busca su Aliado</h2>
      <div class="titulo-barra">
        <span class="barra-roja" />
        <span class="barra-azul" />
      </div>
    </div>

    <!-- Filtros -->
    <div class="filtros">
      <button
        v-for="cat in categorias"
        :key="cat.value"
        class="filtro-btn"
        :class="{ activo: categoriaActiva === cat.value, gris: cat.value === 'cooperacion' || cat.value === 'etc' }"
        @click="toggleCategoria(cat.value)"
      >
        <span class="filtro-label">{{ cat.label }}</span>
        <span class="filtro-divider" />
        <span class="filtro-arrow">
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
    </div>

    <!-- Grid de aliados -->
    <div class="aliados-grid">
      <div
        v-for="aliado in aliadosFiltrados"
        :key="aliado.id"
        class="aliado-card"
      >
        <!-- Logo -->
        <div class="card-logo">
          <img
            :src="aliado.logo"
            :alt="aliado.nombre"
            class="logo-img"
            @error="($event.target as HTMLImageElement).style.display = 'none'"
          />
        </div>

        <!-- Divisor vertical -->
        <span class="card-divider" />

        <!-- Info -->
        <div class="card-info">
          <span class="card-categoria">{{ aliado.categoria }}</span>
          <p class="card-nombre">{{ aliado.nombre }}</p>
          <div class="card-contacto">
            <span class="contacto-item">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" width="13" height="13" stroke-width="1.5">
                <path d="M2.5 6.5A1.5 1.5 0 014 5h12a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 0116 15H4a1.5 1.5 0 01-1.5-1.5v-7z"/>
                <path d="M2.5 7l7.5 5 7.5-5" stroke-linecap="round"/>
              </svg>
              {{ aliado.email }}
            </span>
            <span class="contacto-item">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" width="13" height="13" stroke-width="1.5">
                <path d="M3 4.5A1.5 1.5 0 014.5 3h1.379a.5.5 0 01.473.337l1.258 3.517a.5.5 0 01-.114.527L6.09 8.787a9.018 9.018 0 004.124 4.124l1.406-1.406a.5.5 0 01.527-.114l3.517 1.258a.5.5 0 01.336.473V15.5a1.5 1.5 0 01-1.5 1.5C7.163 17 3 12.837 3 7.5v-3z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ aliado.telefono }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Sin resultados -->
    <div v-if="aliadosFiltrados.length === 0" class="sin-resultados">
      <p>No se encontraron aliados para esta categoría.</p>
    </div>

  </section>
</template>

<style scoped>
.aliados-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px;
  font-family: inherit;
}

/* ── Header ── */
.header {
  text-align: center;
  margin-bottom: 32px;
}

.titulo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
  display: inline-block;
  margin-bottom: 6px;
  text-decoration: underline;
  text-decoration-color: transparent;
}

.titulo-barra {
  display: flex;
  height: 3px;
  width: 220px;
  margin: 0 auto;
}

.barra-roja { flex: 55; background: #D9043D; }
.barra-azul { flex: 45; background: #254C9E; }

/* ── Filtros ── */
.filtros {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.filtro-btn {
  display: flex;
  align-items: stretch;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  padding: 0;
  overflow: hidden;
  min-width: 140px;
  transition: box-shadow 0.2s;
}

.filtro-btn:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Botones grises (Cooperación, ETC) */
.filtro-btn.gris {
  background: #f0f0f0;
}

.filtro-btn.gris .filtro-label {
  color: #666;
}

.filtro-label {
  flex: 1;
  padding: 10px 14px;
  font-size: 0.82rem;
  color: #333;
  text-align: center;
  line-height: 1.3;
}

.filtro-divider {
  width: 1px;
  background: #D9043D;
  align-self: stretch;
}

.filtro-btn.activo .filtro-divider {
  background: #254C9E;
}

.filtro-btn.gris .filtro-divider {
  background: #aaa;
}

.filtro-arrow {
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #D9043D;
}

.filtro-btn.activo .filtro-arrow {
  color: #254C9E;
}

.filtro-btn.gris .filtro-arrow {
  color: #888;
}

/* ── Grid ── */
.aliados-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .aliados-grid {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .aliados-grid { 
    grid-template-columns: 1fr; 
  }
  
  .aliados-section {
    padding: 32px 16px;
  }
  
  .titulo {
    font-size: 1.5rem;
  }
}

/* ── Card ── */
.aliado-card {
  display: flex;
  align-items: stretch;
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
  min-height: 110px;
}

@media (max-width: 480px) {
  .aliado-card {
    flex-direction: column;
  }
  
  .card-logo {
    width: 100% !important;
    min-width: unset !important;
    padding: 20px !important;
  }
  
  .card-divider {
    width: 100% !important;
    height: 1px !important;
  }
}

.aliado-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

/* Logo */
.card-logo {
  width: 120px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: #fafafa;
  flex-shrink: 0;
}

.logo-img {
  max-width: 80px;
  max-height: 70px;
  object-fit: contain;
  filter: grayscale(100%);
}

/* Divisor */
.card-divider {
  width: 1px;
  background: #e0e0e0;
  align-self: stretch;
  flex-shrink: 0;
}

/* Info */
.card-info {
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  flex: 1;
}

.card-categoria {
  font-size: 0.7rem;
  color: #888;
  text-decoration: underline;
  letter-spacing: 0.02em;
}

.card-nombre {
  font-size: 0.95rem;
  font-weight: 700;
  color: #111;
  line-height: 1.3;
  margin: 0;
}

.card-contacto {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 4px;
}

.contacto-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  color: #555;
}

.contacto-item svg {
  flex-shrink: 0;
  color: #888;
}

/* Sin resultados */
.sin-resultados {
  text-align: center;
  padding: 40px;
  color: #888;
  font-size: 0.9rem;
}
</style>