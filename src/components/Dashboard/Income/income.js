import EntryForm from '../EntryForm/EntryForm.vue'
import { ModelSelect } from 'vue-search-select'

export default {
  data () {
    return {
      options: [
        { value: '1', text: 'Sales' },
        { value: '2', text: 'Commission' },
        { value: '3', text: 'Rent' },
        { value: '4', text: 'Interest' },
        { value: '5', text: 'Discount' }
      ],
      searchText: '',
      toText: '',
      category: {
        value: '',
        text: ''
      }

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
