<template>
  <div class="directorio">
    <div class="directorio__header">
      <h1 class="directorio__titulo">Busca su Universidad</h1>
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
        v-for="universidad in universidadesFiltradas"
        :key="universidad.id"
        class="tarjeta"
        @click="abrirModal(universidad)"
      >
        <div class="tarjeta__logo-wrap">
          <img
            :src="universidad.logo"
            :alt="universidad.nombre"
            class="tarjeta__logo"
            @error="onImgError"
          />
        </div>
        <div class="tarjeta__divider" />
        <div class="tarjeta__info">
          <span class="tarjeta__prefijo">{{ universidad.prefijo }}</span>
          <strong class="tarjeta__nombre">{{ universidad.nombre }}</strong>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <ModalAutoridad
        v-if="modalAbierto"
        :autoridad="universidadSeleccionada"
        @close="cerrarModal"
      />
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ModalAutoridad from '~/components/universidades/ModalAutoridad.vue'

const filtros = [
  { key: 'universidad', label: 'Universidad' },
  { key: 'rector', label: 'Rector' },
  { key: 'vicerrector_academico', label: 'Vicerrector Académico' },
  { key: 'vicerrector_investigacion', label: 'Vicerrector de Investigación' },
]

const filtroActivo = ref(null)
function toggleFiltro(key) {
  filtroActivo.value = filtroActivo.value === key ? null : key
}

