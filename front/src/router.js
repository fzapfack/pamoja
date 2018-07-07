import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
import home from './components/home'
import faq from './components/faq'
import login from './components/login'

Vue.use(Router)

export const router = new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/faq',
        name: 'faq',
        component: faq
      },
      {
        path: '/login',
        name: 'login',
        component: login
      }
    ]
  })

  router.beforeEach((to, from, next) => {
    let currentUser = auth.user()
    let requireAuth = to.matched.some(record => record.meta.requireAuth)
    let guestOnly = to.matched.some(record => record.meta.guestOnly)
  
    if (requireAuth && !currentUser) next('login')
    else if (guestOnly && currentUser) next('user')
    else next()
  })



