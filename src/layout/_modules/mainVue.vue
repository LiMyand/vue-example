<template>
  <div id="mainContent" class=" overflow-auto">
    <div>
      <slot></slot> <!-- 默认插槽 -->
      <slot name="footer"></slot> <!-- 具名插槽 -->
    </div>
  </div>
</template>

<script setup lang="ts">
</script>