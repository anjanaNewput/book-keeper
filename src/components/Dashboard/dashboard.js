export default {

  data () {
    return {
      menus: [{name: 'Expenses', display: 'Expenses'}, {name: 'Income', display: 'Income'}, {name: 'Withdrawal', display: 'Cash Withdrawal'}, {name: 'Deposit', display: 'Cash Deposit'}, {name: 'Sale', display: 'Sale'}, {name: 'Purchase', display: 'Purchase'}],

    }
  },
  methods: {
    menuClicked (page, index) {
      this.$router.push({name: page})
    }
  },
  computed: {
    activeMenu () {
      return this.$route.name
    }
  },
  components: {
  }
}
