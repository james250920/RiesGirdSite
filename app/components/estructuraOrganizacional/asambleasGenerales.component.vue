<template>
  
    <div class="max-w-6xl mx-auto text-center">
      
      <h1 class="text-3xl font-bold text-gray-900 relative inline-block tracking-tight">
        Asambleas Generales
        <span class="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span class="w-[55%] bg-[#d91d36]"></span>
          <span class="w-[45%] bg-[#2b4c99]"></span>
        </span>
      </h1>

      <div class="mt-10 max-w-xs mx-auto">
        <div class="relative flex items-center bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-200/70 pl-6 pr-4 py-3">
          <select 
            v-model="selectedYear"
            class="w-full text-gray-500 bg-transparent focus:outline-none appearance-none cursor-pointer pr-8 text-base"
          >
            <option value="">Seleccione el año</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
          </select>
          <div class="absolute right-0 top-0 bottom-0 flex items-center pr-4 pointer-events-none">
            <div class="h-6 border-l-2 border-[#d91d36] mr-3"></div>
            <svg class="w-5 h-5 text-[#d91d36]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div 
          v-for="(asamblea, index) in filteredAsambleas" 
          :key="index"
          class="card-decorativa relative flex bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100 p-4 w-full text-left overflow-hidden items-center"
        >
          <div class="flex-shrink-0 w-44 h-36 sm:w-48 sm:h-36 overflow-hidden rounded-xl">
            <img 
              :src="asamblea.imagen" 
              :alt="asamblea.titulo" 
              class="w-full h-full object-cover"
            />
          </div>

          <div class="ml-5 flex items-stretch flex-1 h-32">
            <div :class="[index % 2 === 0 ? 'bg-[#2b4c99]' : 'bg-[#d91d36]', 'w-[2px] flex-shrink-0']"></div>
            
            <div class="pl-4 flex flex-col justify-between py-1 z-10">
              <div>
                <span class="text-[0.75rem] text-gray-500 underline block font-medium">
                  {{ asamblea.anio }}
                </span>
                <h3 class="text-lg font-bold text-gray-900 leading-tight mt-0.5">
                  {{ asamblea.titulo }}
                </h3>
              </div>

              <div class="space-y-1.5 mb-1">
                <div class="flex items-center text-xs text-gray-400 font-medium">
                  <svg class="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ asamblea.lugar }}
                </div>
                <div class="flex items-center text-xs text-gray-400 font-medium cursor-pointer hover:text-gray-600 transition-colors">
                  <svg class="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {{ asamblea.documento }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedYear = ref('')

const asambleas = ref([
  {
    anio: '2024',
    titulo: 'Asamblea General 2024',
    lugar: 'Universidad ESAN',
    documento: 'Acuerdos y Conclusiones',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop'
  },
  {
    anio: '2025',
    titulo: 'Asamblea General 2025',
    lugar: 'Universidad ESAN',
    documento: 'Acuerdos y Conclusiones',
    imagen: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500&auto=format&fit=crop'
  },
  {
    anio: '2026',
    titulo: 'Asamblea General 2026',
    lugar: 'Universidad ESAN',
    documento: 'Acuerdos y Conclusiones',
    imagen: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=500&auto=format&fit=crop'
  },
  {
    anio: '2027',
    titulo: 'Asamblea General 2027',
    lugar: 'Universidad ESAN',
    documento: 'Acuerdos y Conclusiones',
    imagen: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=500&auto=format&fit=crop'
  }
])

const filteredAsambleas = computed(() => {
  if (!selectedYear.value) return asambleas.value
  return asambleas.value.filter(item => item.anio === selectedYear.value)
})
</script>

<style scoped>
/* Reemplazo del SVG completo por CSS puro usando gradientes y pseudo-elementos */
.card-decorativa::after {
  content: "";
  position: absolute;
  right: -15px;
  top: 0;
  bottom: 0;
  width: 70px;
  background-color: #e5e7eb;
  opacity: 0.35;
  border-top-left-radius: 100% 50%;
  border-bottom-left-radius: 100% 50%;
  pointer-events: none;
  
  /* Crea un patrón geométrico lineal en zigzag idéntico a las otras vistas */
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.7) 10px,
    rgba(255, 255, 255, 0.7) 20px
  );
}
</style>