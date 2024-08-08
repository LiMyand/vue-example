<template>
  <div id="sideBarContent" class="p-10">
    <div>
      全屏功能测试(原生) --> 使用原生的 API 和 Vue 3 的特性实现某一部分的全屏功能
    </div>
  </div>
  <div ref="fullscreenElement" :style="contentStyle" class="content">
    <h3>这是第一个关于部分元素全屏的功能实现</h3>
    <h3>使用 Vue 3 的特性以及 CSS 来实现</h3>
    <button @click="toggleFullscreen" class="m-10">
      {{ isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// 定义响应式引用
const fullscreenElement = ref<HTMLElement | null>(null);
const isFullscreen = ref(false);

// 计算样式，根据全屏状态动态调整，这块样式并不是全屏功能的核心，只是为了更好的展示效果
// 可以根据实际需求进行调整
const contentStyle = computed(() => ({
  padding: '20px',
  backgroundColor: '#f0f0f0',
  border: '1px solid #ccc',
  textAlign: 'center',
  width: isFullscreen.value ? '100vw' : 'auto',
  height: isFullscreen.value ? '100vh' : 'auto',
  position: isFullscreen.value ? 'fixed' : 'static',
  top: isFullscreen.value ? '0' : 'auto',
  left: isFullscreen.value ? '0' : 'auto',
  zIndex: isFullscreen.value ? '9999' : '1',
}));

// 全屏切换功能
const toggleFullscreen = async () => {
  try {
    if (fullscreenElement.value && !isFullscreen.value) {
      await fullscreenElement.value.requestFullscreen();
      isFullscreen.value = true;
    } else {
      await document.exitFullscreen();
      isFullscreen.value = false;
    }
  } catch (err) {
    console.error("Failed to toggle fullscreen mode:", err);
  }
  console.log('isFullscreen --> ', isFullscreen.value)
};
</script>
