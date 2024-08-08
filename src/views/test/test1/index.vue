<template>
  <div id="sideBarContent">
    <div class="p-10">
      <span>这个是一个测试页面</span>
      <br>
      <span>用于实现功能: 一个元素打开后点击页面的空白处关闭</span>
    </div>
    <button @click="modalRef.open" class="m-10">打开弹窗</button>
    <button @click="modalRef.close">关闭弹窗</button>
    <modal ref="modalRef"></modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import modal from './_modules/modal.vue';

const modalRef = ref(null)
</script>