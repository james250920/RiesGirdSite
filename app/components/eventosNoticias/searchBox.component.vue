<template>
  <div class="w-full max-w-md mx-auto p-4 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm">
    
    <div class="w-full bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E] rounded-xl py-3.5 text-center mb-4 shadow-sm">
      <h2 class="text-white font-bold text-lg md:text-xl tracking-wide underline decoration-white underline-offset-4">
        Busque las últimas novedades
      </h2>
    </div>

    <div class="bg-white rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50">
      <div class="relative w-full">
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Buscar..." 
          @input="handleSearch"
          class="w-full bg-[#EFEFEF] text-gray-700 placeholder-gray-400 font-medium text-center py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#653E9B]/30 transition-all text-base md:text-lg"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado reactivo para capturar el texto introducido
const searchQuery = ref('')

// Definimos los eventos que puede emitir este componente hacia el padre
const emit = defineEmits(['search'])

const handleSearch = () => {
  // Envía el texto en tiempo real al componente padre si es necesario
  emit('search', searchQuery.value)
}
</script>