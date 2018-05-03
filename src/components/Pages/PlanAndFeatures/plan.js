export default {
  data () {
    return {}
  },
  methods: {
    payNow () {
      this.$store.commit('paymentDone', true)
      this.$localStorage.set('paymentDone', true)
      this.$router.push('/dashboard')
    }
  }
}
