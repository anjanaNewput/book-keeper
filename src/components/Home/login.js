export default {
  data () {
    return {
      password: '',
      hasVal: '',
      email: ''
    }
  },
  methods: {
    login: function (event) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.email === 'anjana@newput.com' && this.password === '123456') {
            this.onLoginSuccess(this.email)
          } else {
             alert('Please Enter the correct email and password')
             this.email= ''
             this.password= ''
             event.target.reset();
          }
        }
      })
    },
    blurFunction (e) {
      if (e.target.value) {
        e.target.className = e.target.className + ' ' + 'has-val'
      } else {
        e.target.className = e.target.className + ' '
      }
    },
    onLoginSuccess (email) {
      this.$store.commit('setEmail', email)
      this.$localStorage.set('email', email)
      this.$localStorage.set('userLoggedIn', true)
      this.$store.commit('checkUser', true)
      this.$router.push('/dashboard')
    }
  }
}
