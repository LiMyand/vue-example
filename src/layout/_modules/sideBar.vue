<template>
  <div id="sideBarContent">
    <div>
      <div class="w-full h-20"></div>
      <sideBarItem :routerList="routerList"></sideBarItem>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import sideBarItem from './sideBarItem.vue';

const routerList = ref([])
const router = useRouter()

const buildRouterList = (routes, parentIndex = '', prefix) => {
  return routes.map((route, index) => {
    const currentPrefix = prefix ? `${prefix}` : ''
    const currentIndex = parentIndex ? `${parentIndex}.${index}` : `${index}`
    const routeObj = {
      path: currentPrefix == '' ? route.path : currentPrefix + '/' + route.path,
      name: route.meta?.title || 'Unnamed Route ' + currentIndex,
      children: []
    }
    if (route.children) {
      routeObj.children = buildRouterList(route.children, currentIndex, route.path)
    }
    return routeObj
  })
}

routerList.value = buildRouterList(router.options.routes)
</script>
