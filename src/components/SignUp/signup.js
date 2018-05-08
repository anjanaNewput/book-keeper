import { Validator } from 'vee-validate'
import apiServices from '@/services/apiServices.js'
export default {
  data () {
    return {
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
    });
    Validator.extend('email', {
      getMessage: (field) => {
        return 'Enter a valid email address.'
      },
      validate: (value) => {
        return (/^[a-zA-Z0-9._-]+@[a-zA-Z]+\.com$/i.test(value))
      }
    });
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    register (e) {
      console.log(e);
      this.$validator.validateAll().then((result) => {
        if (result) {
          apiServices.SignUp(this.user).then((data) => {
            console.log(data.body.response);
            var email = data.body.response.user.email
            this.$store.commit('setEmail', email)
            this.$localStorage.set('email', email)
            this.$localStorage.set('userLoggedIn', true)
            this.$store.commit('checkUser', true)
            this.$router.push('/dashboard')
          }, (response) => {
              console.log(response);
          })
        }
      })
    }
  }
}
