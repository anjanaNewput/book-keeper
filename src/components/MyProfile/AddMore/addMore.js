export default {
  name: 'AddMore',
  data () {
    return {
      form: {
        'name': '',
        'mob': '',
        'gst': ''
      },
      dictionary: {
        attributes: {
          'name': 'Name',
          'mob': 'Mobile',
          'gst': 'GST No.'
        }
      }
    }
  },
  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    validateForm () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$store.commit('getCreditSaleData', this.form)
          this.$router.go(-1)
        }
      })
    }
  }
}
