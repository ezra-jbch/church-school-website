import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ContactUs from '../views/ContactUs.vue';
import LessonsPage from '../views/LessonsPage.vue';
import { GROUP_TITLE_PER_ROUTE } from "../data/constants.js";
import SermonPage from '../views/SermonPage.vue';

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
    path: '/lessons/:group', /*Possible Routes: YG, ELEM, and KIND pages*/
    name: 'LessonsPage',
    component: LessonsPage,
    props: route => ({nameOfGroup: route.params.group, titlesForGroup: GROUP_TITLE_PER_ROUTE, selectedYear: route.query.year})
  },
  {
    path:'/sermon/:group/:year/:title?',
    name: 'SermonPage',
    component: SermonPage,
    props: route => ({group: route.params.group, year: route.params.year, title: route.params.title})
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
