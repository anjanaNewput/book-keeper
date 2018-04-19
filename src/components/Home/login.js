export default {
  data () {
    return {
      pwd: '',
      hasVal: '',
      email: ''
    }
  },
  methods: {
    submitForm: function (submitEvent) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log(result)
          return
        }
      })
    },
    blurFunction () {
      if (this.email || this.pwd) {
        this.hasVal = 'has-val'
      } else {
        this.hasVal = ''
      }
    }
  },
  computed: {
    hasValue () {
      if (this.hasVal) {
        return this.hasVal
      }
    }
  }
}
