export default {

  data () {
    return {
      menus: ['Expenses', 'Income', 'Withdrawal', 'Deposit', 'Sale', 'Purchase']
    }
  },
  methods: {
    menuClicked (page, index) {
      this.activeMenu = index
      this.$router.push({name: page})
    }
  },
  computed: {
    activeMenu () {
      return this.menus.indexOf(this.$route.name)
    }
  },
  components: {
  }
}
