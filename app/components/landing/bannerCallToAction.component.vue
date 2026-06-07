<script setup>
const redirigirRegistro = () => {
  // Aquí puedes vincular la redirección a tu formulario de inscripción o contacto
  useRouter().push('/registro') 
}
</script>

<template>
  <div class="cta-container">
    <button class="cta-banner-button" @click="redirigirRegistro">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-user-add">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
      </svg>

      <span class="cta-text">Únete a la Red</span>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="icon-arrow">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* --- CONTENEDOR DEL BANNER --- */
.cta-container {
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 10px;
}

/* --- BOTÓN PRINCIPAL CON GRADIENTE 1:1 --- */
.cta-banner-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  /* Gradiente exacto que transiciona del rojo de la marca al azul oscuro */
  background: linear-gradient(135deg, #db143c 0%, #7e22ce 50%, #25529a 100%);
  
  border: none;
  border-radius: 12px; /* Redondeado idéntico a tu captura */
  padding: 18px 30px;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  /* Sombra sutil para darle profundidad */
  box-shadow: 0 4px 20px rgba(219, 20, 60, 0.15);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
}

/* --- TEXTO INTERNO --- */
.cta-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* --- ICONOS (SVG) --- */
.icon-user-add {
  width: 26px;
  height: 26px;
  transition: transform 0.3s ease;
}

.icon-arrow {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

/* --- EFECTOS INTERACTIVOS (HOVER) --- */
.cta-banner-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 82, 154, 0.25);
}

/* Animación sutil de los iconos al hacer hover */
.cta-banner-button:hover .icon-user-add {
  transform: scale(1.1);
}

.cta-banner-button:hover .icon-arrow {
  transform: translateX(5px); /* La flecha se mueve hacia la derecha apuntando a la acción */
}

.cta-banner-button:active {
  transform: translateY(1px);
}

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
  .cta-banner-button {
    padding: 15px 20px;
    border-radius: 10px;
  }
  
  .cta-text {
    font-size: 1.15rem;
  }

  .icon-user-add {
    width: 22px;
    height: 22px;
  }

  .icon-arrow {
    width: 16px;
    height: 16px;
  }
}
</style>