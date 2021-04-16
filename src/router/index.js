import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/mobile_0',
        name: 'Mobile_0',
        component: () => import('@/views/Mobile_0.vue')
    },
    {
        path: '/mobile_1',
        name: 'Mobile_1',
        component: () => import('@/views/Mobile_1.vue')
    },
    {
        path: '/mobile_2',
        name: 'Mobile_2',
        component: () => import('@/views/Mobile_2.vue')
    },
    {
        path: '/mobile_3',
        name: 'Mobile_3',
        component: () => import('@/views/Mobile_3.vue')
    },
    {
        path: '/pc_0',
        name: 'PC_0',
        component: () => import('@/views/PC_0.vue')
    },
    {
        path: '/pc_1',
        name: 'PC_1',
        component: () => import('@/views/PC_1.vue')
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
