<template>
  <div id="VirtualList" class="p-10 w-full">
    <div class="h-60 text-2xl">
      <div>一个虚拟滚动列表</div>
      <div>除了虚拟列表，添加了缓冲区，同时添加了防抖函数，确保性能优先，保障用户体验。</div>
      <div>加载了1百万条数据，但是下滑只能加载到55万条</div>
    </div>
    <div id="scrollList">
      <div ref="containerRef" class="container" @scroll="onScroll">
        <div class="phantom" :style="{ height: phantomHeight + 'px' }"></div>
        <div class="content" :style="{ transform: getTransform }">
          <div v-for="item in visibleData" :key="item.id" class="content-item" :style="itemStyle">
            {{ item.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ITEM_HEIGHT, BUFFER_SIZE, LIST_LENGTH } from './data/base'; 

// 引用和响应式状态，用于滚动和渲染计算
const containerRef = ref<HTMLElement | null>(null);
const startIndex = ref(0);
const endIndex = ref(0);
const startOffset = ref(0);

// 创建要显示的数据列表
const listData = Array.from({ length: LIST_LENGTH }, (_, index) => ({ id: index }));

// 计算幽灵元素的高度以实现滚动
const phantomHeight = LIST_LENGTH * ITEM_HEIGHT;

// 计算视口中可见项目的数量
const visibleCount = ref(0);

// 计算 CSS transform 属性以移动可见项目
const getTransform = computed(() => `translate3d(0,${startOffset.value}px,0)`);

// 计算可见的数据，包括缓冲区中的项目
const visibleData = computed(() => {
  const start = Math.max(0, startIndex.value - BUFFER_SIZE);
  const end = Math.min(LIST_LENGTH, endIndex.value + BUFFER_SIZE);
  return listData.slice(start, end);
})

// 列表中每个项目的样式
const itemStyle = {
  height: `${ITEM_HEIGHT}px`,
  lineHeight: `${ITEM_HEIGHT}px`
}

// 初始化可见项目信息，根据容器的高度
const initializeVisibleInfo = () => {
  if (!containerRef.value) return;
  const containerHeight = containerRef.value.clientHeight;
  visibleCount.value = Math.ceil(containerHeight / ITEM_HEIGHT);
  endIndex.value = startIndex.value + visibleCount.value;
}

// 处理滚动事件以更新可见索引和偏移量
const onScroll = () => {
  if (!containerRef.value) return;
  const scrollTop = containerRef.value.scrollTop;
  startIndex.value = Math.floor(scrollTop / ITEM_HEIGHT);
  endIndex.value = startIndex.value + visibleCount.value;
  startOffset.value = scrollTop - (scrollTop % ITEM_HEIGHT);
}

// 防抖函数，用于限制函数的调用频率
function debounce(fn: Function, delay: number) {
  let timer: number | null = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay) as unknown as number;
  }
}

// 防抖处理的 resize 事件
const debouncedResize = debounce(initializeVisibleInfo, 200);

// 组件挂载时初始化，并且添加防抖
onMounted(() => {
  initializeVisibleInfo();
  window.addEventListener('resize', debouncedResize);
})

// 组件卸载时清理
onUnmounted(() => {
  window.removeEventListener('resize', debouncedResize);
})
</script>

<style scoped>
.container {
  width: 800px;
  height: 300px;
  overflow: auto;
  position: relative;
  background-color: aqua;
}
.phantom {
  width: 100%;
}
.content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: yellow;
  will-change: transform;
}
.content-item {
  box-sizing: border-box;
  border: 1px solid #ddd;
  text-align: center;
  color: #333;
}
</style>
