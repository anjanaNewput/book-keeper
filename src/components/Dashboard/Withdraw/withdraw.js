import EntryForm from '../EntryForm/EntryForm.vue'
import { BasicSelect } from 'vue-search-select'

export default {
  data () {
    return {
      options: [
        { value: '1', text: 'State Bank of India' },
        { value: '2', text: 'Punjab National Bank' },
        { value: '3', text: 'Bank of India' },
        { value: '4', text: 'Oriental Bank of Commerce' },
        { value: '5', text: 'Axis Bank' },
        { value: '6', text: 'ICICI Bank'}
      ],
      searchText: '',
      category: {
        value: '',
        text: ''
      }

    }
  },
  components: {
    EntryForm,
    BasicSelect
  },
  methods: {
    onSelect (item) {
      this.category = item
    },
    reset () {
      this.category = {}
    },
    selectOption () {
      this.category = this.options[0]
    },
    check () {
      this.$validator.validate('category').then((result) => {
        if (result) {
          console.log('hiiiii')
        } else {
          console.log(result);
          //  console.log('hiiiii')
        }
      })
    }
  }
}
