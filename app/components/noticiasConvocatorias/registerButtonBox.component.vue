<template>
  <div class="flex items-center justify-center py-6">
    
    <NuxtLink 
      :to="googleFormUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="inscribirse-btn"
    >
      <span>Inscribirse</span>
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfXXXXXXXXX/viewform'
</script>

<style scoped>
.inscribirse-btn {
  position: relative;
  width: 260px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border-radius: 16px;

  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;

  overflow: hidden;
  transition: all 0.25s ease;

  border: 1px solid transparent;

  background-image:
    linear-gradient(white, white),
    linear-gradient(90deg, #ff2d55 0%, #3b5bdb 100%);

  background-origin: border-box;
  background-clip: padding-box, border-box;

  box-shadow:
    0 6px 18px rgba(0, 0, 0, 0.05);
}

.inscribirse-btn span {
  background: linear-gradient(90deg, #ff2d55 0%, #3b5bdb 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  letter-spacing: 0.3px;
}

.inscribirse-btn:hover {
  transform: translateY(-2px);
  box-shadow:
    0 10px 24px rgba(59, 91, 219, 0.12);
}

.inscribirse-btn:active {
  transform: scale(0.98);
}

@media (max-width: 640px) {
  .inscribirse-btn {
    width: 100%;
    max-width: 260px;
    height: 64px;
    font-size: 1.2rem;
  }
}
</style>