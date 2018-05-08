import Vue from 'vue'
export default {
  SignUp (user) {
    return Vue.http.post('https://accounting-coach.herokuapp.com/v1/register', user)
  }
}
