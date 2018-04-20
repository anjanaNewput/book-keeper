import { Validator, ErrorBag } from 'vee-validate'
export default {
  data () {
    return {
      firmName: '',
      bankAccounts: {
        bankAccount1: '',
        bankAccount2: '',
        bankAccount3: ''
      },
      financialYear: '',
      hasVal: '',
      dictionary: {
        attributes: {
          'firmName': 'Firm/Company name',
          'bankAccounts.bankAccount1': 'Bank account I',
          'bankAccounts.bankAccount2': 'Bank account II',
          'bankAccounts.bankAccount3': 'Bank account III',
          'financialYear': 'Financial year'
        },
        custom: {
          firmName: {
            required: () => 'Firm/Company name can not be empty',
          },
          financialYear: {
            required: 'Required'
          }
        }
      }
    }
  },
  mounted () {
    Validator.extend('isNumeric', {
      getMessage: (field) => {
        return 'enter valid year'
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
        this.hasVal = 'has-val'
      } else {
        this.hasVal = ''
      }
    }
  },
  computed: {
    hasValue () {
      if (this.hasVal) {
        return true
      } else {
        return false
      }
    },
    finantialYearRange () {
      if(this.financialYear){
        return `<h4>01/04/${this.financialYear} - 31/03/${new Date(this.financialYear).getFullYear()+1}</h4>`
      }
    }
  }
}
