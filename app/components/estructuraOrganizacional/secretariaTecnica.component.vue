<template>
  <div class="min-h-screen bg-[#fcfcfc] py-16 px-4 sm:px-6 lg:px-8 font-sans text-center">
    <div class="max-w-6xl mx-auto">
      
      <h1 class="text-3xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
        Secretaría Técnica
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <p class="mt-6 text-base text-gray-900 max-w-4xl mx-auto leading-relaxed font-normal">
        La Secretaría Técnica es el brazo operativo y articulador de la RiesGIRD-ACC Perú. 
        Está encargada de coordinar la ejecución del plan de trabajo, centralizar la información técnica y 
        articular los esfuerzos de los equipos de especialistas de todas nuestras universidades miembro.
      </p>

      <div class="mt-12 mb-10">
        <h2 class="text-2xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
          Liderazgo Actual
          <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
            <span class="w-[55%] bg-[#d91d36]"></span>
            <span class="w-[45%] bg-[#2b4c99]"></span>
          </span>
        </h2>
      </div>

      <div class="max-w-sm mx-auto bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-8 flex flex-col items-center text-center mb-16">
        <div class="w-24 h-24 bg-gradient-to-br from-[#d91d53] via-[#782878] to-[#2b4c99] rounded-full flex items-center justify-center text-white p-1 shadow-sm">
          <div class="w-full h-full rounded-full border-2 border-white/90 flex items-center justify-center overflow-hidden relative">
            <svg class="w-14 h-14 absolute bottom-[-2px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        <h3 class="mt-6 text-xl font-bold text-gray-900 leading-tight">
          Prof. e investigadora Mary Mollo Medina
        </h3>

        <span class="inline-block mt-3 text-xs font-semibold text-[#d91d36] border-b border-[#2b4c99] pb-0.5 tracking-wide">
          Secretaria Técnica Nacional
        </span>

        <p class="mt-3 text-xs text-gray-500 font-medium">
          Universidad ESAN
        </p>

        <div class="mt-6 flex items-center text-xs text-[#d91d53] font-medium hover:underline cursor-pointer">
          <svg class="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          mmollo@esan.edu.pe
        </div>
      </div>

      <p class="text-base text-gray-900 max-w-4xl mx-auto leading-relaxed font-normal mb-16">
        El verdadero valor de nuestra Secretaría Técnica radica en su pluralidad. No está conformada por una sola persona 
        o institución, sino que es operada por un comité interinstitucional integrado por especialistas y gestores designados 
        por cada universidad miembro de la Red. Este equipo de expertos es el encargado de aterrizar los acuerdos del 
        Consejo Directivo y hacer realidad nuestros proyectos de investigación, formación y responsabilidad socio-ambiental en todo el país.
      </p>

      <div class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight">
          Comité Técnico Interinstitucional
          <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
            <span class="w-[55%] bg-[#d91d36]"></span>
            <span class="w-[45%] bg-[#2b4c99]"></span>
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        <div 
          v-for="(miembro, index) in comite" 
          :key="index"
          class="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-gray-100 p-4 flex items-center text-left w-full relative"
        >
          <div class="relative flex-shrink-0 w-28 h-28 bg-[#2b4c99] rounded-xl flex items-center justify-center text-white overflow-visible">
            <svg class="w-16 h-16 absolute bottom-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            
            <div class="absolute -bottom-1.5 -left-1.5 w-8 h-8 bg-white border border-gray-100 rounded-md shadow-sm p-1 flex items-center justify-center overflow-hidden">
              <img :src="miembro.logoUniversidad" :alt="miembro.universidad" class="w-full h-full object-contain" />
            </div>
          </div>

          <div class="ml-5 flex-1 py-1">
            <span class="text-[10px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
              {{ miembro.universidad }}
            </span>
            <h4 class="text-sm font-bold text-gray-900 leading-snug">
              {{ miembro.nombre }}
            </h4>
            <span class="text-[11px] text-gray-500 underline decoration-gray-300 block mt-1 hover:text-gray-700 cursor-pointer">
              {{ miembro.especialidad }}
            </span>
            
            <div class="mt-3 flex items-center text-[10px] text-gray-400 font-medium">
              <svg class="w-3.5 h-3.5 mr-1 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Correo: <span class="ml-1 text-gray-400 font-normal">{{ miembro.correo || '---' }}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const comite = ref([
  {
    universidad: 'UNMSM',
    nombre: 'Dr. Juan Carlos Villegas Palomino',
    especialidad: 'Geología y Riesgos Sísmicos',
    correo: '',
    logoUniversidad: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg'
  },
  {
    universidad: 'UNI',
    nombre: 'Dra. María Elena Foronda Robles',
    especialidad: 'Ingeniería Sísmica y Estructural',
    correo: '',
    logoUniversidad: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Uni_logo.png'
  }
])
</script>