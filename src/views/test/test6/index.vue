<template>
  <div class="p-10">
    <div>
      <p>
        setInterval --> 如果用 setInterval 会导致页面卡顿，因为每次调用都会生成一个新的定时器，而不是覆盖之前的定时器
        一个 setInterval 动画的demo
      </p>
    </div>
    <div>
      <img src="https://js.cx/clipart/train.gif" 
           alt="一个小火车的gif图片" 
           ref="trainRef" 
           @click="trainClickToRun"
           class="relative"
      >
    </div>
    <div>相对于setInterval出现的问题，可以使用 requestAnimationFrame 函数来解决，下面展示的数据可以使得动画跟页面保持为一个相对一样的帧率</div>
    <pre>{{ showData }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 这块是火车移动的逻辑
const trainRef = ref<HTMLElement | null>(null);
const isAnimationRunning = ref(false);

const trainClickToRun = () => {
  if (isAnimationRunning.value) {
    return;
  }
  isAnimationRunning.value = true;
  let start = Date.now();

  let timer = setInterval(() => {
    let timePassed = Date.now() - start;

    if (timePassed > 2000) {
      clearInterval(timer);
      isAnimationRunning.value = false;
      return;
    }
    if (trainRef.value) {
      trainRef.value.style.left = timePassed / 5 + 'px';
    }
  }, 20);
}

// 这块是 requestAnimationFrame 的逻辑
const showData = ref('');
let prev = performance.now();
let times = 0;
let animationFrameId: number;

const measure = (time: number) => {
  showData.value += `${Math.floor(time - prev)}ms\n`;
  prev = time;

  if (times++ < 10) {
    animationFrameId = requestAnimationFrame(measure);
  }
}

onMounted(() => {
  animationFrameId = requestAnimationFrame(measure);
});

onUnmounted(() => {
  // 取消回调的执行
  cancelAnimationFrame(animationFrameId);
});
</script>
