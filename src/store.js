import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    index: 0,
    paymentDone: false,
    email: '',
    isUserLogged: false,
    creditorsData: [],
    debitorsData: [],
    creditorId: 0,
    debitorId: 0,
    reportData: {}
  },
  mutations: {
    setEmail (state, data) {
      state.email = data
    },
    checkUser (state, data) {
      state.isUserLogged = data
    },
    setCreditorData (state, payload) {
      state.creditorsData.push({
        'id': ++state.creditorId,
        'name': payload.name,
        'mob': payload.mob,
        'gst': payload.gst
      })
    },
    paymentDone (state, data) {
      state.paymentDone = data
    },
    setDebitorData (state, payload) {
      state.debitorsData.push({
        'id': ++state.debitorId,
        'name': payload.name,
        'mob': payload.mob,
        'gst': payload.gst
      })
    },
    setReportData (state, payload) {
      state.reportData = payload.reportData[0]
    }
  },
  actions: {
  }
})

export { store }
