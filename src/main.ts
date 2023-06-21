import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
.use(router)
.use(pinia)
.use(elementPlus)
.mount('#app')
