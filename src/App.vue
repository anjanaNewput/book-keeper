<template>
  <div id="app">
    <nav class="navbar navbar-default" id="header">
      <div class="container-fluid header-cont">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/"><img class="logo" src="./assets/img/logo.png"></router-link>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><router-link to="/">Home</router-link></li>
          <li v-if="userEmail"><router-link to="/">Expenditure</router-link></li>
          <li v-if="userEmail"><router-link to="/">Income</router-link></li>
          <li v-if="userEmail"><router-link to="/">Deposit</router-link></li>
          <li v-if="userEmail"><router-link to="">Withdraw</router-link></li>
          <li v-if="userEmail"><a @click="logout">{{userEmail}}  <span class="glyphicon glyphicon-off"></span></a></li>
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
  computed: {
    userEmail: function () {
      return this.$store.state.email
    },
    userLoggedIn: function () {
      return this.$store.state.isUserLogged
    }
  },
  mounted: function () {
    this.$store.commit('checkUser', this.$localStorage.get('userLoggedIn') != null ? this.$localStorage.get('userLoggedIn') : false)
    this.$store.commit('setEmail', this.$localStorage.get('email') != null ? this.$localStorage.get('email') : '')
  },
  methods: {
    logout: function () {
      this.$localStorage.remove('userLoggedIn')
      this.$localStorage.remove('email')
      this.$store.commit('setEmail', '')
      this.$store.commit('checkUser', false)
      this.$router.push('/')
    }
  }
}
</script>
<style lang='scss'>
@import './assets/scss/app.scss'
</style>
