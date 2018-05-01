import { Validator } from 'vee-validate'
import { ModelSelect } from 'vue-search-select'

export default {
  name: 'CompanyInfo',
  data () {
    return {
      firmName: '',
      finacialYear: '',
      bankDetails:[
        { 'bank1': {'id': 1, 'name': '', 'accountNo': '' } },
        { 'bank2': {'id': 2, 'name': '', 'accountNo': '' } },
        { 'bank3': {'id': 3, 'name': '', 'accountNo': '' } }
      ],
      banks: [
        {'value': 'sbi', 'text': 'SBI'},
        {'value': 'hdfc', 'text': 'HDFC'},
        {'value': 'icici', 'text': 'ICICI'},
        {'value': 'pnb', 'text': 'PNB'},
        {'value': 'idbi', 'text': 'IDBI'},
        {'value': 'ub', 'text': 'Union Bank'}
      ],
      min: 2016,
      max: new Date().getFullYear(),
      options: [],
      rows: 3,
      searchText: '',
      dictionary: {
        attributes: {
          'firmName': 'Company/Firm Name',
          'finacialYear': 'Financial Year'
        },
        messages: {
          'required': 'Required'
        }
      }
    }
  },
  mounted () {
    for (var i = this.min; i <= this.max; i++) {
      let year = `${i}-${i+1}`
      this.options.push(year)
    }

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
    validateForm () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('Submit')
        } else {
          alert('Error')
        }
      })
    },
    addMoreRow () {
      this.rows = this.rows + 1
    }
  },
  computed: {
    getRows () {
      let bank = {}
      let obj = {}
      if(this.rows > 3){
        bank= {
          'id': this.rows,
          'name': '',
          'accountNo': ''
        }

        obj[`bank${this.rows}`] = Object.assign({}, bank)
        this.bankDetails.push(obj)
      }
      return this.bankDetails
    },
    toFinancialYear () {
      if(this.fromFinacialYear){
        return this.fromFinacialYear+1
      }
    }
  },
  components: {
    ModelSelect
  }
}
