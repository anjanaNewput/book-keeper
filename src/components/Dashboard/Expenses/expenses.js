import EntryForm from '../EntryForm/EntryForm.vue'
import { ModelSelect } from 'vue-search-select'

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
      searchText: '',
      category: {
        value: '',
        text: ''
      },
      toText: ''
    }
  },
  components: {
    EntryForm,
    ModelSelect
  },
  methods: {
    check () {
      this.$validator.validateAll().then((result) => {
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
