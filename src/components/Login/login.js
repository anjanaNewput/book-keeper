import { Validator } from 'vee-validate'
import apiServices from '@/services/apiServices.js'
export default {
  data () {
    return {
      viaEmail: false,
      show: false,
      password: '',
      mail: '',
      mob: '',
      otp: '',
      dictionary: {
        attributes: {
          'mail': 'Email',
          'password': 'Password',
          'mob': 'Mobile'
        }
      },
      isLoading: false,
      validationErrors: []
    }
  },
  mounted () {
    Validator.extend('mob', {
      getMessage: (field) => {
        return 'Enter valid number!'
      },
      validate: (value) => {
        if(!/^[1-2][0-9][0-9][0-9]/.test(value)){
          this.financialYear =''
          return false;
        } else {
          return true;
        }
      }
    });
    Validator.extend('email', {
      getMessage: (field) => {
        return 'Enter a valid email address'
      },
      validate: (value) => {
        return (/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.com$/i.test(value))
      }
    });
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    validateForm: function (scope) {
      this.isLoading = true
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          apiServices.login({"email": this.mail, "password": this.password}).then((data) => {
            if(data.body.status && data.body.response) {
              this.onLoginSuccess(data.body.response.user.email)
              this.isLoading = false
            } else {
              this.validationErrors = []
              this.validationErrors.push(data.body.errors)
              this.isLoading = false
            }
            this.isLoading = false
          })
        }
      })
    },
    onLoginSuccess (email) {
      this.$store.commit('setEmail', email)
      this.$store.commit('checkUser', true)
      if(this.$store.state.paymentDone) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/plan')
      }
    },
    loginViaEmail () {
      this.viaEmail = !this.viaEmail
    }
  },
  computed: {
    isUnauthorizedUser () {
      this.isLoading = false
      return this.$store.state.isunathorized
    }
  }
}
