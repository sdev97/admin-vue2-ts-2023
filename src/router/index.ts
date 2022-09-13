import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
Vue.use(VueRouter)

export const constantRoutes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
]

export const asyncRoutes: RouteConfig[] = [
  
]


const createRouter = () => new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
