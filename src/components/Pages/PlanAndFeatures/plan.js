export default {
  data () {
    return {}
  },
  methods: {
    payNow () {
      this.$store.commit('paymentDone', true)
      if(this.$store.state.isUserLogged) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
