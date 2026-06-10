<template>
  <div class="w-full max-w-6xl mx-auto px-4 py-8 md:py-12 relative select-none">
    
    <div class="relative overflow-hidden min-h-[450px] md:min-h-[500px]">
      <transition-group name="fade">
        <div 
          v-for="(slide, index) in slides" 
          v-show="currentIndex === index"
          :key="slide.id"
          class="w-full flex flex-col items-center text-center space-y-4 md:space-y-6"
        >
          <div class="max-w-3xl mx-auto px-2 md:px-4 space-y-3 md:space-y-4">
            <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              {{ slide.title }}
            </h2>
            <p class="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              {{ slide.description }}
            </p>
            <p class="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800">
              Por: <span class="font-bold">{{ slide.author }}</span>
            </p>
          </div>

          <div class="w-full max-w-4xl px-2 md:px-12">
            <div class="overflow-hidden rounded-2xl shadow-md border border-gray-100 aspect-[16/9] md:aspect-[16/8]">
              <img 
                :src="slide.image" 
                :alt="slide.title" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </transition-group>
    </div>

    <button 
      @click="prevSlide"
      class="absolute left-2 md:left-4 top-[65%] md:top-[60%] transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#D9043D] to-[#254C9E] p-[2px] transition-transform active:scale-95 shadow-md hover:opacity-90 z-10"
      aria-label="Anterior"
    >
      <div class="w-full h-full bg-white rounded-full flex items-center justify-center group">
        <svg class="w-5 h-5 text-[#D9043D] group-hover:text-[#254C9E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </button>

    <button 
      @click="nextSlide"
      class="absolute right-2 md:right-4 top-[65%] md:top-[60%] transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#D9043D] to-[#254C9E] p-[2px] transition-transform active:scale-95 shadow-md hover:opacity-90 z-10"
      aria-label="Siguiente"
    >
      <div class="w-full h-full bg-white rounded-full flex items-center justify-center group">
        <svg class="w-5 h-5 text-[#254C9E] group-hover:text-[#D9043D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>

    <div class="flex justify-center items-center space-x-2 mt-6">
      <button
        v-for="(slide, index) in slides"
        :key="'dot-' + slide.id"
        @click="goToSlide(index)"
        class="w-2.5 h-2.5 rounded-full transition-all duration-300"
        :class="currentIndex === index ? 'bg-gradient-to-r from-[#D9043D] to-[#254C9E] scale-125' : 'bg-gray-300'"
        :aria-label="'Ir a la diapositiva ' + (index + 1)"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Datos ficticios estructurados igual a tu imagen para probar de inmediato
const slides = ref([
  {
    id: 1,
    title: 'Impulsando la cooperación académica entre universidades',
    description: 'Representantes de diversas instituciones participaron en un encuentro académico orientado a fortalecer la colaboración interuniversitaria y promover nuevas iniciativas de investigación conjunta.',
    author: 'Universidad Nacional Mayor de San Marcos',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80' // Cambia por tu ruta local o URL real
  },
  {
    id: 2,
    title: 'Segunda Iniciativa de Innovación Sostenible',
    description: 'Mesas de trabajo enfocadas en el desarrollo tecnológico de las regiones y la transferencia de conocimiento científico aplicable.',
    author: 'Universidad de Ingeniería & Tecnología',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Alianzas Estratégicas Internacionales 2026',
    description: 'Firmas de convenios bilaterales para el intercambio estudiantil y docente con las principales escuelas de América Latina.',
    author: 'Red de Universidades Aliadas',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80'
  }
])

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

const goToSlide = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
/* Animación de transición suave (Fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
  width: 100%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>