import SalePurchaseForm from '../SalePurchaseForm/SalePurchaseForm.vue'
export default {
  data () {
    return {
      listOptions: [{text: 'Item1', value: 'item1'},{text: 'Item2', value: 'item2'},{text: 'Item3', value: 'item3'},{text: 'Item4', value: 'item4'}]
    }
  },
  components: {
    SalePurchaseForm
  }
}
