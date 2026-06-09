<script setup lang="ts">
import { ref, computed } from 'vue'

// Definición de las categorías superiores (Filtros)
const categorias = [
  { label: 'Kit para Docentes\nUniversitarios', value: 'kits' },
  { label: 'Manuales\nPrácticos', value: 'manuales' },
  { label: 'Recursos\nMultimedia', value: 'multimedia' },
]

const categoriaActiva = ref('kits')

// Base de datos de los materiales según tu imagen
const materiales: Record<string, { tipo: string; titulo: string }[]> = {
  kits: [
    { tipo: 'KIT', titulo: 'Guía para incorporar la GIRD en el sílabo universitario.' },
    { tipo: 'KIT', titulo: 'Casos de estudio prácticos para evaluación en el aula.' },
  ],
  manuales: [
    { tipo: 'MANUAL', titulo: 'Manual rápido: Cómo formular proyectos de Responsabilidad Social con enfoque de riesgo.' },
    { tipo: 'MANUAL', titulo: 'Guía de gestión ambiental para campus universitarios.' },
  ],
  multimedia: [
    { tipo: 'VIDEO', titulo: 'Serie de webinars: Innovación en la educación superior resiliente.' },
    { tipo: 'INFOGRAFÍA', titulo: 'Mapa interactivo de riesgos en sedes universitarias nacionales.' },
  ],
}

const itemsFiltrados = computed(() => materiales[categoriaActiva.value] ?? [])
</script>

<template>
  <section class="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-white select-none">
    
    <div class="text-center max-w-5xl mx-auto mb-12">
      <div class="mb-5 inline-block relative pb-2.5">
        <h2 class="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Encuentra su Material
        </h2>
        <div class="absolute bottom-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E]"></div>
      </div>
      
      <p class="text-gray-900 text-sm md:text-[17px] font-medium leading-relaxed max-w-4xl mx-auto px-4">
        Ponemos a disposición de la comunidad académica, gobiernos locales y público general una serie de guías,
        manuales y kits educativos. Estos recursos están diseñados para facilitar la enseñanza de la GIRD y la ACC dentro y fuera de las aulas.
      </p>
    </div>

    <div class="flex justify-center items-center gap-5 flex-wrap mb-14">
      <button
        v-for="cat in categorias"
        :key="cat.value"
        @click="categoriaActiva = cat.value"
        class="flex items-stretch bg-white border border-gray-100 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden min-w-[220px] md:min-w-[240px] text-left active:scale-[0.98]"
      >
        <span class="flex-grow flex items-center justify-center text-center px-5 py-3 text-xs md:text-[13px] font-semibold text-gray-500 leading-tight whitespace-pre-line">
          {{ cat.label }}
        </span>
        
        <span class="w-[1.5px] bg-[#D9043D] self-stretch" :class="{ '!bg-[#254C9E]': categoriaActiva === cat.value }"></span>
        
        <span class="flex items-center justify-center px-4 text-[#D9043D]" :class="{ '!text-[#254C9E]': categoriaActiva === cat.value }">
          <svg class="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(item, i) in itemsFiltrados"
        :key="i"
        class="flex items-stretch bg-white border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 cursor-pointer min-h-[150px]"
      >
        <div class="w-36 min-w-[144px] bg-gradient-to-b from-[#D9043D] via-[#653E9B] to-[#254C9E] flex items-center justify-center p-4">
          <svg viewBox="0 0 80 80" class="w-16 h-16" fill="none">
            <circle cx="40" cy="40" r="36" stroke="white" stroke-width="2.5" stroke-opacity="0.85" fill="none" />
            <circle cx="40" cy="31" r="12" fill="white" fill-opacity="0.95" />
            <ellipse cx="40" cy="57" rx="19" ry="11" fill="white" fill-opacity="0.95" />
          </svg>
        </div>

        <span class="w-[1px] bg-gray-200 self-stretch"></span>

        <div class="p-6 flex flex-col justify-center flex-grow bg-white">
          <span class="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1.5 block">
            {{ item.tipo }}
          </span>
          <h3 class="text-gray-900 font-extrabold text-[15px] md:text-[17px] leading-snug">
            {{ item.titulo }}
          </h3>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
/* Evita el quiebre de palabras feo en el título si es necesario */
h2 {
  text-wrap: balance;
}
</style>