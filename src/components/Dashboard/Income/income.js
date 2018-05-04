import EntryForm from '../EntryForm/EntryForm.vue'
import { ModelSelect } from 'vue-search-select'
import incomeList from '@/assets/json/ledgerHeads.json'

export default {
  data () {
    return {
      options: incomeList.data[1].list,
      searchText: '',
      toText: '',
      category: {
        value: '',
        text: ''
      },
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
