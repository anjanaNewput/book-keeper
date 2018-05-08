import EntryForm from '../EntryForm/EntryForm.vue'
import { ModelSelect } from 'vue-search-select'

export default {
  data () {
    return {
      options: [
        { value: '1', text: 'State Bank of India - 11212312113123323' },
        { value: '2', text: 'State Bank of India - 11212235456456566' },
        { value: '3', text: 'Bank of India - 986534735736212' },
        { value: '4', text: 'Oriental Bank of Commerce - 26427452642743' },
        { value: '5', text: 'Bank of India - 293844758584' },
        { value: '6', text: 'ICICI Bank - 3242485684494'},
        { value: '7', text: 'ICICI Bank - 3242485684234222'},
        { value: '8', text: 'ICICI Bank - 3242485643433443'}

      ],
      searchText: '',
      category: {
        value: '',
        text: ''
      },
      payType: 'bank'
    }
  },
  components: {
    EntryForm,
    ModelSelect
  },
  methods: {
    check () {
      this.$validator.validate('deposit-cat').then((result) => {
        if (result) {
          alert('Submit')
        } else {
          alert('Error')
        }
      })
    }
  }
}
