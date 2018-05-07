import moment from 'moment'

import AppDataTable from '../../Common/AppTable/AppDataTable.vue'

import data from '../../../assets/json/balanceSheet.json'

export default {
  name: 'BalanceSheet',
  data () {
    return {
      today: '',
      bData: '',
      formattedAmount: '',
      columns: [
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
          headerField: this.sumCount,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        }
      ],
      rows: [
        {
          name: 'Income Total',
          amount: '',
          children: [
            {
              "name": "Capital",
              "amount": 200000
            },
            {
              "name": "Creditors",
              "amount": 155555
            },
            {
              "name": "Payables",
              "amount": 20000
            },
            {
              "name": "Loan",
              "amount": 90000
            }
          ],
        },
        {
          name: 'Expense Total',
          amount: '',
          children: [
            {
              "name": "House",
              "amount": 20000
            },
            {
              "name": "Car",
              "amount": 200
            },
            {
              "name": "Debitors",
              "amount": 298
            },
            {
              "name": "Advance",
              "amount": 20000
            },
            {
              "name": "Cash A/C",
              "amount": 208700
            },
            {
              "name": "Bank A/C",
              "amount": 2000
            }
          ],
        }
      ]
    }
  },
  mounted() {
    this.today = moment(new Date()).format('DD MMM YYYY')
  },
  methods: {
    sumCount(rowObj) {
    	let sum = 0;
      for (let i = 0; i < rowObj.children.length; i++) {
        sum += rowObj.children[i].amount;
      }
      return sum;
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
