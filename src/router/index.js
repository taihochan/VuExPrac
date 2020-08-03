import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/c2f',
    name: 'c2f',
    component: () => import(/* webpackChunkName: "about" */ '../views/C2F.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('../views/count.vue')
  },
  {
    path: '/learnComponent',
    name: 'learnComponent',
    component: () => import('../views/learnComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
