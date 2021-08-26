import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

import XHeader from '@/components/Atoms/XHeader'
import XGrid from '@/components/Atoms/XGrid'
import XSpace from '@/components/Atoms/XSpace'

const app = createApp(App)

app.component('x-header', XHeader)
app.component('x-grid', XGrid)
app.component('x-space', XSpace)

app.use(router)
app.use(vuetify)

app.mount('#app')
