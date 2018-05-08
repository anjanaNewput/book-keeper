import DatePicker from 'vue2-datepicker'
import moment from 'moment'
import Multiselect from 'vue-multiselect'
import { Validator } from 'vee-validate'

import ledgerHeads from '@/assets/json/ledgerHeads.json'
import data from '../../../assets/json/reportData.json'

export default {
  name: 'IntervalFilter',
  data () {
    return {
      quarter: {},
      durationType: '',
      startDate: '',
      endDate: '',
      title: '',
      dictionary: {
        messages: {
          'required': 'Select One'
        }
      },
      options: ledgerHeads.data,
      values: [],
      value: ''
    }
  },
  mounted () {
    this.title = this.$router.currentRoute.params.title
  },
  methods: {
    clicked (e) {
      let start, end
      let month = new Date().getMonth()
      let year = new Date().getFullYear()

      if (e.target.value === 'Last Month') {
        start = moment(new Date(year, month-1, 1)).format('DD MMM YYYY')
        end = moment(new Date(year, month, 0)).format('DD MMM YYYY')
      } else if (e.target.value === 'Last Quarter') {
        if (month > 2 && month < 6) {
          start = moment(new Date(year, 0, 1)).format('DD MMM YYYY')
          end = moment(new Date(year, 3, 0)).format('DD MMM YYYY')
        } else if (month > 5 && month < 8) {
          start = moment(new Date(year, 3, 1)).format('DD MMM YYYY')
          end = moment(new Date(year, 6, 0)).format('DD MMM YYYY')
        } else if (month > 8 && month < 12) {
          start = moment(new Date(year, 6, 1)).format('DD MMM YYYY')
          end = moment(new Date(year, 9, 0)).format('DD MMM YYYY')
        } else if (month >= 0  && month < 3) {
          start = moment(new Date(year-1, 9, 1)).format('DD MMM YYYY')
          end = moment(new Date(year-1, 12, 0)).format('DD MMM YYYY')
        }
      } else if (e.target.value === 'Last Half Year') {
        if (month > 5 && month < 12) {
          start = moment(new Date(year, 0, 1)).format('DD MMM YYYY')
          end = moment(new Date(year, 6, 0)).format('DD MMM YYYY')
        } else if (month >= 0  && month < 6) {
          start = moment(new Date(year-1, 6, 1)).format('DD MMM YYYY')
          end = moment(new Date(year-1, 12, 0)).format('DD MMM YYYY')
        }
      }
      this.setReportData(start, end)
    },
    inputFunction () {
      if (this.startDate && this.endDate) {
        this.setReportData(moment(this.startDate).format('DD MMM YYYY'), moment(this.endDate).format('DD MMM YYYY'))
      }
    },
    setReportData (start, end) {
      this.loading = true
      data.reportData[0].startDate = start
      data.reportData[0].endDate = end
      data.reportData[0].totalIncome = 0
      data.reportData[0].totalExpense = 0

      for(let i in data.reportData[0].income) {
        data.reportData[0].totalIncome += data.reportData[0].income[i].amount
      }
      for(let i in data.reportData[0].expense) {
        data.reportData[0].totalExpense += data.reportData[0].expense[i].amount
      }
      data.reportData[0].resultAmount = data.reportData[0].totalIncome - data.reportData[0].totalExpense
      this.$store.commit('setReportData', data)
    },
    generateReport () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$router.push({name: this.title, params:{'title': this.title}})
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    if(from.params.title) {
      to.params.title = from.params.title
    }
    next()
  },
  components: {
    DatePicker,
    Multiselect
  }
}
