<script setup lang="ts">
import { ref, computed } from 'vue'

const categorias = [
  { label: 'Documentos\nde Gobernanza', value: 'gobernanza', color: '#D9043D' },
  { label: 'Planes\nOperativos', value: 'planes', color: '#254C9E' },
  { label: 'Actas y\nResoluciones', value: 'actas', color: '#D9043D' },
]

const categoriaActiva = ref('gobernanza')

const documentos: Record<string, { tipo: string; titulo: string }[]> = {
  gobernanza: [
    { tipo: 'PPT', titulo: 'Estatuto Oficial de la RIESGIRD-ACC Perú' },
    { tipo: 'PDF', titulo: 'Estrategia de Expansión de Nodos Regionales' },
    { tipo: 'PDF', titulo: 'Reglamento Interno de la Asamblea General' },
    { tipo: 'PDF', titulo: 'Plan de Trabajo Anual 2026' },
  ],
  planes: [
    { tipo: 'PDF', titulo: 'Plan Operativo Institucional 2025' },
    { tipo: 'PDF', titulo: 'Plan Estratégico 2024–2026' },
    { tipo: 'PDF', titulo: 'Estrategia de Expansión de Nodos Regionales' },
    { tipo: 'PDF', titulo: 'Plan de Trabajo Anual 2026' },
  ],
  actas: [
    { tipo: 'PDF', titulo: 'Acta del Consejo Directivo – Marzo 2025' },
    { tipo: 'PDF', titulo: 'Resolución N° 012-2025' },
    { tipo: 'PDF', titulo: 'Acta de Asamblea General Ordinaria 2024' },
    { tipo: 'PDF', titulo: 'Plan de Trabajo Anual 2026' },
  ],
}

const docsActivos = computed(() => documentos[categoriaActiva.value] ?? [])
</script>

<template>
  <section class="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-white select-none">

    <div class="text-center max-w-5xl mx-auto mb-12">
      <div class="mb-5 inline-block relative pb-2.5">
        <h2 class="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Encuentre su Memoria
        </h2>
        <div class="absolute bottom-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E]"></div>
      </div>
      
      <p class="text-gray-900 text-sm md:text-[17px] font-medium leading-relaxed max-w-none px-4 text-center">
        Accede a los documentos oficiales que rigen el funcionamiento de nuestra Red, así como a los planes de trabajo,
        actas del Consejo Directivo y lineamientos técnicos internos para nuestras universidades miembro.
      </p>
    </div>

    <div class="flex justify-center items-center gap-6 flex-wrap mb-14">
      <button
        v-for="cat in categorias"
        :key="cat.value"
        @click="categoriaActiva = cat.value"
        class="flex items-stretch bg-white border border-gray-100 rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] transition-all duration-300 overflow-hidden min-w-[210px] md:min-w-[230px] text-left active:scale-[0.98]"
      >
        <span class="flex-grow flex items-center justify-center text-center px-5 py-3 text-xs md:text-[13px] font-semibold text-gray-500 leading-tight whitespace-pre-line">
          {{ cat.label }}
        </span>
        
        <span 
          class="w-[1.5px] self-stretch transition-colors duration-300"
          :style="{ backgroundColor: categoriaActiva === cat.value ? '#254C9E' : '#D9043D' }"
        />
        
        <span 
          class="flex items-center justify-center px-4 transition-colors duration-300"
          :style="{ color: categoriaActiva === cat.value ? '#254C9E' : '#D9043D' }"
        >
          <svg class="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div
        v-for="(doc, i) in docsActivos"
        :key="i"
        class="flex items-stretch bg-white border border-gray-100/80 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.09)] hover:-translate-y-0.5 cursor-pointer min-h-[140px]"
      >
        <div class="w-32 min-w-[128px] bg-gradient-to-b from-[#D9043D] via-[#653E9B] to-[#254C9E] flex items-center justify-center p-4 shadow-inner">
          <svg viewBox="0 0 80 80" class="w-14 h-14" fill="none">
            <circle cx="40" cy="40" r="36" stroke="white" stroke-width="2.5" stroke-opacity="0.85" fill="none" />
            <circle cx="40" cy="31" r="12" fill="white" fill-opacity="0.95" />
            <ellipse cx="40" cy="57" rx="19" ry="11" fill="white" fill-opacity="0.95" />
          </svg>
        </div>

        <span class="w-[1px] bg-gray-200 self-stretch" />

        <div class="p-6 flex flex-col justify-center flex-grow bg-white">
          <span class="text-[11px] font-bold text-gray-400 tracking-wider uppercase underline decoration-gray-300 underline-offset-4 mb-1.5 block">
            {{ doc.tipo }}
          </span>
          <h3 class="text-gray-900 font-extrabold text-[15px] md:text-base leading-snug line-clamp-2">
            {{ doc.titulo }}
          </h3>
        </div>
      </div>
    </div>

  </section>
</template>