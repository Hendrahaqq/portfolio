import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './assets/css/tailwind.css'

import './assets/css/main.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueGtag from "vue-gtag";

library.add(fas, fab, far)


const app = createApp(App)
    .use(store)
    .use(router)
    .use(VueSmoothScroll)
    .use(VueGtag, {
        config: { id: "G-QJ8XF8S3CR" }
    })


app.component('fa', FontAwesomeIcon)
app.mount('#app')