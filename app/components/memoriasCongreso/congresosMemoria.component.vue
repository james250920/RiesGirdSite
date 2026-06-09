<template>
  <section class="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 bg-white select-none">
    
    <div class="text-center max-w-5xl mx-auto mb-16">
      <div class="mb-5 inline-block relative pb-2.5">
        <h2 class="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Memorias de Congresos Internacionales RiesGIRD-ACC
        </h2>
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[3.5px] bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E]"></div>
      </div>
      <p class="text-gray-900 text-sm md:text-[17px] font-medium leading-relaxed max-w-4xl mx-auto">
        Revive las ponencias, debates y acuerdos de nuestros principales espacios de articulación. Aquí encontrarás las presentaciones, actas y grabaciones de los congresos, foros y asambleas impulsados por la RIESGIRD-ACC Perú.
      </p>
    </div>

    <div class="space-y-20 max-w-6xl mx-auto">
      <div 
        v-for="bloque in historialCongresos" 
        :key="bloque.year" 
        class="flex flex-col items-center"
      >
        <div class="w-full bg-[#F8FAFC]/60 rounded-3xl p-6 md:p-8 border border-gray-100 flex flex-col lg:flex-row gap-8 items-stretch shadow-sm">
          
          <div class="w-full lg:w-[280px] bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center text-center justify-center flex-shrink-0">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#D9043D] via-[#653E9B] to-[#254C9E] flex items-center justify-center mb-4 shadow-md">
              <svg viewBox="0 0 80 80" class="w-9 h-9" fill="none">
                <circle cx="40" cy="40" r="36" stroke="white" stroke-width="2.5" stroke-opacity="0.85" fill="none" />
                <circle cx="40" cy="31" r="12" fill="white" fill-opacity="0.95" />
                <ellipse cx="40" cy="57" rx="19" ry="11" fill="white" fill-opacity="0.95" />
              </svg>
            </div>
            <span class="text-2xl font-black text-gray-900 mb-1">{{ bloque.year }}</span>
            <a href="#" class="text-[#D9043D] hover:text-[#254C9E] font-bold text-sm md:text-base underline leading-snug mb-3 block transition-colors">
              {{ bloque.eventName }}
            </a>
            <p class="text-gray-500 text-xs md:text-sm leading-relaxed">
              {{ bloque.description }}
            </p>
          </div>

          <div class="flex-grow flex flex-col justify-between gap-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div 
                v-for="(doc, idx) in bloque.documentos" 
                :key="idx"
                class="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center text-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] min-h-[145px] hover:shadow-md transition-shadow"
              >
                <span class="text-[10px] font-bold tracking-wider uppercase" :class="getBadgeColor(doc.tipo)">
                  [{{ doc.tipo }}]
                </span>
                <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D9043D] to-[#254C9E] flex items-center justify-center text-white my-2 shadow-sm">
                  <svg v-if="doc.tipo === 'VIDEO'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 12l-7.05 5.054V6.946L23 12zM1 6h13v12H1V6z"/></svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <p class="text-gray-800 font-bold text-[11px] md:text-xs leading-snug line-clamp-2 px-1">
                  {{ doc.titulo }}
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div 
                v-for="(galeria, gIdx) in bloque.galerias" 
                :key="gIdx"
                :class="[
                  'rounded-xl p-6 flex items-center justify-center text-white min-h-[110px] shadow-sm transition-opacity hover:opacity-95 cursor-pointer',
                  gIdx % 2 === 0 ? 'bg-[#D9043D]' : 'bg-[#254C9E]'
                ]"
              >
                <svg class="w-9 h-9 opacity-90 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <circle cx="12" cy="13" r="3" stroke="currentColor" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        <button 
          @click="downloadReport(bloque.year)"
          class="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-[#D9043D] to-[#254C9E] text-white font-bold text-sm hover:opacity-95 active:scale-[0.99] transition-all shadow-md flex items-center space-x-2"
        >
          <span>Descargar Oficial {{ bloque.year }} (PDF)</span>
        </button>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Base de datos estructurada con el contenido real de los bloques 2025 y 2024
const historialCongresos = ref([
  {
    year: '2025',
    eventName: 'Congreso Nacional de Universidades Resilientes',
    description: 'Párrafo explicando la cantidad de participantes y el tema que se llego a debatir.',
    documentos: [
      { tipo: 'PDF', titulo: 'Declaratoria Final del Congreso' },
      { tipo: 'PPT', titulo: 'Avances de la GIRD en el Norte (UNI de Piura)' },
      { tipo: 'VIDEO', titulo: 'Grabación del panel de cierre' }
    ],
    galerias: [{}, {}, {}] // Representa los 3 bloques inferiores con iconos de cámara
  },
  {
    year: '2024',
    eventName: 'Foro Macrorregional Sur sobre Cambio Climático',
    description: 'Párrafo explicando la cantidad de participantes y el tema que se llego a debatir.',
    documentos: [
      { tipo: 'PDF', titulo: 'Memoria Descriptiva del Foro' },
      { tipo: 'PPT', titulo: 'Estrategias de Reforestación (UNSA)' },
      { tipo: 'VIDEO', titulo: 'Ponencias Magistrales Bloque B' }
    ],
    galerias: [{}, {}, {}]
  }
])

// Helper dinámico para colorear los Badges superiores según el entregable
const getBadgeColor = (tipo: string) => {
  switch (tipo) {
    case 'PDF': return 'text-[#D9043D]'
    case 'PPT': return 'text-[#653E9B]'
    case 'VIDEO': return 'text-[#254C9E]'
    default: return 'text-gray-400'
  }
}

const downloadReport = (year: string) => {
  console.log(`Iniciando descarga del reporte consolidado del año: ${year}`)
}
</script>