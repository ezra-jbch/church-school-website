import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import YouthGroup from '../views/YouthGroup.vue'
import Elementary from '../views/Elementary.vue'
import Kindergarten from '../views/Kindergarten.vue'

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
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/Youth-Group',
    name: 'YouthGroup',
    component: YouthGroup
  },
  {
    path: '/Elementary',
    name: 'Elementary',
    component: Elementary
  },
  {
    path: '/Kindergarten',
    name: 'Kindergarten',
    component: Kindergarten
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
