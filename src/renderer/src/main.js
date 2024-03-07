import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const theme = {
  dark: true,
  //add other vuetify params here
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'theme',
    themes: {
      theme
    }
  },
  components,
  directives
})

const app = createApp(App).use(vuetify).use(store)

app.mount('#app')
