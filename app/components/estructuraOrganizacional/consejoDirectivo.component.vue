<template>
  <div class="text-center px-4 py-8 md:py-12">
    <div class="max-w-6xl mx-auto">
      
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
        Consejo Directivo
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <p class="mt-6 text-sm md:text-base text-gray-900 max-w-5xl mx-auto leading-relaxed font-normal">
        El Consejo Directivo es el órgano encargado de dirigir, administrar y representar legalmente a la Red. Su función 
        principal es ejecutar los acuerdos de la Asamblea General de Rectores y evaluar la admisión de nuevas 
        universidades miembro.
      </p>

      <div class="mt-10 md:mt-12 mb-12 md:mb-16">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
          Directorio Actual (Periodo 2024 - 2027)
          <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
            <span class="w-[55%] bg-[#d91d36]"></span>
            <span class="w-[45%] bg-[#2b4c99]"></span>
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
        <div 
          v-for="(miembro, index) in directorio" 
          :key="index"
          class="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-between text-center w-full min-h-[350px] md:min-h-[380px]"
        >
          <div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#d91d53] via-[#782878] to-[#2b4c99] rounded-full flex items-center justify-center text-white p-1 shadow-sm">
            <div class="w-full h-full rounded-full border-2 border-white/90 flex items-center justify-center overflow-hidden relative">
              <svg class="w-12 h-12 md:w-14 md:h-14 absolute bottom-[-2px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>

          <div class="mt-5 md:mt-6 flex-1 flex flex-col justify-between w-full">
            <div>
              <h3 class="text-base md:text-lg font-bold text-gray-900 leading-snug px-2">
                {{ miembro.nombre }}
              </h3>

              <span class="inline-block mt-2 md:mt-3 text-[10px] md:text-xs font-semibold text-[#d91d36] border-b border-[#2b4c99] pb-0.5 tracking-wider uppercase">
                {{ miembro.cargo }}
              </span>

              <p class="mt-3 md:mt-4 text-[10px] md:text-xs text-gray-500 font-medium px-2 md:px-4 leading-normal">
                {{ miembro.institucion }}
              </p>
            </div>

            <div class="mt-5 md:mt-6 pt-4 border-t border-gray-50 flex flex-col items-center justify-center space-y-1 w-full">
              <div v-if="miembro.emails.length > 0" class="flex flex-col items-center space-y-0.5 w-full">
                <div 
                  v-for="(email, eIdx) in miembro.emails" 
                  :key="eIdx"
                  class="flex items-center text-[10px] md:text-[11px] text-[#d91d53] font-medium hover:underline cursor-pointer break-all px-2"
                >
                  <svg v-if="eIdx === 0" class="w-3 h-3 md:w-3.5 md:h-3.5 mr-1.5 text-[#d91d53] flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span v-else class="w-4 md:w-5"></span>
                  {{ email }}
                </div>
              </div>
              
              <div v-else class="flex items-center text-[10px] md:text-[11px] text-gray-400 font-medium">
                <svg class="w-3 h-3 md:w-3.5 md:h-3.5 mr-1.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ---
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data estructurada limpia siguiendo fielmente la captura de pantalla
const directorio = ref([
  {
    nombre: 'Dr. Edgardo Palomino Torres',
    cargo: 'Secretario',
    institucion: 'Universidad Nacional de Huancavelica',
    emails: []
  },
  {
    nombre: 'Dr. Jaime Serida Nishimura',
    cargo: 'Presidente',
    institucion: 'Rector de la Universidad ESAN',
    emails: [
      'jserida@esan.edu.pe',
      'red_riesgird-acc_pe@esan.edu.pe'
    ]
  },
  {
    nombre: 'Dr. Edgar Martínez Huamán',
    cargo: 'Vocal',
    institucion: 'Universidad Nacional José María Arguedas',
    emails: []
  }
])
</script>