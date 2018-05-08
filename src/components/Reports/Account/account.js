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
          field: 'srno',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Date',
          field: 'date',
          type: 'date',
          dateInputFormat: 'DD/MM/YYYY',
          dateOutputFormat: 'MMM Do YY',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Particulars',
          field: 'particulars',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'DR',
          field: 'debitAmt',
          type: 'number',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class',
          headerField: this.sumDR
        },
        {
          label: 'CR',
          field: 'creditAmt',
          type: 'number',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class',
          headerField: this.sumCR
        },
        {
          label: 'Balance',
          field: 'balance',
          type: 'number',
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
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
