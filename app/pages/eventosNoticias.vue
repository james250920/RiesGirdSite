<script setup lang="ts">
import InitEventosNoticias from '~/components/eventosNoticias/initeventosNoticias.component.vue';
import CarouselAcademic from '~/components/eventosNoticias/carouselAcademic.component.vue';
import NewsCarousel from '~/components/eventosNoticias/newsCarousel.component.vue';
import ProximosEventos from '~/components/eventosNoticias/proximosEventos.component.vue';
import Convocatorias from '~/components/eventosNoticias/convocatorias.component.vue';
import LatestNewsList from '~/components/eventosNoticias/latestNewsList.component.vue';
import SearchBox from '~/components/eventosNoticias/searchBox.component.vue';
import PublishActivityBox from '~/components/eventosNoticias/publishActivityBox.component.vue';
</script>

<template>
  <InitEventosNoticias />

  <div class="w-full max-w-[1400px] mx-auto px-4 md:px-8 space-y-12 py-10">
    
    <div class="w-full">
      <div class="bg-gradient-to-r from-[#D9043D] via-[#653E9B] to-[#254C9E] rounded-xl p-8 md:p-10 text-center shadow-lg">
        <p class="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-4xl mx-auto balance-text">
          Entérate de las últimas novedades, participa en nuestros próximos encuentros y únete a las iniciativas que impulsan el desarrollo territorial sostenible.
        </p>
      </div>
    </div>

    <div class="content-wrapper">
      <CarouselAcademic />    
    </div>

    <main class="two-column-layout">

      <div class="left-column">
        <div class="content-wrapper">
          <ProximosEventos />
        </div>

        <div class="content-wrapper mt-12">
          <Convocatorias />
        </div>

        <div class="content-wrapper mt-12">
          <NewsCarousel />
        </div>
      </div>

      <aside class="right-column">
        <div class="content-wrapper">
          <LatestNewsList />
        </div>
        <div class="content-wrapper mt-4">
          <SearchBox />
        </div>
        <div class="content-wrapper mt-4">
          <PublishActivityBox />
        </div>
      </aside>

    </main>
  </div>
</template>

<style scoped>
.balance-text {
  text-wrap: balance;
}

.two-column-layout {
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.right-column {
  width: 400px;
  flex-shrink: 0;
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  width: 100%;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

/* Ajustes para pantallas pequeñas y móviles */
@media (max-width: 1024px) {
  .two-column-layout {
    flex-direction: column;
  }

  .right-column {
    width: 100%;
    position: static;
  }
  
  .content-wrapper {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    padding: 20px 15px;
  }
}
</style>