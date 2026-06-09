<script setup lang="ts">
interface Trabajo {
  titulo: string
  descripcion: string
  color: 'rojo' | 'azul' | 'rosa'
}

interface Acuerdo {
  titulo: string
  items: Trabajo[]
}

const acuerdos: Acuerdo[] = [
  {
    titulo: 'Presentación y aprobación del plan de trabajo anual.',
    items: [
      { titulo: 'Trabajo 1', descripcion: 'Presentación de las líneas estratégicas para el periodo 2026.', color: 'rojo' },
      { titulo: 'Trabajo 2', descripcion: 'No es necesario tener conocimientos básicos en diseño 3D.', color: 'azul' },
      { titulo: 'Trabajo 3', descripcion: 'Presentación de las líneas estratégicas para el periodo 2026.', color: 'rosa' },
    ],
  },
  {
    titulo: 'Coordinación de actividades académicas y eventos interinstitucionales.',
    items: [
      { titulo: 'Actividad 1', descripcion: 'Organización de foros interuniversitarios.', color: 'rojo' },
      { titulo: 'Actividad 2', descripcion: 'Desarrollo de encuentros académicos y seminarios.', color: 'azul' },
      { titulo: 'Actividad 3', descripcion: 'Promoción de iniciativas de colaboración entre facultades.', color: 'rosa' },
    ],
  },
  {
    titulo: 'Definición de líneas de colaboración entre las universidades participantes.',
    items: [
      { titulo: 'Fortalecimiento 1', descripcion: 'Identificación de áreas de trabajo conjunto.', color: 'rojo' },
      { titulo: 'Fortalecimiento 2', descripcion: 'Promoción de proyectos académicos colaborativos.', color: 'azul' },
      { titulo: 'Fortalecimiento 3', descripcion: 'Articulación entre las universidades miembros.', color: 'rosa' },
    ],
  },
]

const imagenesRegistro = [
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80',
]

const imagenPrincipal = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80'
</script>

<template>
  <article class="asamblea-wrapper">

    <!-- Descripción introductoria -->
    <p class="intro-text">
      Espacio informativo que reúne el registro de las asambleas desarrolladas por la red, presentando de
      manera resumida los principales temas abordados, acuerdos alcanzados y participación de las
      instituciones miembros. La información se organiza priorizando las sesiones más recientes.
    </p>

    <!-- Imagen principal -->
    <div class="imagen-principal">
      <img :src="imagenPrincipal" alt="Asamblea general" />
    </div>

    <!-- Descripción de la asamblea -->
    <p class="asamblea-desc">
      Durante esta asamblea se abordaron temas relacionados con el fortalecimiento de la cooperación
      interuniversitaria, la planificación de actividades académicas conjuntas y la consolidación de nuevas
      iniciativas orientadas al desarrollo institucional.
    </p>

    <!-- Acuerdos Principales -->
    <div class="acuerdos-section">
      <h3 class="section-titulo">Acuerdos Principales</h3>

      <div
        v-for="(acuerdo, ai) in acuerdos"
        :key="ai"
        class="acuerdo-bloque"
      >
        <!-- Bullet + título del acuerdo -->
        <div class="acuerdo-header" :class="{ 'acuerdo-header--dashed': ai === 1 }">
          <span class="bullet">•</span>
          <span class="acuerdo-titulo">{{ acuerdo.titulo }}</span>
        </div>

        <!-- Cards de trabajos/actividades -->
        <div class="items-grid">
          <div
            v-for="(item, ii) in acuerdo.items"
            :key="ii"
            class="item-card"
          >
            <!-- Ícono circular -->
            <div class="item-icono" :class="`icono--${item.color}`">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <!-- Nombre -->
            <p class="item-titulo" :class="`titulo--${item.color}`">{{ item.titulo }}</p>
            <!-- Descripción -->
            <p class="item-desc">{{ item.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Registro Audiovisual -->
    <div class="registro-section">
      <h3 class="section-titulo">Registro Audiovisual</h3>
      <div class="registro-grid">
        <div
          v-for="(img, i) in imagenesRegistro"
          :key="i"
          class="registro-img-wrapper"
        >
          <img :src="img" :alt="`Registro audiovisual ${i + 1}`" />
        </div>
      </div>
    </div>

  </article>
</template>

<style scoped>
.asamblea-wrapper {
  max-width: 760px;
  margin: 0 auto;
  padding: 32px 24px;
  font-family: inherit;
  color: #222;
}

/* ── Textos ── */
.intro-text {
  font-size: 0.88rem;
  line-height: 1.75;
  color: #333;
  text-align: justify;
  margin-bottom: 24px;
}

.asamblea-desc {
  font-size: 0.88rem;
  line-height: 1.75;
  color: #333;
  text-align: justify;
  margin: 24px 0 32px;
}

/* ── Imagen principal ── */
.imagen-principal {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 4px;
}

.imagen-principal img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

/* ── Sección acuerdos ── */
.acuerdos-section {
  margin-bottom: 40px;
}

.section-titulo {
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-bottom: 20px;
}

/* ── Bloque de acuerdo ── */
.acuerdo-bloque {
  margin-bottom: 28px;
}

.acuerdo-header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 14px;
  padding: 8px 10px;
  border-radius: 6px;
}

.acuerdo-header--dashed {
  border: 1.5px dashed #f9a8c9;
  background: #fff8fb;
}

.bullet {
  font-size: 1rem;
  color: #333;
  flex-shrink: 0;
  line-height: 1.5;
}

.acuerdo-titulo {
  font-size: 0.85rem;
  font-weight: 700;
  color: #111;
  line-height: 1.5;
}

/* ── Grid de items ── */
.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

@media (max-width: 580px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Item card ── */
.item-card {
  background: #fff;
  border: 1px solid #f0e8ee;
  border-radius: 10px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}

/* ── Ícono circular ── */
.item-icono {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icono--rojo  { background: #D9043D; color: #fff; }
.icono--azul  { background: #254C9E; color: #fff; }
.icono--rosa  { background: #f4afc8; color: #fff; }

/* ── Título del item ── */
.item-titulo {
  font-size: 0.82rem;
  font-weight: 700;
  margin: 0;
}

.titulo--rojo  { color: #D9043D; }
.titulo--azul  { color: #254C9E; }
.titulo--rosa  { color: #c05080; }

/* ── Descripción del item ── */
.item-desc {
  font-size: 0.78rem;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

/* ── Registro audiovisual ── */
.registro-section {
  margin-top: 8px;
}

.registro-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 16px;
}

@media (max-width: 580px) {
  .registro-grid {
    grid-template-columns: 1fr;
  }
}

.registro-img-wrapper {
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.registro-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.registro-img-wrapper:hover img {
  transform: scale(1.04);
}
</style>