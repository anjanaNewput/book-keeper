export default {
  data () {
    return {
      pwd: '',
      hasVal: '',
      email: ''
    }
  },
  methods: {
    submitForm: function (submitEvent) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (this.email === 'anjana@newput.com' && this.pwd === '123456') {
            this.onLoginSuccess(this, this.email)
          }
        //  return
        }
      })
    },
    blurFunction () {
      if (this.email || this.pwd) {
        this.hasVal = 'has-val'
      } else {
        this.hasVal = ''
      }
    },
    onLoginSuccess (self, email) {
      self.$store.commit('setEmail', email)
      self.$localStorage.set('email', email)
      self.$localStorage.set('userLoggedIn', true)
      self.$store.commit('checkUser', true)
      self.$router.push('/dashboard')
    }
  },
  computed: {
    hasValue () {
      if (this.hasVal) {
        return this.hasVal
      }
    }
  }
}
