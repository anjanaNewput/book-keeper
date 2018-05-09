import { Validator } from 'vee-validate'
import apiServices from '@/services/apiServices.js'
export default {
  data () {
    return {
      isLoading: false,
      validationErrors: [],
      user: {
        email: '',
        password: '',
        mob_num: '',
        name: ''
      },
      dictionary: {
        attributes: {
          'userName': 'Name',
          'email': 'Email',
          'mob': 'Mobile',
          'password': 'Password'
        }
      }
    }
  },
  mounted () {
    Validator.extend('isNumeric', {
      getMessage: (field) => {
        return 'Should be numeric value.'
      },
      validate: (value) => {
        if(!/^[0-9]/.test(value)){
          return false;
        } else {
           return true;
        }
      }
    })
    Validator.extend('email', {
      getMessage: (field) => {
        return 'Enter a valid email address.'
      },
      validate: (value) => {
        return (/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.com$/i.test(value))
      }
    })
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    register (e) {
      this.isLoading = true
      this.$validator.validateAll().then((result) => {
        if (result) {
          apiServices.signUp(this.user).then((data) => {
            if(data.body.response) {
              var email = data.body.response.user.email
              this.$store.commit('setEmail', email)
              this.$store.commit('checkUser', true)
              if(this.$store.state.paymentDone) {
                this.$router.push('/dashboard')
              } else {
                this.$router.push('/plan')
              }
            } else {
              this.validationErrors = []
              for (let key in data.body.errors) {
                this.validationErrors.push(data.body.errors[key][0])
              }
            }
            this.isLoading = false
          })
        }
      })
    }
  }
}
