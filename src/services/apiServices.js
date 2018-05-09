import Vue from 'vue'
export default {
  signUp (user) {
    return Vue.http.post('https://accounting-coach.herokuapp.com/v1/register', user)
  },
  login (loginData) {
    return Vue.http.post('https://accounting-coach.herokuapp.com/v1/login', loginData)
  }
}
