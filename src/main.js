import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueHeadful from 'vue-headful';

const app = createApp(App)

app.use(router)
app.component('vue-headful', vueHeadful);
app.mount('#app')

