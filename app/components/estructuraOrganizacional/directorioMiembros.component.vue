<template>
  <div class="font-sans text-center">
    <div class="max-w-6xl mx-auto">
      
      <h1 class="text-3xl font-bold text-gray-900 relative inline-block pb-1 tracking-tight mb-12">
        Directorio de Miembros
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-4">
        <div class="relative bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-200/70 px-4 py-2 flex items-center">
          <select v-model="filtroNombre" class="w-full text-xs font-semibold text-gray-500 bg-transparent focus:outline-none appearance-none pr-6 cursor-pointer">
            <option value="">Universidad</option>
            <option value="Huamanga">San Cristóbal de Huamanga</option>
            <option value="Ucayali">De Ucayali</option>
            <option value="Lima Sur">Tecnológica de Lima Sur</option>
            <option value="Tumbes">De Tumbes</option>
            <option value="Cuzco">San Antonio Abad del Cuzco</option>
          </select>
          <div class="absolute right-3 flex items-center pointer-events-none">
            <div class="h-4 border-l-2 border-[#d91d36] mr-2"></div>
            <svg class="w-3.5 h-3.5 text-[#d91d36]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        <div class="relative bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-200/70 px-4 py-2 flex items-center">
          <select class="w-full text-xs font-semibold text-gray-400 bg-transparent focus:outline-none appearance-none pr-6 cursor-pointer">
            <option value="">Rector</option>
          </select>
          <div class="absolute right-3 flex items-center pointer-events-none">
            <div class="h-4 border-l-2 border-[#2b4c99] mr-2"></div>
            <svg class="w-3.5 h-3.5 text-[#2b4c99]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>

        <div v-for="label in ['Vicerrector Académico', 'Vicerrector de Investigación']" :key="label" class="relative bg-gray-100/80 rounded-xl border border-gray-200/50 px-4 py-2 flex items-center justify-between text-gray-400 cursor-not-allowed">
          <span class="text-xs font-semibold truncate">{{ label }}</span>
          <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch mt-10">
        <div 
          v-for="(uni, index) in universidadesFiltradas" 
          :key="index"
          class="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.03)] border border-gray-100 p-5 flex items-center text-left w-full h-32"
        >
          <div class="flex-shrink-0 w-32 h-full flex items-center justify-center p-2">
            <div v-if="uni.esImagenSolida" class="w-full h-full rounded-xl bg-[#d91d36] flex items-center justify-center text-white font-bold text-sm tracking-widest shadow-sm">
              {{ uni.siglas }}
            </div>
            <img v-else :src="uni.logo" :alt="uni.nombre" class="w-full h-full object-contain max-h-24" />
          </div>

          <div :class="[index % 2 === 0 ? 'bg-[#2b4c99]' : 'bg-[#d91d36]', 'w-[1.5px] h-20 flex-shrink-0 ml-4']"></div>

          <div class="ml-5 flex-1 flex flex-col justify-center">
            <span class="text-[11px] text-gray-500 underline decoration-gray-300 font-semibold block mb-0.5">
              Universidad Nacional
            </span>
            <h3 class="text-sm font-bold text-gray-900 leading-tight">
              {{ uni.nombre }}
            </h3>
          </div>
        </div>
      </div>

      <div v-if="limite < universidades.length" class="mt-12">
        <button 
          @click="verMas" 
          class="px-10 py-3 bg-gradient-to-r from-[#d91d36] to-[#2b4c99] text-white font-bold text-xs rounded-xl shadow-md hover:opacity-90 transition-opacity uppercase tracking-wider"
        >
          Ver Más
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filtroNombre = ref('')
const limite = ref(6)

// Base de datos exacta de las universidades en la imagen
const universidades = ref([
  {
    nombre: 'San Cristóbal de Huamanga',
    siglas: 'UNSCH',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg', // Cambiar por logos reales
    esImagenSolida: false
  },
  {
    nombre: 'De Ucayali',
    siglas: 'UNU',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg',
    esImagenSolida: false
  },
  {
    nombre: 'Tecnológica de Lima Sur',
    siglas: 'UNTELS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg',
    esImagenSolida: false
  },
  {
    nombre: 'De Tumbes',
    siglas: 'UNT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg',
    esImagenSolida: false
  },
  {
    nombre: 'San Cristóbal de Huamanga',
    siglas: 'UNSCH',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Escudo_de_la_Universidad_Nacional_Mayor_de_San_Marcos.svg',
    esImagenSolida: false
  },
  {
    nombre: 'San Antonio Abad del Cuzco',
    siglas: 'UNSAAC',
    logo: '',
    esImagenSolida: true // Replica el contenedor corporativo rojo sólido de la última tarjeta
  }
])

const universidadesFiltradas = computed(() => {
  return universidades.value
    .filter(u => {
      return !filtroNombre.value || u.nombre.toLowerCase().includes(filtroNombre.value.toLowerCase())
    })
    .slice(0, limite.value)
})

const verMas = () => {
  limite.value += 4
}
</script>