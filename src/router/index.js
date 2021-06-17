import { createRouter, createWebHistory } from 'vue-router'
import Layout from '/src/views/_Layout/MainLayout.vue'
import Home from '/src/views/Home.vue'

const routes = [{

    path: "/",
    component: Layout,
    redirect: "/",
    children: [{
        path: '',
        name: 'Home',
        component: Home,
    }, ]

}]

const router = createRouter({
    history: createWebHistory(),

    routes,
})

export default router