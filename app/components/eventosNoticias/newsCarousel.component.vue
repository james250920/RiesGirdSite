<template>
  <section class="w-full max-w-6xl mx-auto px-4 py-12 overflow-hidden select-none">
    
    <div class="mb-10 inline-block relative pb-3">
      <h2 class="text-3xl font-bold text-black tracking-tight">
        Noticias Institucionales
      </h2>
      <div class="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E]"></div>
    </div>

    <div class="relative w-full overflow-hidden mask-edges">
      <div class="flex space-x-6 w-max animate-marquee hover:pause-animation">
        
        <div 
          v-for="(item, index) in [...newsItems, ...newsItems]" 
          :key="`${item.id}-${index}`"
          class="flex-none w-[290px] md:w-[340px] bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <div class="flex justify-between items-center mb-5">
              <div class="relative bg-[#D9043D] text-white font-bold text-xs px-4 py-1.5 rounded-l-sm clip-arrow-right pr-6">
                {{ item.tagLeft }}
              </div>
              <div class="relative bg-white text-[#254C9E] border border-gray-200 font-medium text-xs px-4 py-1.5 rounded-r-sm clip-arrow-left pl-6 shadow-sm">
                <span class="text-[#D9043D] font-semibold">{{ item.tagRight }}</span>
              </div>
            </div>

            <h3 class="text-gray-900 font-bold text-base md:text-lg text-center leading-snug mb-3 line-clamp-3">
              {{ item.title }}
            </h3>

            <p class="text-xs text-center text-gray-400 mb-5">
              {{ item.meta }} — {{ item.date }}
            </p>
          </div>

          <div class="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-inner bg-gray-50">
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

    <div class="w-full h-[2px] bg-gray-200 mt-6 relative">
      <div class="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#D9043D] to-[#254C9E]"></div>
    </div>

    <div class="mt-10 flex justify-center">
      <NuxtLink 
        to="/noticias"
        class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E] text-white font-medium text-sm md:text-base shadow-md hover:opacity-95 transition-all active:scale-95"
      >
        Buscar más sobre las Noticias del día a día
      </NuxtLink>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const newsItems = ref([
  {
    id: 1,
    tagLeft: 'ESAN',
    tagRight: 'Noticia',
    title: 'Lanzamiento de Semana de la Gestión Integral del Riesgo de Desastres 2025',
    meta: 'Noticias ESAN',
    date: '11 de Marzo 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop' 
  },
  {
    id: 2,
    tagLeft: 'ESAN',
    tagRight: 'Noticia',
    title: 'Conferencia Internacional sobre Resiliencia Urbana y Cambio Climático',
    meta: 'Noticias ESAN',
    date: '14 de Marz 2025',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    tagLeft: 'ESAN',
    tagRight: 'Noticia',
    title: 'Nuevas Alianzas Estratégicas para el Desarrollo Sostenible Regional',
    meta: 'Noticias ESAN',
    date: '18 de Marzo 2025',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop'
  }
])
</script>

<style scoped>
/* 1. Animación del desplazamiento horizontal */
.animate-marquee {
  /* Ajusta el tiempo (ej. 30s) para hacerlo más lento o más rápido */
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    /* Se desplaza exactamente la mitad (la primera lista de elementos) */
    transform: translateX(calc(-50% - 12px)); /* 12px compensa la mitad del espacio del gap (space-x-6) */
  }
}

/* 2. Pausar al pasar el mouse por encima para que el usuario pueda leer bien */
.hover\:pause-animation:hover {
  animation-play-state: paused;
}

/* 3. Estilos de recortes geométricos de las tarjetas */
.clip-arrow-right {
  clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
}
.clip-arrow-left {
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%);
}

/* 4. Opcional: Efecto difuminado suave en los bordes izquierdo y derecho para un look más pulido */
.mask-edges {
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}
</style>