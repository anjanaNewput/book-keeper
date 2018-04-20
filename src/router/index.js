import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import SignUp from '@/components/Home/SignUp.vue'
import Login from '@/components/Home/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      meta: {
        authRequired: true
      }
    }
  ],
  mode: 'history'
})
