<template>
  <div class="directorio">
    <div class="directorio__header">
      <h1 class="directorio__titulo">Busca su Autoridad</h1>
    </div>

    <div class="directorio__filtros">
      <div
        v-for="filtro in filtros"
        :key="filtro.key"
        class="filtro-select"
        :class="{ 'filtro-select--active': filtroActivo === filtro.key }"
        @click="toggleFiltro(filtro.key)"
      >
        <span class="filtro-select__label">{{ filtro.label }}</span>
        <svg class="filtro-select__icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <div class="directorio__grid">
      <div
        v-for="autoridad in autoridadesFiltradas"
        :key="autoridad.id"
        class="tarjeta"
        @click="abrirModal(autoridad)"
      >
        <div class="tarjeta__foto-wrap">
          <img
            :src="autoridad.foto"
            :alt="autoridad.nombre"
            class="tarjeta__foto"
            @error="onImgError"
          />
          <div v-if="autoridad.logo" class="tarjeta__logo-wrap">
            <img :src="autoridad.logo" :alt="autoridad.universidad" class="tarjeta__logo" />
          </div>
        </div>

        <div class="tarjeta__info">
          <span class="tarjeta__cargo">{{ autoridad.cargo }} {{ autoridad.siglas }}</span>
          <h3 class="tarjeta__nombre">{{ autoridad.nombre }}</h3>
          <div class="tarjeta__contacto">
            <div v-if="autoridad.email" class="tarjeta__contacto-item">
              <svg viewBox="0 0 20 20" fill="currentColor" class="tarjeta__icon">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
              <a :href="`mailto:${autoridad.email}`" class="tarjeta__link" @click.stop>{{ autoridad.email }}</a>
            </div>
            <div v-if="autoridad.telefono" class="tarjeta__contacto-item">
              <svg viewBox="0 0 20 20" fill="currentColor" class="tarjeta__icon">
                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 16.352V17.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
              </svg>
              <span class="tarjeta__telefono">{{ autoridad.telefono }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <ModalAutoridad
        v-if="modalAbierto"
        :autoridad="autoridadSeleccionada"
        @close="cerrarModal"
      />
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ModalAutoridad from './ModalAutoridad.vue'

const filtros = [
  { key: 'universidad', label: 'Universidad' },
  { key: 'rector', label: 'Rector' },
  { key: 'vicerrector_academico', label: 'Vicerrector Académico' },
  { key: 'vicerrector_investigacion', label: 'Vicerrector de Investigación' },
  { key: 'director_general', label: 'Director General de Administración' },
  { key: 'secretaria_tecnica', label: 'Secretaría Técnica' },
  { key: 'consejo_directivo', label: 'Consejo Directivo' },
  { key: 'comite_tecnico', label: 'Comité Técnico Interáreas' },
]

const filtroActivo = ref(null)

function toggleFiltro(key) {
  filtroActivo.value = filtroActivo.value === key ? null : key
}

const autoridades = ref([
  { id: 1, cargo: 'Rector', siglas: 'UPT', nombre: 'Hugo Cirilo Calizaya Calizaya', email: 'rectorado@upt.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=51', logo: 'https://ui-avatars.com/api/?name=UPT&background=1a3a6e&color=fff', tipo: 'rector' },
  { id: 2, cargo: 'Rectora', siglas: 'UNTELE', nombre: 'Gladys Marcionila Cruz Yupanqui', email: 'rectorado@untels.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=47', logo: null, tipo: 'rector' },
  { id: 3, cargo: 'Rector', siglas: 'UNJ', nombre: 'Edgardo Leoncio Braul Gomero', email: 'rectorado@unj.edu.pe', telefono: '939 750 641', foto: 'https://i.pravatar.cc/150?img=52', logo: null, tipo: 'rector' },
  { id: 4, cargo: 'Rector', siglas: 'UNY', nombre: 'Enrique Edison Benites Juárez', email: 'rectorado@unyauyos.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=53', logo: null, tipo: 'rector' },
  { id: 5, cargo: 'Rector', siglas: 'UNSCH', nombre: 'Emilio German Ramírez Roca', email: 'rectorado@unsch.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=54', logo: null, tipo: 'rector' },
  { id: 6, cargo: 'Rector', siglas: 'UNSAAC', nombre: 'Eleazar Crucinta Ugarte', email: 'rectorado@unsaac.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=55', logo: null, tipo: 'rector' },
  { id: 7, cargo: 'Rector', siglas: 'UNSA', nombre: 'Hugo José Rojas Flores', email: 'hroja@unsa.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=56', logo: null, tipo: 'rector' },
  { id: 8, cargo: 'Rector', siglas: 'UNP', nombre: 'Enrique Ramiro Cáceres Florián', email: 'rectorado@unp.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=57', logo: null, tipo: 'rector' },
  { id: 9, cargo: 'Rectora', siglas: 'UNMSM', nombre: 'Jeri Gloria Ramon Ruffner de Vega', email: 'jramon@unmsm.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=48', logo: null, tipo: 'rector' },
  { id: 10, cargo: 'Rectora', siglas: 'UNJU-JCA', nombre: 'Vilma Sarmiento Mamani', email: 'rectorado@unju.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=49', logo: null, tipo: 'rector' },
  { id: 11, cargo: 'Rector', siglas: 'UNUBG', nombre: 'Javier Lozano Marreros', email: 'rectorado@unubg.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=58', logo: null, tipo: 'rector' },
  { id: 12, cargo: 'Rector', siglas: 'UNAEN', nombre: 'Severino Apolinar Risco Zapata', email: 'rectorado@unaen.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=59', logo: null, tipo: 'rector' },
  { id: 13, cargo: 'Rector', siglas: 'UNETRU', nombre: 'Hermes Natividad Sifuentes Inostroza', email: 'rectorado@unetru.edu.pe', telefono: null, foto: 'https://i.pravatar.cc/150?img=60', logo: null, tipo: 'rector' },
  { id: 14, cargo: 'Rector', siglas: 'USAL', nombre: 'Arturo Talledo Coronado', email: 'rector@usal.edu.pe', telefono: '(074)1440', foto: 'https://i.pravatar.cc/150?img=61', logo: null, tipo: 'rector' },
  { id: 15, cargo: 'Rector', siglas: 'UNHEVAL', nombre: 'Guillermo Augusto Bocangel Weydert', email: 'rectorado@unheval.edu.pe', telefono: '(62)7udhu', foto: 'https://i.pravatar.cc/150?img=62', logo: null, tipo: 'rector' },
  { id: 16, cargo: 'Rector', siglas: 'UNH', nombre: 'Edgardo Félix Palomino Torres', email: 'rectorado@unh.edu.pe', telefono: '(67)2dgfuti', foto: 'https://i.pravatar.cc/150?img=63', logo: null, tipo: 'rector' },
])

const autoridadesFiltradas = computed(() => {
  if (!filtroActivo.value || filtroActivo.value === 'rector' || filtroActivo.value === 'universidad') {
    return autoridades.value
  }
  return autoridades.value.filter(a => a.tipo === filtroActivo.value)
})

// Lógica de apertura/cierre modal
const modalAbierto = ref(false)
const autoridadSeleccionada = ref(null)

function abrirModal(autoridad) {
  autoridadSeleccionada.value = { ...autoridad }
  modalAbierto.value = true
  document.body.style.overflow = 'hidden'
}

function cerrarModal() {
  modalAbierto.value = false
  autoridadSeleccionada.value = null
  document.body.style.overflow = ''
}

function onImgError(e) {
  e.target.src = 'https://ui-avatars.com/api/?background=dce3ef&color=3a5490&size=128'
}
</script>

<style scoped>
.directorio {
  --azul: #1a3a6e;
  --azul-claro: #2b4775;
  --borde: #cbd5e1;
  --fondo: #ffffff; /* Fondo gris claro ideal para destacar los elementos blancos */
  --texto: #0f172a;
  --gris: #475569;
  --blanco: #ffffff;
  --radio: 12px;
  --sombra: 0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.05);

  font-family: 'Inter', system-ui, sans-serif;
  background: var(--fondo);
  min-height: 100vh;
  padding: 40px 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.directorio__header {
  text-align: center;
  margin-bottom: 32px;
}

.directorio__titulo {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--texto);
  letter-spacing: -0.02em;
  display: inline-block;
  position: relative;
  padding-bottom: 8px;
}

.directorio__titulo::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  height: 3px;
  background-color: var(--azul);
  border-radius: 2px;
}

.directorio__filtros {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 32px;
}

.filtro-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 10px 14px;
  background: var(--blanco);
  border: 1.5px solid var(--borde);
  border-radius: var(--radio);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  color: var(--texto);
  font-weight: 600;
  user-select: none;
}

.filtro-select:hover {
  border-color: var(--azul-claro);
  background-color: #f8fafc;
}

.filtro-select--active {
  border-color: var(--azul);
  background: #e0f2fe;
  color: var(--azul);
}

.filtro-select__label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.filtro-select__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--gris);
}

.directorio__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .directorio {
    padding: 32px 20px;
  }
  .directorio__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .directorio__filtros {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .directorio__filtros {
    grid-template-columns: repeat(2, 1fr);
  }
  .directorio__grid {
    grid-template-columns: 1fr;
  }
  .directorio__titulo {
    font-size: 1.5rem;
  }
}

@media (max-width: 640px) {
  .directorio__filtros {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 440px) {
  .directorio__filtros {
    grid-template-columns: 1fr;
  }
}
</style>