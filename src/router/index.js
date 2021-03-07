import { createRouter, createWebHashHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
//import Admin from '../views/Admin.vue'
import ModificateArticle from '../components/ModificateArticle.vue'

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/admin',
    name: 'Admin',
    children: {
      props: true,
      path: '/admin:id',
      name: 'ModificateArticle',
      component: ModificateArticle
    },
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/create-an-article',
    name: 'CreateArticle',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
