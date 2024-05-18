import { RouteRecordRaw } from 'vue-router';

const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/AdminView.vue'),
    children: [
      // 子路由可以在这里定义
    ],
  },
];

export default adminRoutes;
