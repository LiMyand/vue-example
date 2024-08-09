<template>
  <div class="p-10">
    <div class="w-full border-2 border-blue-400 border-solid relative h-5">
      <div
        class="w-8 h-4 bg-blue-500 absolute"
        :style="{ left: progressLeft + '%' }"
        @click="clickToAnimate"
      ></div>
    </div>
    <div class="flex mt-10">
      <div class="mr-4">
        <button @click="setTiming(linear)">直线</button>
      </div>
      <div class="mr-4">
        <button @click="setTiming(quad)">n次幂</button>
      </div>
      <div class="mr-4">
        <button @click="setTiming(circ)">圆弧</button>
      </div>
      <div class="mr-4">
        <button @click="setTiming(back)">反弹(弓箭射击)</button>
      </div>
      <div class="mr-4">
        <button @click="setTiming(bounce)">弹跳</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 进度条左移距离的引用
const progressLeft = ref(0);

// 定义所有的timing函数
const linear = (timeFraction: number) => timeFraction; // 线性时间函数

// n次幂
const quad = (timeFraction: number) => Math.pow(timeFraction, 2);

// 圆弧
const circ = (timeFraction: number) => 1 - Math.sin(Math.acos(timeFraction));

// 反弹(弓箭射击)
const back = (timeFraction: number) => {
  const x = 1.5;
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
};

// 弹跳
const bounce = (timeFraction: number) => {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return (
        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      );
    }
  }
  return 0; // 确保有一个返回值
};

// 当前使用的timing函数
const currentTiming = ref<(timeFraction: number) => number>(linear);

// 动画函数
const animate = ({
  timing,
  draw,
  duration,
}: {
  timing: (timeFraction: number) => number;
  draw: (progress: number) => void;
  duration: number;
}) => {
  let start = performance.now();

  const frame = (time: number) => {
    // 计算时间分数
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // 计算动画进度
    const progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
};

// 设置当前使用的timing函数
const setTiming = (timingFunction: (timeFraction: number) => number) => {
  currentTiming.value = timingFunction;
};

// 点击时启动动画
const clickToAnimate = () => {
  animate({
    duration: 2000,
    timing: currentTiming.value,
    draw: (progress: number) => {
      progressLeft.value = progress * 100; // 更新左移距离
    },
  });
};
</script>
