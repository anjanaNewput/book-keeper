import AddMore from '../AddMore.vue'
import AppDataTable from '../../Common/AppDataTable.vue'

export default {
  name: 'Creditors',
  data () {
    return {
      form: {
        'id': '',
        'name': '',
        'mob': '',
        'gst': ''
      },
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
      this.$router.push('/add-more')
    },
    validateForm () {
      alert(this.form)
      this.$store.commit('getCreditSaleData', this.form)
      this.form = {}
    }
  },
  computed: {
    tableData () {
      return this.$store.state.creditSaleData
    }
  },
  components: {
    'app-table': AppDataTable
  }
}
