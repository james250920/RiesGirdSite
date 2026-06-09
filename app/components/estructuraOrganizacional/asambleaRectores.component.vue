<template>
  <div class="text-center">
    <div class="max-w-6xl mx-auto">
      
      <h1 class="text-3xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
        Asamblea de Rectores
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <p class="mt-6 text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
        Las asambleas de rectores son el máximo órgano de gobierno de la red, donde se toman las decisiones estratégicas.
      </p>

      <div class="mt-8 max-w-xs mx-auto">
        <div class="relative flex items-center bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-200/70 pl-6 pr-4 py-2.5">
          <select 
            v-model="selectedYear"
            class="w-full text-gray-600 bg-transparent focus:outline-none appearance-none cursor-pointer text-sm font-medium"
          >
            <option value="2024">Seleccione el año</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
          <div class="absolute right-0 top-0 bottom-0 flex items-center pr-4 pointer-events-none">
            <div class="h-5 border-l-2 border-[#d91d36] mr-3"></div>
            <svg class="w-4 h-4 text-[#d91d36]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-white rounded-2xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] p-6 sm:p-10 text-left max-w-5xl mx-auto">
        
        <div class="border-l-[3px] border-black pl-3 mb-4">
          <h2 class="text-2xl font-bold text-gray-900 tracking-tight">
            Asamblea Ordinaria
          </h2>
        </div>

        <div class="flex flex-wrap gap-4 text-xs text-gray-400 font-medium mb-6">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-[#d91d36]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            15 de agosto de 2024
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1.5 text-[#d91d36]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Universidad Nacional Mayor de San Marcos, Lima
          </div>
        </div>

        <div class="flex flex-wrap gap-3 mb-8">
          <button 
            @click="activeTab = 'agenda'"
            :class="[activeTab === 'agenda' ? 'border-[#2b4c99] text-[#d91d36] font-semibold bg-white' : 'bg-gray-100 text-gray-400 border-transparent']"
            class="px-5 py-1.5 text-xs rounded-md border transition-all shadow-sm"
          >
            Agenda
          </button>
          <button 
            @click="activeTab = 'acuerdos'"
            :class="[activeTab === 'acuerdos' ? 'border-[#2b4c99] text-[#d91d36] font-semibold bg-white' : 'bg-gray-100 text-gray-400 border-transparent']"
            class="px-5 py-1.5 text-xs rounded-md border transition-all shadow-sm"
          >
            Acuerdos
          </button>
          <button 
            @click="activeTab = 'fotos'"
            :class="[activeTab === 'fotos' ? 'border-[#2b4c99] text-[#d91d36] font-semibold bg-white' : 'bg-gray-100 text-gray-400 border-transparent']"
            class="px-5 py-1.5 text-xs rounded-md border transition-all shadow-sm"
          >
            Fotos
          </button>
          <button 
            @click="activeTab = 'documentos'"
            :class="[activeTab === 'documentos' ? 'border-[#2b4c99] text-[#d91d36] font-semibold bg-white' : 'bg-gray-100 text-gray-400 border-transparent']"
            class="px-5 py-1.5 text-xs rounded-md border transition-all shadow-sm"
          >
            Documentos
          </button>
        </div>

        <div v-if="activeTab === 'agenda'">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              v-for="(punto, index) in agendaItems" 
              :key="index"
              class="flex items-center bg-[#f4f7fd] rounded-lg p-4 border border-gray-100/50"
            >
              <div class="flex-shrink-0 w-8 h-8 rounded border border-purple-900 bg-white flex items-center justify-center text-xs font-bold text-purple-900 mr-4">
                {{ index + 1 }}
              </div>
              <p class="text-xs font-semibold text-[#3b5ba5] leading-snug">
                {{ punto }}
              </p>
            </div>
          </div>
        </div>

        <div v-else class="text-sm text-gray-500 py-8 text-center bg-gray-50 rounded-lg border border-dashed">
          Contenido de {{ activeTab.toUpperCase() }} disponible próximamente.
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedYear = ref('2024')
const activeTab = ref('agenda')

// Puntos extraídos idénticos a tu imagen
const agendaItems = ref([
  'Instalación formal de la RiesGIRD-ACC Perú',
  'Aprobación del Estatuto de la Red',
  'Elección del primer Consejo Directivo',
  'Presentación del Plan de Trabajo 2024-2027',
  'Definición de cuotas y aportes institucionales',
  'Establecimiento de alianzas estratégicas iniciales'
])
</script>