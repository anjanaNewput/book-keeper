import { Validator } from 'vee-validate'

export default {
  data () {
    return {
      viaEmail: false,
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
      }
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
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          if (this.mail === 'anjana@newput.com' && this.password === '123456') {
            this.onLoginSuccess(this.mail)
          } else {
             alert('Please Enter the correct email and password')
             this.mail= ''
             this.password= ''
          }
        }
      })
    },
    onLoginSuccess (email) {
      this.$store.commit('setEmail', email)
      this.$localStorage.set('email', email)
      this.$localStorage.set('userLoggedIn', true)
      this.$store.commit('checkUser', true)
      this.$router.push('/dashboard')
    },
    loginViaEmail () {
      this.viaEmail = !this.viaEmail
    }
  }
}
