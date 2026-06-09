<template>
  <div class="w-full max-w-md mx-auto p-4 bg-[#F8FAFC] rounded-2xl shadow-sm border border-gray-100">
    
    <div class="w-full bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E] rounded-xl py-3 text-center mb-6 shadow-sm">
      <h2 class="text-white font-bold text-xl tracking-wide underline decoration-white underline-offset-4">
        Últimas Novedades
      </h2>
    </div>

    <div class="space-y-4">
      <div 
        v-for="item in newsList" 
        :key="item.id"
        class="bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50 flex items-start space-x-3 transition-all hover:shadow-md"
      >
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-2 mb-2">
            <div class="relative bg-[#D9043D] text-white font-bold text-[10px] px-3 py-1 rounded-l-sm clip-arrow-right pr-4 select-none">
              {{ item.tagLeft }}
            </div>
            <div class="relative bg-white border border-gray-200 text-[10px] px-3 py-1 rounded-r-sm clip-arrow-left pl-4 shadow-sm select-none">
              <span :class="getTagColorClass(item.tagRight)" class="font-bold">
                {{ item.tagRight }}
              </span>
            </div>
          </div>

          <h3 class="text-gray-900 font-bold text-sm leading-snug line-clamp-3 mb-2">
            {{ item.title }}
          </h3>

          <p class="text-xs text-gray-400 font-medium">
            {{ item.timeAgo }}
          </p>
        </div>

        <div class="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
          <img 
            :src="item.image" 
            :alt="item.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Base de datos de prueba según los tipos que se ven en tu imagen
const newsList = ref([
  {
    id: 1,
    tagLeft: 'ESAN',
    tagRight: 'Noticia',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    timeAgo: 'Hace 8 horas',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    tagLeft: 'ESAN',
    tagRight: 'Evento',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    timeAgo: 'Hace 8 horas',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 3,
    tagLeft: 'ESAN',
    tagRight: 'Convocatoria',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    timeAgo: 'Hace 8 horas',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 4,
    tagLeft: 'ESAN',
    tagRight: 'Noticia',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    timeAgo: 'Hace 8 horas',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop'
  }
])

// Función utilitaria para cambiar dinámicamente el color del texto según la categoría
const getTagColorClass = (tag) => {
  switch (tag.toLowerCase()) {
    case 'noticia':
      return 'text-[#254C9E]'
    case 'evento':
      return 'text-[#653E9B]'
    case 'convocatoria':
      return 'text-[#D9043D]'
    default:
      return 'text-gray-600'
  }
}
</script>

<style scoped>
/* Recortes geométricos idénticos para los extremos de los badges */
.clip-arrow-right {
  clip-path: polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%);
}

.clip-arrow-left {
  clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 12% 100%, 0% 50%);
}
</style>