// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/components/App/App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import VueLocalStorage from 'vue-localstorage'
import VueGoodTable from 'vue-good-table'

import { store } from './store'
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VeeValidate)
Vue.use(VueLocalStorage)
Vue.use(VueGoodTable)
Vue.config.productionTip = false

// router intercepter
router.beforeEach((to, from, next) => {
  var isUserLoggedIn = Vue.localStorage.get('userLoggedIn')
  // Look at all routes
  router.options.routes.forEach((route) => {
    // If this is the current route and it's secure
    if (to.matched[0].path === route.path && to.meta.authRequired) {
      if (!isUserLoggedIn) {
        return next('/login')
      } else {
        return next()
      }
    }
  })
  if ((to.name === 'Login' && from.name === null) && isUserLoggedIn) {
    return next('/dashboard')
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
