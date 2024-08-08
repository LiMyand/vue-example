<template id="sideBarItem">
  <ul class="list-none w-full">
    <li v-for="route in routerList" :key="route.path" class="pl-4">
      <div @click="clickSideBar(route)" class="flex justify-between items-center cursor-pointer p-2 rounded">
        <span class="text-lg font-semibold">{{ route.name }}</span>
        <span>
          <svgIcon name="expand" class="w-4 h-4" v-if="route.children.length > 0 && !route.isExpanded" />
          <svgIcon name="collapse" class="w-4 h-4" v-else-if="route.children.length > 0 && route.isExpanded" />
        </span>
      </div>
      <sideBarItem :routerList="route.children" v-if="route.children.length > 0 && route.isExpanded"/>
    </li>
  </ul>
</template>

<script setup lang="ts" name="sideBarItem">
import { ref, toRefs } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps<{
  routerList: RouteRecordRaw[]
}>()
const { routerList } = toRefs(props)

const clickSideBar = (route: any) => {
  if (route.children.length > 0) {
    route.isExpanded = !route.isExpanded
  } else {
    router.push(route.path)
  }
}
</script>