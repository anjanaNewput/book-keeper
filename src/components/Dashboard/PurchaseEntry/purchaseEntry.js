import SalePurchaseForm from '../SalePurchaseForm/SalePurchaseForm.vue'
export default {
  data () {
    return {
      listOptions: [{text: 'Item1', value: 'item1', gstRate: 10},{text: 'Item2', value: 'item2', gstRate: 18},{text: 'Item3', value: 'item3', gstRate: 20},{text: 'Item4', value: 'item4', gstRate: 9}]
    }
  },
  components: {
    SalePurchaseForm
  }
}
