<template>
  <div id="app">
    <nav class="navbar navbar-default" id="header">
      <div class="container-fluid header-cont">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/"><img class="logo" src="./assets/img/logo.png"></router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Expenditure</router-link></li>
          <li><router-link to="/">Income</router-link></li>
          <li><router-link to="/">Deposit</router-link></li>
          <li><router-link to="">Withdraw</router-link></li>
          <li><a @click="logout"><span class="glyphicon glyphicon-off"></span></a></li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <div class="footer">Copyright &copy; 2018 by Newput Inc. All rights reserved. BookKeeper and BookKeeper logo are trademarks of Newput Inc. Patent pending
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      alert('logout')
    }
  }
}
</script>
<style lang='scss'>
@import './assets/scss/app.scss'
</style>
