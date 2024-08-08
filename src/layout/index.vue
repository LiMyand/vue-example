<template>
  <div id="layoutContent" class="flex h-screen w-screen">
    <sideBar class=" min-w-48 bg-gray-800 text-white" />
    <div id="mainContent" class="flex-grow bg-gray-100 text-gray-900">
      <mainVue class="w-full h-full">
        <template #default>
          <router-view></router-view>
        </template>
        <template #footer>
          <footerVue />
        </template>
      </mainVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import sideBar from './_modules/sideBar.vue';
import mainVue from './_modules/mainVue.vue';
import footerVue from './_modules/footerVue.vue';
</script>
