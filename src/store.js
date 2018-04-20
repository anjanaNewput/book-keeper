import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// @flow
const store = new Vuex.Store({
  state: {
    email: '',
    isUserLogged: false
  },
  mutations: {
    setEmail (state, data) {
      state.email = data
    },
    checkUser (state, data) {
      state.isUserLogged = data
    }
  },
  actions: {
  }
})

export { store }
