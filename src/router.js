import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: () =>import('./components/login.vue')
    },
    {
    path: '/redirect',
    component: () => import('./components/main.vue')
    },
    {
    path: '/test',
    component: () => import('./components/test.vue')
    }
]

const router = new VueRouter({
    routes,
    mode : 'history' // (缩写) 相当于 routes: routes
  })

export default router