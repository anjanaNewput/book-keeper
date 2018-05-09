import moment from 'moment'

import AppDataTable from '../../Common/AppTable/AppDataTable.vue'

// import data from '../../../assets/json/balanceSheet.json'

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
              "amount": Number(2000000).toLocaleString('en')
            },
            {
              "name": "Creditors",
              "amount": Number(200000).toLocaleString('en')
            },
            {
              "name": "Payables",
              "amount": Number(20000).toLocaleString('en')
            },
            {
              "name": "Loan",
              "amount": Number(20000).toLocaleString('en')
            }
          ],
        },
        {
          name: 'Expense Total',
          amount: '',
          children: [
            {
              "name": "House",
              "amount": Number(20000).toLocaleString('en')
            },
            {
              "name": "Car",
              "amount": Number(20000).toLocaleString('en')
            },
            {
              "name": "Debitors",
              "amount": Number(20000).toLocaleString('en')
            },
            {
              "name": "Advance",
              "amount": Number(20000).toLocaleString('en')
            },
            {
              "name": "Cash A/C",
              "amount": Number(20000).toLocaleString('en')
            },
            {
              "name": "Bank A/C",
              "amount": Number(20000).toLocaleString('en')
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
        console.log(parseFloat(rowObj.children[i].amount.replace(/,/g, '')))
        sum += parseFloat(rowObj.children[i].amount.replace(/,/g, ''))
      }
      return Number(sum).toLocaleString('en')
    },
    printWindow () {
      window.print()
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
