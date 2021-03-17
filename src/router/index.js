import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import Home from '@/views/Home.vue'
// import Cart from '@/views/Cart.vue'
// import Category from '@/views/Category.vue'
// import User from '@/views/User.vue'

// 路由懒加载
const Home = () => import('@/views/Home')
const Cart = () => import('@/views/Cart')
const Category = () => import('@/views/Category')
const User = () => import('@/views/User')
const GoodsDetail = () => import('@/views/goods/GoodsDetail')


export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/goodsdetail',
            name: 'goodsdetail',
            component: GoodsDetail
        }

    ]
})