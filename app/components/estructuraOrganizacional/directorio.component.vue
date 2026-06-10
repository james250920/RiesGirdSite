<template>
  <div class="min-h-screen bg-[#fcfcfc] py-8 md:py-16 px-4 sm:px-6 lg:px-8 font-sans text-center">
    <div class="max-w-6xl mx-auto">
      
      <h1 class="text-2xl md:text-3xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight mb-8 md:mb-12">
        Directorio
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-4">
        <div class="relative bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-200/70 px-4 py-2 flex items-center">
          <select v-model="filtroUniversidad" class="w-full text-[10px] md:text-xs font-semibold text-gray-500 bg-transparent focus:outline-none appearance-none pr-6 cursor-pointer">
            <option value="">Universidad</option>
            <option value="UPT">UPT</option>
            <option value="UNTELS">UNTELS</option>
            <option value="UNU">UNU</option>
            <option value="UNT">UNT</option>
            <option value="UNSCH">UNSCH</option>
            <option value="UNSAAC">UNSAAC</option>
          </select>
          <div class="absolute right-3 flex items-center pointer-events-none">
            <div class="h-4 border-l-2 border-[#d91d36] mr-2"></div>
            <svg class="w-3.5 h-3.5 text-[#d91d36]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        <div class="relative bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-200/70 px-4 py-2 flex items-center">
          <select v-model="filtroCargo" class="w-full text-[10px] md:text-xs font-semibold text-gray-500 bg-transparent focus:outline-none appearance-none pr-6 cursor-pointer">
            <option value="">Rector</option>
            <option value="Rector">Rector</option>
            <option value="Rectora">Rectora</option>
          </select>
          <div class="absolute right-3 flex items-center pointer-events-none">
            <div class="h-4 border-l-2 border-[#2b4c99] mr-2"></div>
            <svg class="w-3.5 h-3.5 text-[#2b4c99]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        <div v-for="label in ['Vicerrector Académico', 'Vicerrector de Investigación']" :key="label" class="relative bg-gray-100/80 rounded-xl border border-gray-200/50 px-4 py-2 flex items-center justify-between text-gray-400 cursor-not-allowed">
          <span class="text-[10px] md:text-xs font-semibold truncate">{{ label }}</span>
          <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-10 md:mb-16">
        <div v-for="label in ['Director General de Administración', 'Secretaría Técnica', 'Consejo Directivo', 'Comité Técnico Interáreas']" :key="label" class="relative bg-gray-100/80 rounded-xl border border-gray-200/50 px-4 py-2 flex items-center justify-between text-gray-400 cursor-not-allowed">
          <span class="text-[10px] md:text-xs font-semibold truncate text-left">{{ label }}</span>
          <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
        <div 
          v-for="(persona, index) in autoridadesVisibles" 
          :key="index"
          class="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-gray-100 p-4 flex flex-col sm:flex-row items-center sm:items-stretch text-center sm:text-left w-full"
        >
          <div class="relative flex-shrink-0 w-28 h-28 rounded-xl overflow-visible bg-gray-50 mb-4 sm:mb-0">
            <img :src="persona.foto" :alt="persona.nombre" class="w-full h-full object-cover rounded-xl" />
            
            <div class="absolute -bottom-2 -left-2 w-8 h-8 bg-white border border-gray-100 rounded-md shadow-sm p-1 flex items-center justify-center overflow-hidden">
              <img :src="persona.escudo" :alt="persona.universidad" class="w-full h-full object-contain" />
            </div>
          </div>

          <div class="sm:ml-6 flex-1 py-1 flex flex-col justify-center sm:min-h-[112px] sm:border-l sm:border-gray-100 sm:pl-4">
            <span class="text-[10px] text-gray-500 underline decoration-gray-300 font-semibold block mb-0.5">
              {{ persona.cargo }} {{ persona.universidad }}
            </span>
            <h3 class="text-sm md:text-base font-bold text-gray-900 leading-tight">
              {{ persona.nombre }}
            </h3>
            
            <div class="mt-2 space-y-0.5 flex flex-col items-center sm:items-start">
              <div class="flex items-center text-[10px] md:text-[11px] text-gray-400 font-medium max-w-full">
                <svg class="w-3.5 h-3.5 mr-1.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="truncate hover:underline cursor-pointer">{{ persona.correo || '---' }}</span>
              </div>
              <div class="flex items-center text-[10px] md:text-[11px] text-gray-400 font-medium">
                <svg class="w-3.5 h-3.5 mr-1.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ persona.telefono || '---' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="limite < directorio.length" class="mt-12">
        <button 
          @click="verMas" 
          class="px-10 py-3 bg-gradient-to-r from-[#d91d36] to-[#2b4c99] text-white font-bold text-sm rounded-xl shadow-md hover:opacity-90 transition-opacity"
        >
          Ver Más
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filtroUniversidad = ref('')
const filtroCargo = ref('')
const limite = ref(6)

const directorio = ref([
  {
    nombre: 'Hugo Cirilo Calizaya Calizaya',
    cargo: 'Rector',
    universidad: 'UPT',
    correo: 'rectorado@upt.edu.pe',
    telefono: '',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    escudo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg' // Reemplazar por escudo real UPT
  },
  {
    nombre: 'Gladys Marcionila Cruz Yupanqui',
    cargo: 'Rectora',
    universidad: 'UNTELS',
    correo: 'rectorado@untels.edu.pe',
    telefono: '905452206',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    escudo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg'
  },
  {
    nombre: 'Edgardo Leoncio Braul Gomero',
    cargo: 'Rector',
    universidad: 'UNU',
    correo: 'rectorado@unu.edu.pe',
    telefono: '936 759 048',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    escudo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg'
  },
  {
    nombre: 'Enrique Edison Benites Juárez',
    cargo: 'Rector',
    universidad: 'UNT',
    correo: 'rectorado@untumbes.edu.pe',
    telefono: '',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    escudo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg'
  },
  {
    nombre: 'Emilio German Ramírez Roca',
    cargo: 'Rector',
    universidad: 'UNSCH',
    correo: 'rectorado@unsch.edu.pe',
    telefono: '',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    escudo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg'
  },
  {
    nombre: 'Eleazar Crucita Ugarte',
    cargo: 'Rector',
    universidad: 'UNSAAC',
    correo: 'eleazar.crucita@unsaac.edu.pe',
    telefono: '',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    escudo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg'
  }
])

const autoridadesVisibles = computed(() => {
  return directorio.value
    .filter(p => {
      const matchUni = !filtroUniversidad.value || p.universidad === filtroUniversidad.value
      const matchCargo = !filtroCargo.value || p.cargo.toLowerCase().includes(filtroCargo.value.toLowerCase())
      return matchUni && matchCargo
    })
    .slice(0, limite.value)
})

const verMas = () => {
  limite.value += 4
}
</script>