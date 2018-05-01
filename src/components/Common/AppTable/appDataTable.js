export default {
  name: 'AppDataTable',
  props: [
    'rowContent', 'columns'
  ],
  data () {
    return {

    }
  },
  methods: {
    editRow () {
      alert('Clicked edit')
    },
    deleteRow () {
      alert('Clicked delete')
    }
  }
}