// Datos de las Universidades (Se añadieron campos ficticios de "rector" para alimentar el modal al hacer click)
const universidades = ref([
  { id: 1, prefijo: 'Universidad Nacional', nombre: 'San Cristóbal de Huamanga', siglas: 'UNSCH', rector: 'Emilio German Ramírez Roca', foto: 'https://i.pravatar.cc/150?img=54', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Escudo_UNSCH.png/200px-Escudo_UNSCH.png' },
  { id: 2, prefijo: 'Universidad Nacional', nombre: 'De Ucayali', siglas: 'UNU', rector: 'Javier Lozano Marreros', foto: 'https://i.pravatar.cc/150?img=58', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Escudo_UNU.png/200px-Escudo_UNU.png' },
  { id: 3, prefijo: 'Universidad Nacional', nombre: 'Tecnológica de Lima Sur', siglas: 'UNTELS', rector: 'Gladys Marcionila Cruz Yupanqui', foto: 'https://i.pravatar.cc/150?img=47', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Logo_UNTELS.png/200px-Logo_UNTELS.png' },
  { id: 4, prefijo: 'Universidad Nacional', nombre: 'De Tumbes', siglas: 'UNT', rector: 'Carlos Cánepa La Cotera', foto: 'https://i.pravatar.cc/150?img=12', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Escudo_UNT_Tumbes.png/200px-Escudo_UNT_Tumbes.png' },
  { id: 5, prefijo: 'Universidad Nacional', nombre: 'San Cristóbal de Huamanga', siglas: 'UNSCH', rector: 'Emilio German Ramírez Roca', foto: 'https://i.pravatar.cc/150?img=54', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Escudo_UNSCH.png/200px-Escudo_UNSCH.png' },
  { id: 6, prefijo: 'Universidad Nacional', nombre: 'San Antonio Abad del Cuzco', siglas: 'UNSAAC', rector: 'Eleazar Crucinta Ugarte', foto: 'https://i.pravatar.cc/150?img=55', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/UNSAAC_logo.png/200px-UNSAAC_logo.png' },
  { id: 7, prefijo: 'Universidad Nacional', nombre: 'Hermilio Valdizán', siglas: 'UNHEVAL', rector: 'Guillermo Augusto Bocangel Weydert', foto: 'https://i.pravatar.cc/150?img=62', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/UNHEVAL_logo.png/200px-UNHEVAL_logo.png' },
  { id: 8, prefijo: 'Universidad Nacional', nombre: 'De Piura', siglas: 'UNP', rector: 'Enrique Ramiro Cáceres Florián', foto: 'https://i.pravatar.cc/150?img=57', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Escudo_UNP.png/200px-Escudo_UNP.png' },
  { id: 9, prefijo: 'Universidad Nacional', nombre: 'Mayor de San Marcos', siglas: 'UNMSM', rector: 'Jeri Gloria Ramon Ruffner de Vega', foto: 'https://i.pravatar.cc/150?img=48', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/UNMSM_coat.svg/200px-UNMSM_coat.svg.png' },
  { id: 10, prefijo: 'Universidad Nacional', nombre: 'De Juliaca', siglas: 'UNAJ', rector: 'Freddy Martín Marrero Saucedo', foto: 'https://i.pravatar.cc/150?img=22', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Logo_UNAJ.png/200px-Logo_UNAJ.png' },
  { id: 11, prefijo: 'Universidad Nacional', nombre: 'Jorge Basadre Grohman', siglas: 'UNJBG', rector: 'Hugo Flores Aybar', foto: 'https://i.pravatar.cc/150?img=33', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_UNJBG.png/200px-Logo_UNJBG.png' },
  { id: 12, prefijo: 'Universidad Nacional', nombre: 'De Jaén', siglas: 'UNJ', rector: 'Edgardo Leoncio Braul Gomero', foto: 'https://i.pravatar.cc/150?img=52', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_UNJ.png/200px-Logo_UNJ.png' },
  { id: 13, prefijo: 'Universidad Nacional', nombre: 'De Trujillo', siglas: 'UNT', rector: 'Carlos Vasquez Boyer', foto: 'https://i.pravatar.cc/150?img=60', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Escudo_UNT.png/200px-Escudo_UNT.png' },
  { id: 14, prefijo: 'Universidad Nacional', nombre: 'De Ingeniería', siglas: 'UNI', rector: 'Alfonso López Chau', foto: 'https://i.pravatar.cc/150?img=29', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/UNI_escudo.svg/200px-UNI_escudo.svg.png' },
  { id: 15, prefijo: 'Universidad Nacional', nombre: 'Hermilio Valdizán', siglas: 'UNHEVAL', rector: 'Guillermo Augusto Bocangel Weydert', foto: 'https://i.pravatar.cc/150?img=62', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/UNHEVAL_logo.png/200px-UNHEVAL_logo.png' },
  { id: 16, prefijo: 'Universidad Nacional', nombre: 'De Huancavelica', siglas: 'UNH', rector: 'Edgardo Félix Palomino Torres', foto: 'https://i.pravatar.cc/150?img=63', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Escudo_UNH.png/200px-Escudo_UNH.png' },
  { id: 17, prefijo: 'Universidad Nacional', nombre: 'Del Centro del Perú', siglas: 'UNCP', rector: 'Amador Vilcatoma Sánchez', foto: 'https://i.pravatar.cc/150?img=36', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Logo_UNCP.png/200px-Logo_UNCP.png' },
  { id: 18, prefijo: 'Universidad Nacional', nombre: 'De Cañete', siglas: 'UNDC', rector: 'Arnulfo Ortega Mallqui', foto: 'https://i.pravatar.cc/150?img=39', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_UNDC.png/200px-Logo_UNDC.png' },
  { id: 19, prefijo: 'Universidad Nacional', nombre: 'De Barranca', siglas: 'UNAB', rector: 'Inés Sifuentes Juan de Dios', foto: 'https://i.pravatar.cc/150?img=43', logo: 'https://i.pravatar.cc/80?img=11' },
  { id: 20, prefijo: 'Universidad Nacional', nombre: 'Santiago Antúnez de Mayolo', siglas: 'UNASAM', rector: 'Carlos Reyes Pareja', foto: 'https://i.pravatar.cc/150?img=41', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Logo_UNASAM.png/200px-Logo_UNASAM.png' },
  { id: 21, prefijo: 'Universidad Nacional', nombre: 'Agraria La Molina', siglas: 'UNALM', rector: 'Américo Guevara Pérez', foto: 'https://i.pravatar.cc/150?img=42', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Logo_UNALM.png/200px-Logo_UNALM.png' },
  { id: 22, prefijo: 'Universidad Nacional', nombre: 'José María Arguedas', siglas: 'UNAJMA', rector: 'Rufino Solano Flores', foto: 'https://i.pravatar.cc/150?img=44', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Logo_UNAJMA.png/200px-Logo_UNAJMA.png' },
  { id: 23, prefijo: 'Universidad Nacional', nombre: 'Del Altiplano', siglas: 'UNA', rector: 'Paulino Machaca Ari', foto: 'https://i.pravatar.cc/150?img=45', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Escudo_UNA_Puno.png/200px-Escudo_UNA_Puno.png' },
  { id: 24, prefijo: 'Universidad Nacional', nombre: 'Católica Santa María', siglas: 'UCSM', rector: 'Manuel Alberto Briceño', foto: 'https://i.pravatar.cc/150?img=46', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Escudo_UCSM.png/200px-Escudo_UCSM.png' },
  { id: 25, prefijo: 'Universidad Nacional', nombre: 'Altiplano del Cuzco', siglas: 'UAC', rector: 'Valerio Paucarmayta', foto: 'https://i.pravatar.cc/150?img=19', logo: 'https://i.pravatar.cc/80?img=15' },
  { id: 26, prefijo: 'Universidad Nacional', nombre: 'ESAN', siglas: 'ESAN', rector: 'Jaime Serida', foto: 'https://i.pravatar.cc/150?img=21', logo: 'https://i.pravatar.cc/80?img=16' },
])

const universidadesFiltradas = computed(() => universidades.value)

// Reactividad de Control del Modal
const modalAbierto = ref(false)
const universidadSeleccionada = ref(null)

function abrirModal(universidad) {
  universidadSeleccionada.value = { ...universidad }
  modalAbierto.value = true
  document.body.style.overflow = 'hidden' // Desactiva scroll de fondo
}

function cerrarModal() {
  modalAbierto.value = false
  universidadSeleccionada.value = null
  document.body.style.overflow = '' // Devuelve scroll de fondo
}

function onImgError(e) {
  e.target.src = 'https://ui-avatars.com/api/?background=eef0f7&color=3a5490&size=80&name=U'
}
</script>

<style scoped>
/* Cambiado de :root a .directorio para el correcto funcionamiento en estilos Scoped */
.directorio {
  --azul:      #1a3a6e;
  --azul-claro:#3a5490;
  --borde:     #d8dde8;
  --fondo:     #ffffff;
  --texto:     #1c2a3a;
  --gris:      #6b7a99;
  --blanco:    #ffffff;
  --radio:     10px;
  --sombra:    0 2px 8px rgba(26,58,110,.08);

  font-family: 'Inter', system-ui, sans-serif;
  background: var(--fondo);
  min-height: 100vh;
  padding: 32px 24px 48px;
  max-width: 780px;
  margin: 0 auto;
}

/* ── Encabezado ─────────────────────────────────────────────── */
.directorio__header {
  text-align: center;
  margin-bottom: 28px;
}

.directorio__titulo {
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--texto);
  letter-spacing: -0.01em;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--azul);
}

/* ── Filtros ─────────────────────────────────────────────────── */
.directorio__filtros {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 28px;
}

.filtro-select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 9px 12px;
  background: var(--blanco);
  border: 1.5px solid var(--borde);
  border-radius: var(--radio);
  cursor: pointer;
  transition: border-color 0.18s, box-shadow 0.18s;
  font-size: 0.78rem;
  color: var(--texto);
  font-weight: 500;
  user-select: none;
}

.filtro-select:hover {
  border-color: var(--azul-claro);
  box-shadow: 0 0 0 3px rgba(58, 84, 144, 0.08);
}

.filtro-select--active {
  border-color: var(--azul);
  background: #edf1fb;
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

/* ── Grid ────────────────────────────────────────────────────── */
.directorio__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

/* ── Tarjeta ─────────────────────────────────────────────────── */
.tarjeta {
  display: flex;
  align-items: center;
  gap: 0;
  background: var(--blanco);
  border: 1px solid var(--borde);
  border-radius: var(--radio);
  overflow: hidden;
  box-shadow: var(--sombra);
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  min-height: 96px;
}

.tarjeta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(26,58,110,.12);
}

/* Logo */
.tarjeta__logo-wrap {
  flex-shrink: 0;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 12px;
}

.tarjeta__logo {
  width: 72px;
  height: 72px;
  object-fit: contain;
  display: block;
}

/* Divider vertical */
.tarjeta__divider {
  width: 1.5px;
  align-self: stretch;
  background: #e0aab0;
  flex-shrink: 0;
}

/* Info */
.tarjeta__info {
  flex: 1;
  padding: 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tarjeta__prefijo {
  font-size: 0.72rem;
  color: var(--azul-claro);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-color: var(--azul-claro);
  font-weight: 500;
  display: block;
}

.tarjeta__nombre {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--texto);
  line-height: 1.35;
}

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 640px) {
  .directorio__filtros { grid-template-columns: repeat(2, 1fr); }
  .directorio__grid { grid-template-columns: 1fr; }
}
@media (max-width: 380px) {
  .directorio__filtros { grid-template-columns: 1fr; }
}
</style>