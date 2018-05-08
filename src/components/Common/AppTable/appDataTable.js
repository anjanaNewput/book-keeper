export default {
  name: 'AppDataTable',
  props: [
    'rowContent', 'columns', 'gpOption', 'pgOption'
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
