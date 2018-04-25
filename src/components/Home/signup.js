import { Validator } from 'vee-validate'

export default {
  data () {
    return {
      email: '',
      password: '',
      mob: '',
      userName: '',
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
    register (e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$localStorage.set('userLoggedIn', true)
          this.$store.commit('checkUser', true)
          this.$router.push('/dashboard')
          // this.onRegistrationSuccess(this.email)
        }
      })
    }
  }
}
