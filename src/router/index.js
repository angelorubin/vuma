import Vue from 'vue'
import Router from 'vue-router'
import { routes as app } from '../app'

Vue.use(Router)

const routes = [...app]

const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history' // do not use /#/.
})

export default router

/*
import Home from '../app/home/main'
import List from '../app/list/main'
import Login from '../app/login/main'
import Dash from '../app/dash/main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/dash',
    name: 'Dash',
    component: Dash
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }]
})
*/
