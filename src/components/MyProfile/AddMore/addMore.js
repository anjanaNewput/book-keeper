import { Validator } from 'vee-validate'

export default {
  name: 'AddMore',
  data () {
    return {
      viewName: '',
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
    Validator.extend('isNumeric', {
      getMessage: (field) => {
        return 'Should be a numeric value.'
      },
      validate: (value) => {
        if(!/^[0-9]/.test(value)){
          return false;
        } else {
           return true;
        }
      }
    });
    this.$validator.localize('en', this.dictionary)

    if (this.$route.params.viewName) {
      this.viewName = this.$route.params.viewName
    } else {
      if (this.$route.params.type === 'creditor') {
        this.viewName = 'Add Creditor'
      } else {
        this.viewName = 'Add Debitor'
      }
    }
  },
  methods: {
    validateForm () {
      this.$validator.validateAll().then(result => {
        if (result) {
          if (this.viewName === 'Add Creditor') {
            this.$store.commit('setCreditorData', this.form)
          } else {
            this.$store.commit('setDebitorData', this.form)
          }
          this.goBack()
        }
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
