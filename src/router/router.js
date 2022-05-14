import {createRouter,createWebHistory} from 'vue-router'

const Home = ()=>import('views/home.vue')
const routes=[
    {
        path:'/',
        component:Home
    },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router