import Vue from 'vue'
import VUeRouter from 'vue-router'
Vue.use(VUeRouter)

import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Category from '@/views/Category.vue'
import User from '@/views/User.vue'
import VueRouter from 'vue-router'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            name:'home',
            component: Home
        },
        {
            path: '/cart',
            name:'cart',
            component: Cart
        },
        {
            path: '/category/:cateId',
            name:'category',
            component: Category
        },
        {
            path: '/user/:id',
            name:'user',
            component: User
        },
        {
            path: '/cart',
            component: Cart
        }

    ]
})