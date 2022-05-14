import {createRouter,createWebHistory} from 'vue-router'

const Home = ()=>import('views/home.vue')
const Product = ()=>import('views/product.vue')
const Cart = ()=>import ('views/cart.vue')
const Account = ()=>import('views/account.vue')


const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/product',
        component:Product
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/account',
        component:Account
    }
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router