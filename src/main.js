import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia';

import App from './App.vue'

const pinia = createPinia();

loadFonts()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
