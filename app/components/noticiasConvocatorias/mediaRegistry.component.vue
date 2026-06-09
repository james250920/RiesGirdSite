<template>
  <section class="w-full bg-white rounded-2xl p-6 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50">
    
    <div class="mb-10 inline-block relative pb-3">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
        Registro Audiovisual
      </h2>
      <div class="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E]"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div 
        v-for="item in mediaItems" 
        :key="item.id"
        class="bg-white rounded-2xl p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div>
          <div class="flex justify-between items-center mb-4">
            <div class="relative bg-[#D9043D] text-white font-bold text-[11px] px-4 py-1.5 rounded-l-sm clip-arrow-right pr-6 select-none">
              {{ item.tagLeft }}
            </div>
            
            <div class="relative bg-white text-gray-700 border border-gray-200 font-medium text-[11px] px-4 py-1.5 rounded-r-sm clip-arrow-left pl-6 shadow-sm select-none">
              <span class="text-[#D9043D] font-bold">{{ item.tagRight }}</span>
            </div>
          </div>

          <h3 class="text-gray-900 font-bold text-base text-center leading-snug mb-2 line-clamp-3">
            {{ item.title }}
          </h3>

          <p class="text-[11px] text-center text-gray-400 font-medium mb-4">
            {{ item.meta }} — {{ item.date }}
          </p>

          <div class="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 shadow-inner mb-5">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div class="w-full px-4">
          <NuxtLink
            :to="`/registro-audiovisual/${item.id}`"
            class="display block w-full py-2 text-center text-sm font-semibold text-white bg-[#D9043D] rounded-lg transition-all hover:bg-[#b50333] active:scale-[0.98] shadow-sm"
          >
            Ver Más
          </NuxtLink>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

// Base de datos simulada con los campos exactos de tu diseño
const mediaItems = ref([
  {
    id: 1,
    tagLeft: 'ESAN',
    tagRight: 'Convocatoria',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    meta: 'Noticias ESAN',
    date: '11 de Marzo 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    tagLeft: 'ESAN',
    tagRight: 'Convocatoria',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    meta: 'Noticias ESAN',
    date: '11 de Marzo 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    tagLeft: 'ESAN',
    tagRight: 'Convocatoria',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    meta: 'Noticias ESAN',
    date: '11 de Marzo 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop'
  }
])
</script>

<style scoped>
/* Recortes geométricos con propiedades CSS puras para mantener la ligereza táctil */
.clip-arrow-right {
  clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
}

.clip-arrow-left {
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
}
</style>