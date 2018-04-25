import AppForm from '../Common/AppForm.vue'
import Datepicker from 'vuejs-datepicker'
import { BasicSelect } from 'vue-search-select'

export default {
  data () {
    return {
      options: [
        { value: '1', text: 'Salaries' },
        { value: '2', text: 'Repairs' },
        { value: '3', text: 'Goods Purchases' },
        { value: '4', text: 'Travelling' },
        { value: '5', text: 'Conveyences' },
        { value: '6', text: 'Telephone Bill' },
        { value: '7', text: 'Office Rent' },
        { value: '8', text: 'Stationary & Painting' },
        { value: '9', text: 'Insurance' },
        { value: '10', text: 'Tea & coffee'}
      ],
      searchText: '', // If value is falsy, reset searchText & searchItem
      item: {
        value: '',
        text: ''
      },
      payType: 0
    }
  },
  components: {
    AppForm,
    Datepicker,
    BasicSelect
  },
  methods: {
    openCalendar (el) {
      $('#datetimepicker').datepicker();
    },
    onSelect (item) {
      this.item = item
    },
    reset () {
      this.item = {}
    },
    selectOption () {
      this.item = this.options[0]
    },
    addEntry (){
      console.log(this.payType)
    }
  }
}
