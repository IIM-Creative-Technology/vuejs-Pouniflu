import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Admin
  },
  {
    path: '/create-an-article',
    name: 'CreateArticle',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
