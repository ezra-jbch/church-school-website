import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import TableBox from '../views/TableBox.vue'
import { GROUP_TITLE_PER_ROUTE } from "../data/constants.js";

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
    /*Dynamic file path. Look at Dropdown Component to see how route is dynamically being passed in*/
    path: '/:group', /*Possible Routes: YG, ELEM, and KIND pages*/
    component: TableBox,
    props: route => ({pathToJson: route.params.group, mapOfJson: GROUP_TITLE_PER_ROUTE})
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
