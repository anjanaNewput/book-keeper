import DatePicker from 'vue2-datepicker'
import moment from 'moment'
import axios from 'axios'

import data from '../../../assets/json/reportData.json'

export default {
  name: 'ProfitAndLoss',
  data () {
    return {
      quarterValue: '',
      halfYearValue: '',
      quarter: {},
      durationType: 'Last Month',
      startDate: '',
      endDate: '',
      loading: true
    }
  },
  mounted () {
    let start, end
    start = moment(new Date(new Date().getFullYear(), new Date().getMonth()-1, 1)).format('DD MMM YYYY')
    end = moment(new Date(new Date().getFullYear(), new Date().getMonth(), 0)).format('DD MMM YYYY')
    this.setReportData(start, end)
  },
  methods: {
    clicked (e) {
      let start, end
      if (e.target.value === 'Last Month') {
        start = moment(new Date(new Date().getFullYear(), new Date().getMonth()-1, 1)).format('DD MMM YYYY')
        end = moment(new Date(new Date().getFullYear(), new Date().getMonth(), 0)).format('DD MMM YYYY')
        this.setReportData(start, end)
      } else if (e.target.value === 'Half Year') {
         if (new Date().getMonth() > 6) {
           start = moment(new Date(new Date().getFullYear(), 0, 1)).format('DD MMM YYYY')
           end = moment(new Date(new Date().getFullYear(), 6, 0)).format('DD MMM YYYY')
         } else {
           start = moment(new Date(new Date().getFullYear(), 6, 1)).format('DD MMM YYYY')
           end = moment(new Date(new Date().getFullYear(), 12, 0)).format('DD MMM YYYY')
         }
        this.setReportData(start, end)
      }
    },
    inputFunction () {
      if (this.startDate && this.endDate) {
        this.setReportData(moment(this.startDate).format('DD MMM YYYY'), moment(this.endDate).format('DD MMM YYYY'))
      }
    },
    selectFunction () {
      let start, end;
      if(this.durationType === 'Last Quarter') {
        if (this.quarterValue === '1') {
          start = moment(new Date(new Date().getFullYear(), 0, 1)).format('DD MMM YYYY')
          end = moment(new Date(new Date().getFullYear(), 3, 0)).format('DD MMM YYYY')
        } else if (this.quarterValue === '2') {
          start = moment(new Date(new Date().getFullYear(), 3, 1)).format('DD MMM YYYY')
          end = moment(new Date(new Date().getFullYear(), 6, 0)).format('DD MMM YYYY')
        } else if (this.quarterValue === '3') {
          start = moment(new Date(new Date().getFullYear(), 6, 1)).format('DD MMM YYYY')
          end = moment(new Date(new Date().getFullYear(), 9, 0)).format('DD MMM YYYY')
        } else if (this.quarterValue === '4') {
          start = moment(new Date(new Date().getFullYear(), 9, 1)).format('DD MMM YYYY')
          end = moment(new Date(new Date().getFullYear(), 12, 0)).format('DD MMM YYYY')
        }
      } else {
        if (this.halfYearValue === '1') {
          start = moment(new Date(new Date().getFullYear(), 0, 1)).format('DD MMM YYYY')
          end = moment(new Date(new Date().getFullYear(), 6, 0)).format('DD MMM YYYY')
        } else if (this.halfYearValue === '2') {
          start = moment(new Date(new Date().getFullYear(), 6, 1)).format('DD MMM YYYY')
          end = moment(new Date(new Date().getFullYear(), 12, 0)).format('DD MMM YYYY')
        }
      }
      this.setReportData(start, end)
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
      axios.get('https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json')
      .then(res => {
        console.log(res)
        this.$store.commit('setReportData', data)
      })
      // .catch((error) => {
      //   alert("error")
      // })
      .finally(() => {
        setTimeout(() => {
        this.loading = false}, 3000)
      })
    }
  },
  computed: {
    reportData () {
      return this.$store.state.reportData
    }
  },
  components: {
    DatePicker
  }
}
