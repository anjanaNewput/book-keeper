// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import datePicker from 'vue-bootstrap-datetimepicker'
import VueLocalStorage from 'vue-localstorage'

import { store } from './store'

import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css'
Vue.use(datePicker)
Vue.use(VeeValidate)
Vue.use(VueLocalStorage)
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
