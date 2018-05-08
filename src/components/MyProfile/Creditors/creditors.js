import AddMore from '../AddMore/AddMore.vue'
import AppDataTable from '../../Common/AppTable/AppDataTable.vue'

export default {
  name: 'Creditors',
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
    addMoreCreditor () {
      this.view = false
      this.$router.push({name: 'AddMore', params: {'type': 'creditor', 'viewName': 'Add Creditor'}})
    }
  },
  computed: {
    tableData () {
      return this.$store.state.creditorsData
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
