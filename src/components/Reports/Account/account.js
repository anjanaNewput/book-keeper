import enteries from '@/assets/json/enteries.json'
import AppDataTable from '../../Common/AppTable/AppDataTable.vue'
export default {
  name: 'Account',
  data () {
    return {
      rows: [{
        srno: '',
        creditAmt: '',
        date: null,
        debitAmt: '',
        particulars: 'Total',
        balance: '',
        children: enteries.data
      }],
      columns: [
        {
          label: 'SNo.',
          field: 'srno'
        },
        {
          label: 'Date',
          field: 'date',
          type: 'date',
          dateInputFormat: 'DD/MM/YYYY',
          dateOutputFormat: 'MMM Do YY'
        },
        {
          label: 'Particulars',
          field: 'particulars',
          sortable: false
        },
        {
          label: 'DR',
          field: 'debitAmt',
          type: 'number',
          headerField: this.sumDR,
        },
        {
          label: 'CR',
          field: 'creditAmt',
          type: 'number',
          headerField: this.sumCR,
        },
        {
          label: 'Balance',
          field: 'balance',
          type: 'number'
        },
      ]
    }
  },
  components: {
    'AppTable':AppDataTable
  },
  methods: {
    sumCR(rowObj) {
    	let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        sum += rowObj.children[i].creditAmt;
      }
      return sum;
    },
    sumDR(rowObj) {
    	let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        sum += rowObj.children[i].debitAmt;
      }
      return sum;
    }
  },
  computed: {
    reportData () {
      return this.$store.state.reportData
    }
  }
}
