import moment from 'moment'

import AppDataTable from '../../Common/AppTable/AppDataTable.vue'

import data from '../../../assets/json/reportData.json'

export default {
  name: 'ProfitAndLoss',
  data () {
    return {
      columns: [
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
          headerField: this.sumCount,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        }
      ],
      rows: [
        {
          id: '',
          name: 'Income Total',
          amount: '',
          children: [
            {
              "id": 1,
              "name": "Capital",
              "amount": 200000
            },
            {
              "id": 2,
              "name": "Creditors",
              "amount": 155555
            },
            {
              "id": 3,
              "name": "Payables",
              "amount": 20000
            },
            {
              "id": 4,
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
              "id": 1,
              "name": "House",
              "amount": 20
            },
            {
              "id": 2,
              "name": "Car",
              "amount": 20
            },
            {
              "id": 3,
              "name": "Debitors",
              "amount": 20
            },
            {
              "id": 4,
              "name": "Advance",
              "amount": 20
            },
            {
              "id": 5,
              "name": "Cash A/C",
              "amount": 20
            },
            {
              "id": 6,
              "name": "Bank A/C",
              "amount": 20
            }
          ],
        }
      ],

    }
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
  computed: {
    reportData () {
      return this.$store.state.reportData
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
