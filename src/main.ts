import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import './style/input.css';
import { pinia } from "../src/store/index"
import 'virtual:svg-icons-register'

// 全局组件的引入
import svgIcon from '@/components/svgIcon/index.vue'

const app = createApp(App);

// 全局组件的注册
app.component('svgIcon', svgIcon)
app.use(router);
app.use(pinia)
app.mount('#app');
