export default {
  data () {
    return {

    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isUserLogged
    }
  },
  mounted: function () {
    this.$store.commit('checkUser', this.$localStorage.get('userLoggedIn') != null ? this.$localStorage.get('userLoggedIn') : false)
  },
  methods: {
    signup () {
      this.$router.push('/sign-up')
    },
    login () {
      this.$router.push('/login')
    }
  }
}
