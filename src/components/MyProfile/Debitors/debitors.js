import AddMore from '../AddMore/AddMore.vue'
import AppDataTable from '../../Common/AppTable/AppDataTable.vue'

export default {
  name: 'CreditSale',
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
          label: 'Mobile No.',
          field: 'mob',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'GST No.',
          field: 'gst',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class'
        },
        {
          label: 'Actions',
          field: 'action',
          sortable: false,
          tdClass: 'custom-td-class',
          thClass: 'custom-th-class',
          html: true
        }
      ]
    }
  },
  methods: {
    addMoreDebitor () {
      this.view = false
      this.$router.push({name: 'AddMore', params: {'type': 'debitor', 'viewName': 'Add Debitor'}})
    }
  },
  computed: {
    tableData () {
      return this.$store.state.debitorsData
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
