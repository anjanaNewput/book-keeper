export default {
  name: 'AppDataTable',
  props: [
    'rowContent', 'columns'
  ],
  methods: {
    editRow () {
      alert('Clicked edit')
    },
    deleteRow () {
      alert('Clicked delete')
    }
  }
}
