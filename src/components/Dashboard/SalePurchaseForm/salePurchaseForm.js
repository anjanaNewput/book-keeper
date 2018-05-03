import DatePicker from 'vue2-datepicker'
import { ModelSelect } from 'vue-search-select'
export default {
  data () {
    return {
      lang: {
          days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          placeholder: {
            date: 'Select Date'
          }
      },
      formData: {
        payType: 'cash',
        name: 'Mohan',
        mob: 9898989898,
        gstNo: '12923421IE',
        billNo: null,
        date: new Date()
      },
      items: [{totAmt: null, gstRate: null, rate: null, quantity: null, category: {text: '', value: ''}}]
    }
  },
  props: ['title', 'options'],
  components: {
    DatePicker,
    ModelSelect
  },
  methods: {
    saveData () {
      console.log(this.items)
      console.log(this.formData)
    },
    addMoreRow () {
      this.items.push({totAmt: null, gstRate: null, rate: null, quantity: null, category: {text: '', value: ''}})
    }
  }
}
