import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
import home from './components/home'
import faq from './components/faq'
import login from './components/login'
import user from './components/user'

Vue.use(Router)

const router = new Router({
  mode: 'history', // normal urls. No #
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
      component: login,
      meta: { guestOnly: true },
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: { requireAuth: true }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
  }
)

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('login')
  else if (guestOnly && currentUser) next('user')
  else next()
})

export {router}