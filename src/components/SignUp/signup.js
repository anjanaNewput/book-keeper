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
      console.log(e);
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isLoading = true
          apiServices.SignUp(this.user).then((data) => {
            console.log(data);
            if(data.body.response) {
              var email = data.body.response.user.email
              this.$store.commit('setEmail', email)
              this.$localStorage.set('email', email)
              this.$localStorage.set('userLoggedIn', true)
              this.$store.commit('checkUser', true)
              this.isLoading = false
              this.$router.push('/dashboard')
            } else {
              this.validationErrors.push(data.body.errors)
              console.log(this.validationErrors);
            }
          })
        }
      })
    }
  }
}
