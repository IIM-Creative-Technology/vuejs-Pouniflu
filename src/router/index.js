import { createRouter, createWebHashHistory } from 'vue-router'
import EditArticle from '../components/EditArticle.vue'
import SingleArticle from '../components/SingleArticle.vue'

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    children: [{
      props: true,
      path: '/blog/:title',
      name: 'SingleArticle',
      component: SingleArticle
    }],
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    children: [{
      props: true,
      path: '/admin/:id',
      name: 'EditArticle',
      component: EditArticle
    }],
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
