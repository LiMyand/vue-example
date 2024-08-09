import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 定义基础路由
const baseRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页' },
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    meta: { title: '测试' },
    children: [
      {
        path: 'sub1',
        name: 'Sub1',
        component: () => import('@/views/test/test1/index.vue'),
        meta: { title: '1.ClickOutSide' },
      },
      {
        path: 'sub2',
        name: 'Sub2',
        component: () => import('@/views/test/test2/index.vue'),
        meta: { title: '2.FullScreen' },
      },
      {
        path: 'sub3',
        name: 'Sub3',
        component: () => import('@/views/test/test3/index.vue'),
        meta: { title: '3.虚拟列表' },
      },
      {
        path: 'sub4',
        name: 'Sub4',
        component: () => import('@/views/test/test4/index.vue'),
        meta: { title: '4.海浪动画' },
      },
      {
        path: 'sub5',
        name: 'Sub5',
        component: () => import('@/views/test/test5/index.vue'),
        meta: { title: '5. progress nav' },
      },
      {
        path: 'sub6',
        name: 'Sub6',
        component: () => import('@/views/test/test6/index.vue'),
        meta: { title: '6. 动画' },
      },
      {
        path: 'sub7',
        name: 'Sub7',
        component: () => import('@/views/test/test7/index.vue'),
        meta: { title: '7. 动画' },
      }
    ],
  },
];

// 合并所有路由
const routes: RouteRecordRaw[] = [...baseRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
