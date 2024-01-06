
//initialize pinia stores
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './app.vue';
import { useUserStore } from './stores/user';

const app = createApp(App);

app.use(createPinia());

const userStore = useUserStore();
userStore.initializeAuthListener();

app.mount('#app');