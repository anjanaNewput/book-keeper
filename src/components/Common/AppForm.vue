<template>
  <div>
    <ul class="list-inline" id="navigation-menu">
      <li v-for="(menu, index) in menus" :class="{ active: activeMenu == index}" v-bind:key="menu" @click="menuClicked(menu, index)"><a>{{menu}}</a></li>
    </ul>
    <div>
    <div slot="form-content" class="form-content">
      <div class="row">
        <div class="col-xs-6">Cash: 1,23,3000</div>
        <div class="col-xs-6 text-right">Bank: 20,30,000</div>
      </div>
      <form class="expenses-form">
        <div style="border: 2px solid #f1f1f1; border-radius:2px; padding:20px;">
          <div class="form-group">
            <label class="col-md-4">Date</label>
            <div class="input-group date col-md-8" id="datetimepicker" @click="openCalendar">
              <input type="text" class="form-control" />
              <span class="input-group-addon">
                  <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4">Expenses</label>
            <div class="input-group col-md-8">
              <basic-select :options="options" :selected-option="item" placeholder="select item" @select="onSelect"></basic-select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4">Amount:</label>
            <div class="input-group col-md-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4">Paid To:</label>
            <div class="input-group col-md-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label class="col-md-4">Paid For:</label>
            <div class="input-group col-md-8">
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="form-group col-sm-12">
            <div class="col-xs-4 text-center">
              <input class="form-check-input" name="payement-mode" v-model="payType" type="radio" id="cash" value="0">
              <label class="form-check-label" for="cash">Cash</label>
            </div>
            <div class="col-xs-4 text-center">
              <input class="form-check-input" name="payement-mode" type="radio" v-model="payType" id="bank" value="1">
              <label class="form-check-label" for="bank">Bank</label>
            </div>
            <div class="col-xs-4 text-center">
              <input class="form-check-input" name="payement-mode" type="radio" v-model="payType" id="credit" value="2">
              <label class="form-check-label" for="credit">Credit</label>
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" @click.prevent="addEntry">Add</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  </div>

</template>
<script>
import Datepicker from 'vuejs-datepicker'
import { BasicSelect } from 'vue-search-select'
export default {
  data () {
    return {
      menus: ['Expenses', 'Income', 'Withdraw', 'Deposit', 'Sale', 'Purchase'],
      activeMenu: 0,
      payType: 0,
      options: [
        { value: '1', text: 'Salaries' },
        { value: '2', text: 'Repairs' },
        { value: '3', text: 'Goods Purchases' },
        { value: '4', text: 'Travelling' },
        { value: '5', text: 'Conveyences' },
        { value: '6', text: 'Telephone Bill' },
        { value: '7', text: 'Office Rent' },
        { value: '8', text: 'Stationary & Painting' },
        { value: '9', text: 'Insurance' },
        { value: '10', text: 'Tea & coffee' }
      ],
      searchText: '', // If value is falsy, reset searchText & searchItem
      item: {
        value: '',
        text: ''
      },
    }
  },
  methods: {
    menuClicked (page, index) {
      this.activeMenu = index
      this.$router.push({name: page})
    },
    openCalendar (el) {
      $('#datetimepicker').datepicker()
    },
    onSelect (item) {
      this.item = item
    },
    reset () {
      this.item = {}
    },
    selectOption () {
      this.item = this.options[0]
    },
    addEntry (){
      console.log(this.payType)
    }
  },
  components: {
    Datepicker,
    BasicSelect
  }
}
</script>
