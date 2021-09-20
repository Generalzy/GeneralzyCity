/* jshint esversion: 6 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ActualCourse from "../views/ActualCourse";
import FreeCourse from "../views/FreeCourse";
import LightCourse from "../views/LightCourse";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/light-course',
    name: 'LightCourse',
    component: LightCourse
  },
    {
    path: '/actual-course',
    name: 'ActualCourse',
    component: ActualCourse
  },
    {
    path: '/free-course',
    name: 'FreeCourse',
    component: FreeCourse
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
