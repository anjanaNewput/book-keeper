import EntryForm from '../EntryForm/EntryForm.vue'
import { ModelSelect } from 'vue-search-select'
import expenseList from '@/assets/json/ledgerHeads.json'

export default {
  data () {
    return {
      options: expenseList.data[0].list,
      searchText: '',
      category: {
        value: '',
        text: ''
      },
      toText: '',
      payType: 'cash'
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
