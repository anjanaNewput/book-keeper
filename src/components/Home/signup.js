import { Validator } from 'vee-validate'

export default {
  data () {
    return {
      config: {
        format: 'YYYY ',
        useCurrent: false,
        showClear: true,
        showClose: true,
        debug: true
      },
      firmName: '',
      email: '',
      password: '',
      bankAccounts: {
        bankAccount1: '',
        bankAccount2: '',
        bankAccount3: ''
      },
      fromFinancialYear: null,
      toFinancialYear: null,
      hasVal: '',
      dictionary: {
        attributes: {
          'firmName': 'Firm/Company name',
          'bankAccounts.bankAccount1': 'Bank I',
          'bankAccounts.bankAccount2': 'Bank II',
          'bankAccounts.bankAccount3': 'Bank III',
          'financialYear': 'Financial year',
          'email': 'Email'
        },
        custom: {
          fromFinancialYear: {
            required: 'Required'
          },
          toFinancialYear: {
            required: 'Required'
          }
        }
      }
    }
  },
  mounted () {
    Validator.extend('isNumeric', {
      getMessage: (field) => {
        return 'Enter valid year!'
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
    register (e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$localStorage.set('userLoggedIn', true)
          this.$store.commit('checkUser', true)
          this.$router.push('/dashboard')
          // this.onRegistrationSuccess(this.email)
        }
      })
    },
    blurFunction (e) {
      if (e.target.value) {
        if(e.target.className.includes('has-val')){
            e.target.className = e.target.className
        } else {
          e.target.className = e.target.className + ' ' + 'has-val'
        }
      } else {
        e.target.className = e.target.className
      }
    },
    showPicker (e) {
      if(e.target.value) {
        e.target.value = ''
      }
    }
  }
}
