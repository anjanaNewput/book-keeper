export default {
  name: 'App',
  computed: {
    userEmail: function () {
      return this.$store.state.email
    },
    userLoggedIn: function () {
      return this.$store.state.isUserLogged
    },
    paymentDone: function () {
      return this.$store.state.paymentDone
    }
  },
  mounted: function () {
    // console.log(this.$breadcrumbs)
    this.$store.commit('checkUser', this.$localStorage.get('userLoggedIn') != null ? this.$localStorage.get('userLoggedIn') : false)
    this.$store.commit('setEmail', this.$localStorage.get('email') != null ? this.$localStorage.get('email') : '')
    this.$store.commit('paymentDone', this.$localStorage.get('paymentDone') != null ? this.$localStorage.get('paymentDone') : false)
  },
  updated () {
      // console.log(this.$breadcrumbs)
  },
  methods: {
    logout: function () {
      this.$localStorage.remove('userLoggedIn')
      this.$localStorage.remove('email')
      this.$store.commit('setEmail', '')
      this.$store.commit('checkUser', false)
      this.$router.push('/')
    }
  }
}
