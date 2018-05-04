import moment from 'moment'

export default {
  name: 'ProfitAndLoss',
  data () {
    return {
      quarter: {},
      durationType: 'Last Month',
      startDate: '',
      endDate: '',
      title: ''
    }
  },
  mounted () {
    let start, end
    this.title = this.$route.params.title
  },
  computed: {
    reportData () {
      return this.$store.state.reportData
    }
  }
}
