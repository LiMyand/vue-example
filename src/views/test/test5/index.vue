<!-- @/views/test/test5/index.vue -->
<template>
  <div id="test5ContentBox" class="w-full h-screen flex justify-center " >
    <div id="showMessageContent " class="h-full w-1/2">
      <div class="flex justify-center pt-16">   
        <div class=" bg-blue-200 py-2 px-5 rounded-3xl">
          Subscribe on my email newsletter with css tips💪💪💪
        </div>
      </div>
      <div class="flex justify-center relative top-1/2 -translate-y-1/2">
        <div>
          <span class="text-2xl">动画 --> 菜单打开变为 ❌ 然后加上涟漪</span>
          <div class="flex justify-center">
            点击下面的按钮查看动画
          </div>
        </div>
      </div>
      <div id="mainCssAnimationContent" class="flex justify-center" >  
        <div class="w-20 h-10 bg-blue-300 flex justify-center items-center rounded-t-full  absolute bottom-0 z-1000"  @click="clickHandle($event)">
          <div class="menu" :class="{ 'menu-closeable': isMenuOpen }">
            <span :class="{ 'menu-closeable': isMenuOpen }"></span>
            <span :class="{ 'menu-closeable': isMenuOpen }"></span>
            <span :class="{ 'menu-closeable': isMenuOpen }"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const isMenuOpen = ref(false);
const ars = reactive({
  x: 0,
  y: 0,
})

const clickHandle = (e) => {
  isMenuOpen.value = !isMenuOpen.value;
  ars.x = e.clientX;
  ars.y = e.clientY;
}

document.documentElement.animate(
  {
    duration: 300,
    easing: 'ease-in',
  }
)
</script>

<style scoped lang="scss">
$menu-size: 26px;
$menu-stroke: 4px;
$menu-stroke-color: #fff;
$menu-animation-duration: 0.3s;
.menu {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: $menu-size;

  span {
    width: $menu-size;
    height: $menu-stroke;
    display: block;
    transition-property: opacity, transform, top;
    transition-duration: $menu-animation-duration;
    background-color: rgb(255, 255, 255);
  }

  span:nth-child(2) {
    transition-duration: 0.1s;
  }
}
.menu-closeable {
  position: relative;
  span:nth-child(1) {
    position: absolute;
    transform: rotateZ(45deg);
    top: 13px;
  }
  span:nth-child(2) {
    opacity: 0;
  }
  span:nth-child(3) {
    position: absolute;
    transform: rotateZ(-45deg);
    top: 13px;
  }
}
.fullScreenColor {
  background-color: #93c5fd;
}


</style>