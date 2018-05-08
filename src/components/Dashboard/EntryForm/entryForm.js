import DatePicker from 'vue2-datepicker'

export default {
  props: ['category', 'toText', 'payType'],
  data () {
    return {
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
          alert('Success')
        } else {
          alert('Error')
        }
      })
    }
  },
  components: {
    DatePicker
  }
}
