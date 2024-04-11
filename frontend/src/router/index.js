import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContentView from '../views/ContentView.vue'
import General from '../views/GenerarView.vue'
import Course from '../views/CourseView.vue'
import Moment from '../views/MomentView.vue'


import EvaluationView from '../views/EvaluationView.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      hideAppBar: true
    }
  },

  {
    path: '/content',
    name: 'content',
    component: ContentView,
  },
  {
    path: '/General',
    name: 'General',
    component: General,
  },
  {
    path: '/Moment',
    name: 'Moment',
    component: Moment,
  },
  {
    path: '/Course',
    name: 'Course',
    component: Course,
  },
  {
    path: '/evaluation',
    name: 'evaluation',
    component: EvaluationView,
  },
  {
    path: '/credit',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreditView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
