<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      ref="modalRef"
      class="fixed top-1/2 left-1/2 w-60 h-60 bg-pink-500 -translate-x-1/2 -translate-y-1/2"
    >
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const modalRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const isFirstClick = ref(true)

const open = () => {
  isOpen.value = true
  isFirstClick.value = true
}

const close = () => {
  isOpen.value = false
}

const handleClickOutside = (e: MouseEvent) => {
  if (!isOpen.value) return

  if (isFirstClick.value) {
    isFirstClick.value = false
    return
  }

  if (modalRef.value && !modalRef.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))

defineExpose({ open, close })
</script>