import moment from 'moment'

import AppDataTable from '../../Common/AppTable/AppDataTable.vue'

import data from '../../../assets/json/reportData.json'

export default {
  name: 'ProfitAndLoss',
  data () {
    return {
      incomeTotal: '',
      expenseTotal: '',
      incomeColumns: [
        {
          label: 'Id',
          field: 'id',
          type: 'number',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Name',
          field: 'name',
          type: 'string',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Amount',
          field: 'amount',
          sortable: false,
          headerField: this.calculateIncomeTotal,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        }
      ],
      expenseColumns: [
        {
          label: 'Id',
          field: 'id',
          type: 'number',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Name',
          field: 'name',
          type: 'string',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Amount',
          field: 'amount',
          sortable: false,
          headerField: this.calculateExpenseTotal,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        }
      ],
      income: [
        {
          id: '',
          name: 'Income Total',
          amount: '',
          children: data.reportData[0].income,
        }
      ],
     expense: [
       {
         id: '',
         name: 'Expense Total',
         amount: '',
         children: data.reportData[0].expense,
       }
     ]
    }
  },
  methods: {
    calculateIncomeTotal(rowObj) {
    	let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        sum += rowObj.children[i].amount
      }
      this.incomeTotal = sum
      return sum
    },
    calculateExpenseTotal(rowObj) {
    	let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        sum += rowObj.children[i].amount
      }
      this.expenseTotal = sum
      return sum
    }
  },
  computed: {
    reportData () {
      return this.$store.state.reportData
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
