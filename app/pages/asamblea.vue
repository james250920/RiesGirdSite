<script setup lang="ts">
import initAsamblea from '~/components/asamblea/initAsamblea.component.vue';
import Detail from '~/components/asamblea/detail.component.vue';
import MediaRegistry from '~/components/asamblea/mediaRegistry.component.vue';
import EventSidebarDetails from '~/components/asamblea/eventSidebarDetails.compoent.vue';


</script>

<template>
  <initAsamblea />

  <div class="w-full max-w-[1400px] mx-auto px-4 md:px-8 space-y-12 py-10">

    <main class="two-column-layout">

      <div class="left-column">
        <div class="content-wrapper">
          <Detail />
        </div>

        <div class="content-wrapper mt-12">
          <MediaRegistry />
        </div>

        
      </div>

      <aside class="right-column">
        <div class="content-wrapper">
          <EventSidebarDetails />
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