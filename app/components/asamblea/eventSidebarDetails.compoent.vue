<template>
  <aside class="w-full max-w-sm mx-auto p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-sm flex flex-col space-y-6">
    
    <button 
      @click="goBack"
      class="w-full bg-[#CCCCCC] hover:bg-[#B3B3B3] text-gray-700 font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors active:scale-[0.99]"
    >
      <svg class="w-4 h-4 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <span>Volver</span>
    </button>

    <div class="text-center">
      <h3 class="text-gray-600 font-bold text-lg mb-4">Comparte:</h3>
      
      <div class="flex justify-center items-center gap-3">
        <a href="#" class="w-12 h-12 rounded-xl bg-[#EBF2FE] hover:bg-[#D4E4FC] flex items-center justify-center text-[#1877F2] transition-colors" aria-label="Compartir en Facebook">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
          </svg>
        </a>

        <a href="#" class="w-12 h-12 rounded-xl bg-[#EBF2FE] hover:bg-[#D4E4FC] flex items-center justify-center text-gray-800 transition-colors" aria-label="Compartir en X">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        <a href="#" class="w-12 h-12 rounded-xl bg-[#EBF2FE] hover:bg-[#D4E4FC] flex items-center justify-center text-[#0A66C2] transition-colors" aria-label="Compartir en LinkedIn">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

        <a href="#" class="w-12 h-12 rounded-xl bg-[#EBF2FE] hover:bg-[#D4E4FC] flex items-center justify-center text-[#25D366] transition-colors" aria-label="Compartir en WhatsApp">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.666.988 3.307 1.48 5.357 1.481 5.461 0 9.903-4.43 9.907-9.885.002-2.643-1.027-5.127-2.899-7c-1.872-1.873-4.36-2.903-7.007-2.904-5.463 0-9.903 4.43-9.907 9.886-.001 2.038.522 4.017 1.516 5.7l-.993 3.626 3.732-.978z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="space-y-3.5">
      
      <div class="bg-[#EBF2FE] border border-blue-50/50 rounded-2xl p-4 flex items-center space-x-4 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
        <div class="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#D9043D] shadow-sm flex-shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h4 class="text-gray-500 font-bold text-sm leading-tight">Fecha:</h4>
          <p class="text-gray-700 font-medium text-base">Marzo de 2026</p>
        </div>
      </div>

      <div class="bg-[#EBF2FE] border border-blue-50/50 rounded-2xl p-4 flex items-center space-x-4 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
        <div class="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#254C9E] shadow-sm flex-shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h4 class="text-gray-500 font-bold text-sm leading-tight">Lugar:</h4>
          <p class="text-gray-700 font-medium text-base">Marzo de 2026</p>
        </div>
      </div>

      <div class="bg-[#EBF2FE] border border-blue-50/50 rounded-2xl p-4 flex items-center space-x-4 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
        <div class="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#653E9B] shadow-sm flex-shrink-0">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div>
          <h4 class="text-gray-500 font-bold text-sm leading-tight">Institución Anfitriona</h4>
          <p class="text-gray-700 font-medium text-base">Marzo de 2026</p>
        </div>
      </div>

    </div>

  </aside>
</template>

<script setup lang="ts">
const router = useRouter()

const goBack = () => {
  // Retorna a la página de listado general utilizando el router nativo de Nuxt
  router.back()
}
</script>