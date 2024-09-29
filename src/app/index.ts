import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { router } from './provider'

import App from './App.vue'

import './styles/global.styles.scss'
import './styles/index.css'

export const app = createApp(App).use(createPinia()).use(router)
