import { createApp } from 'vue'
import { ExamplePlugin } from 'webpack-library'

import App from './App.vue'

const app = createApp(App)

app.use(ExamplePlugin)

app.mount('#app')
