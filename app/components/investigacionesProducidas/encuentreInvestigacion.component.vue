<template>
  <div class="min-h-screen bg-[#fcfcfc] py-16 px-4 sm:px-6 lg:px-8 font-sans">
    <div class="max-w-6xl mx-auto text-center">
      
      <h1 class="text-3xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
        Encuentra su investigacion
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <p class="mt-8 text-[1.15rem] text-gray-900 max-w-5xl mx-auto leading-relaxed font-normal">
        Explora nuestra base de datos de producción científica. Documentos, tesis, policy briefs y artículos desarrollados 
        por los investigadores de nuestras universidades miembro, orientados a resolver los desafíos territoriales del país.
      </p>

      <div class="mt-10 max-w-2xl mx-auto">
        <div class="relative flex items-center bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-200/80 pl-6 pr-4 py-3.5">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Buscar..." 
            class="w-full text-gray-500 placeholder-gray-400 focus:outline-none bg-transparent text-lg"
          />
          <div class="flex items-center h-8 border-l-2 border-[#2b4c99] pl-4 ml-2">
            <button class="text-[#d91d36] hover:scale-105 transition-transform">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(item, index) in filteredInvestigations" 
          :key="index"
          class="flex items-center bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-4 w-full text-left"
        >
          <div class="flex-shrink-0 w-28 h-28 bg-gradient-to-br from-[#d91d53] via-[#782878] to-[#2b4c99] rounded-2xl flex items-center justify-center text-white p-2">
            <div class="w-full h-full rounded-full border-2 border-white/90 flex items-center justify-center overflow-hidden relative">
              <svg class="w-16 h-16 absolute bottom-[-4px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div class="ml-6 flex items-center flex-1 h-24">
            <div class="w-[2px] h-full bg-[#d91d36] flex-shrink-0"></div>
            
            <div class="pl-4 flex flex-col justify-center">
              <span class="text-[0.72rem] text-gray-500 underline decoration-gray-400 block mb-1 font-medium cursor-pointer hover:text-gray-800">
                {{ item.autor }}
              </span>
              <h3 class="text-[0.92rem] font-bold text-gray-900 leading-tight">
                <span class="font-bold text-gray-900">{{ item.tipo }}:</span> 
                <span class="font-bold text-gray-900 ml-1">{{ item.titulo }}</span>
              </h3>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const investigations = ref([
  {
    autor: 'Equipo Nodo Centro (UNMSM - UNI).',
    tipo: 'Título',
    titulo: 'Análisis de vulnerabilidad sismica en colegios públicos de Lima.'
  },
  {
    autor: 'Comité Técnico de la RIESGIRD-ACC.',
    tipo: 'Policy Brief',
    titulo: 'Recomendaciones para el ordenamiento territorial en zonas de huaicos.'
  },
  {
    autor: 'Comité Técnico de la RIESGIRD-ACC.',
    tipo: 'Policy Brief',
    titulo: 'Recomendaciones para el ordenamiento territorial en zonas de huaicos.'
  },
  {
    autor: 'Equipo Nodo Centro (UNMSM - UNI).',
    tipo: 'Título',
    titulo: 'Análisis de vulnerabilidad sismica en colegios públicos de Lima.'
  }
])

const filteredInvestigations = computed(() => {
  if (!searchQuery.value) return investigations.value
  return investigations.value.filter(item => 
    item.titulo.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    item.autor.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>