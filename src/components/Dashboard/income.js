import AppForm from '../Common/AppForm/AppForm.vue'

export default {
  data () {
    return {
      cashView: true,
      bankView: false
    }
  },
  components: {
    AppForm
  },
  methods: {
    openBankView () {
      this.cashView = false
      this.bankView = true
    },
    openCashView () {
      this.cashView = true
      this.bankView = false
    }
  }
}
