import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style/input.css';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
// 全局引入 后期可以根据自己使用的组件进行引入，减少打包体积
app.use(PrimeVue);
app.mount('#app');
