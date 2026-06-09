<template>
  <div class="w-full max-w-md mx-auto p-6 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center">
    
    <div class="w-full bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50 flex items-center justify-center">
      
      <button 
        @click="handleClick"
        class="relative w-full py-3 px-6 text-center font-semibold text-lg md:text-xl transition-all duration-200 hover:opacity-90 active:scale-[0.99] group rounded-xl bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E] p-[2px]"
      >
        <div class="w-full h-full bg-white rounded-[10px] py-2 px-4 flex items-center justify-center">
          
          <span class="bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E] bg-clip-text text-transparent group-hover:scale-[1.01] transition-transform">
            Publique su Actividad
          </span>

        </div>
      </button>

    </div>

  </div>
</template>

<script setup>
const emit = defineEmits(['click'])

const handleClick = () => {
  // Emite el evento por si necesitas abrir un formulario o redirigir
  emit('click')
}
</script>