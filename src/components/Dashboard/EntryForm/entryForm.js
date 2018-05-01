import DatePicker from 'vue2-datepicker'
import { BasicSelect } from 'vue-search-select'

export default {
  props: ['category', 'toText'],
  data () {
    return {
      payType: 0,
      txnDate: null,
      amount: null,
      forReasonText: '',
      lang: {
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
          placeholder: {
            date: 'Select Date',
            dateRange: 'Select Date Range'
          }
      }
    }
  },
  methods: {
    addEntry () {
      this.$emit('check')
      this.$validator.validateAll().then((result) => {
        if (result) {
        } else {

        }
      })
      console.log(this.payType)
      console.log(this.category.text)
      console.log(this.amount)
      console.log(this.toText)
      console.log(this.forReasonText)
      console.log(this.txnDate)
    }
  },
  components: {
    DatePicker,
    BasicSelect
  }
}