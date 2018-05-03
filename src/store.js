import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// @flow
const store = new Vuex.Store({
  state: {
    email: '',
    isUserLogged: false,
    creditSaleData: [],
    index: 0,
    paymentDone: false
  },
  mutations: {
    setEmail (state, data) {
      state.email = data
    },
    checkUser (state, data) {
      state.isUserLogged = data
    },
    getCreditSaleData (state, payload) {
      state.creditSaleData.push({
        'id': ++state.index,
        'name': payload.name,
        'mob': payload.mob,
        'gst': payload.gst
      })
    },
    paymentDone (state, data) {
      state.paymentDone = data
    }
  },
  actions: {
  }
})

export { store }
