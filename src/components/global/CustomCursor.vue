<template>
  <div 
    class="custom-cursor hidden md:flex" 
    :style="{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})` }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(-100)
const y = ref(-100)
const isHovering = ref(false)

const onMouseMove = (e) => {
  x.value = e.clientX
  y.value = e.clientY
  
  // Checking if hovering over interactive element
  const target = e.target
  if (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('select') || target.closest('textarea')) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
}

/* Hide default cursor on desktop when using custom */
@media (min-width: 768px) {
  :global(body) {
    cursor: none;
  }
  :global(a), :global(button), :global(input), :global(select), :global(textarea) {
    cursor: none !important;
  }
}
</style>
