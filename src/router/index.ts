import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 定义基础路由
const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue'),
  },
];

// 合并所有路由
const routes: RouteRecordRaw[] = [...baseRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
